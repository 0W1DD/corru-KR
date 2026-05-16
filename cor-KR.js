/*/ cor-KR - corru.observer를 위한 한글 로컬라이제이션 모드 /*/

env.localization = {
   dialogues: {},
   definitions: {},
    strings: {},
    entityDescriptions: {},
   page: {}
}

cor_kr = {
    baseUrl: (() => {
        const currentSrc = document.currentScript && document.currentScript.src ? document.currentScript.src : "";
        if (currentSrc) {
            return currentSrc.replace(/[^/]*$/, "");
        }
        // Fallback: if currentScript is unavailable, use a known base URL.
        return "https://cdn.jsdelivr.net/gh/0W1DD/corru-KR@main/";
    })(),

    // 번역 처리
    processStringTranslation: function(text) {
        if (!text) return text;
        return env.localization.strings[text] || text;
    },

    getTranslatedString: function(text) {
        if (!text) return text;
        const pageKey = page && page.dialoguePrefix ? page.dialoguePrefix : null;
        const pageStrings = pageKey && env.localization.page && env.localization.page[pageKey]
            ? env.localization.page[pageKey].strings
            : null;
        if (pageStrings && pageStrings[text]) return pageStrings[text];
        if (env.localization.strings && env.localization.strings[text]) return env.localization.strings[text];
        return text;
    },
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
// 재진입 방지 락 (옵저버 → DOM 수정 → 옵저버 재발화 무한 루프 차단)
cor_kr._locks = { common: false, bodychildren: false, gad: false, dialogue: false, masks: false, page: false };
cor_kr._safeRun = function (name, fn) {
    if (cor_kr._locks[name]) return;
    cor_kr._locks[name] = true;
    try { fn(); } catch (e) { console.warn('[cor-KR] ' + name + ' func error', e); }
    // 마이크로태스크 후 해제 (현재 DOM 수정이 트리거한 옵저버 콜백은 무시됨)
    setTimeout(() => { cor_kr._locks[name] = false; }, 0);
};

// 폰트 CSS
cor_kr.css = `
=======
=======

>>>>>>> parent of 06af1c5 (dhll)
=======

>>>>>>> parent of 06af1c5 (dhll)
    installTranslationHook: function () {
        if (cor_kr.translationHookInstalled) return;

        const original = typeof window.processStringTranslation === "function"
            ? window.processStringTranslation
            : null;

        window.processStringTranslation = function (text) {
            const translated = cor_kr.getTranslatedString(text);
            if (translated !== text) return translated;
            if (original) return original(text);
            return text;
        };

        cor_kr.translationHookInstalled = true;
    },

    installLocalizationHook: function () {
        if (cor_kr.localizationHookInstalled) return;
        if (typeof window.getLocalizationForPage !== "function") return;

        const originalGetLocalizationForPage = window.getLocalizationForPage;

        window.getLocalizationForPage = function () {
            const result = originalGetLocalizationForPage.apply(this, arguments);

            if (!result || typeof result !== "object") {
                return result;
            }

            if (!result.strings) result.strings = {};
            if (!result.definitions) result.definitions = {};
            if (!result.entityDescriptions) result.entityDescriptions = {};

            Object.assign(result.strings, env.localization?.strings || {});
            Object.assign(result.definitions, env.localization?.definitions || {});
            Object.assign(result.entityDescriptions, env.localization?.entityDescriptions || {});

            return result;
        };

        cor_kr.localizationHookInstalled = true;
    },

    mergeGlobalIntoPageStrings: function () {
        try {
            const pageKey = page && page.dialoguePrefix ? page.dialoguePrefix : null;
            if (!pageKey) return;

            if (!env.localization.page) env.localization.page = {};
            if (!env.localization.page[pageKey]) env.localization.page[pageKey] = {};
            if (!env.localization.page[pageKey].strings) env.localization.page[pageKey].strings = {};

            Object.assign(env.localization.page[pageKey].strings, env.localization.strings || {});
        } catch (e) {
            console.warn("[cor-KR] mergeGlobalIntoPageStrings failed", e);
        }
    },
    
    // 리소스 로드
    list: {
        basement: null,
        entityMenu: null,
        everystuff: null,
    },

    initList: function() {
        cor_kr.list.basement = cor_kr.baseUrl + "localization/basement.js";
        cor_kr.list.entityMenu = cor_kr.baseUrl + "localization/entity-menu.js";
        cor_kr.list.everystuff = cor_kr.baseUrl + "localization/everystuff.js";
    },
    
    updateResources: function () {
        let listArray = [
            cor_kr.list.everystuff,
            cor_kr.list.entityMenu,
            cor_kr.list.basement
        ];
        
        if (listArray.length > 0) {
            const result = addResources(listArray);

            const afterLoad = () => {
                try {
                    if (typeof getLocalizationForPage === "function") {
                        getLocalizationForPage(true);
                    }
                } catch (e) {
                    console.warn("[cor-KR] getLocalizationForPage refresh failed", e);
                }

                cor_kr.applyGlobalTranslations();
            };

            if (result && typeof result.then === "function") {
                return result.then(afterLoad);
            }

            setTimeout(afterLoad, 300);
            return result;
        }
    },

    applyGlobalTranslations: function () {
        try {
            if (typeof processTranslation !== "function") return;

            cor_kr.installTranslationHook();
            cor_kr.mergeGlobalIntoPageStrings();

            const forceTranslate = (el) => {
                if (!el) return;
                processTranslation(el, true);
            };

            forceTranslate(document.querySelector("#dialogue-box"));
            forceTranslate(document.querySelector("#readout"));
            forceTranslate(document.querySelector("#minireadout"));
            forceTranslate(document.querySelector("#meta-menu"));
            forceTranslate(document.querySelector("#static"));

            if (env && env.menu) {
                forceTranslate(env.menu["system-menu"]);
                forceTranslate(env.menu["entity-menu"]);
                forceTranslate(env.menu["readout"]);
            }

            cor_kr.applyReplySubtitles();
        } catch (e) {
            console.warn("[cor-KR] applyGlobalTranslations failed", e);
        }
    },

    bootApply: function () {
        let attempts = 0;
        const maxAttempts = 40;
        const timer = setInterval(() => {
            attempts += 1;

            try {
                cor_kr.installLocalizationHook();
                if (typeof getLocalizationForPage === "function") {
                    getLocalizationForPage(true);
                }
                cor_kr.applyGlobalTranslations();

                if (env && env.menu && env.menu["system-menu"]) {
                    clearInterval(timer);
                }
            } catch (e) {
                // Keep retrying during early boot while UI mounts.
            }

            if (attempts >= maxAttempts) {
                clearInterval(timer);
            }
        }, 250);
    },

    applyFont: function () {
        if (document.querySelector("#cor-kr-font")) return;

        const style = document.createElement("style");
        style.id = "cor-kr-font";
        style.textContent = `
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
@font-face {
    font-family: 'cor-kr-user-font';
    src: url('${cor_kr.baseUrl}fonts/Ycomputer.otf') format('opentype'),
         url('${cor_kr.baseUrl}fonts/Ycomputer.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body,
#dialogue-box .dialogue-text,
#readout .message,
#minireadout .message {
    font-family: 'cor-kr-user-font', monospace !important;
}

#dialogue-menu .reply {
    position: relative;
}

#dialogue-menu .reply .cor-kr-sub {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1.5em;
    white-space: nowrap;
    pointer-events: none;
    font-family: 'cor-kr-user-font', monospace !important;
    font-size: 0.6em;
    letter-spacing: 0.08em;
    line-height: 1;
}
`;

        document.head.appendChild(style);
    },

    applyReplySubtitles: function () {
        document.querySelectorAll("#dialogue-menu .reply[name]").forEach((reply) => {
            const baseLabel = (reply.getAttribute("name") || "").trim();
            if (!baseLabel) return;

            const translated = cor_kr.getTranslatedString(baseLabel);
            const existing = reply.querySelector(".cor-kr-sub");

            if (translated && translated !== baseLabel) {
                if (existing) {
                    existing.textContent = translated;
                } else {
                    const sub = document.createElement("span");
                    sub.className = "cor-kr-sub";
                    sub.textContent = translated;
                    reply.appendChild(sub);
                }
            } else if (existing) {
                existing.remove();
            }
        });
    },

    observeDialogueMenu: function () {
        if (cor_kr.dialogueObserver) return;

        const dBox = document.getElementById("dialogue-box");
        if (!dBox) return;

        cor_kr.dialogueObserver = new MutationObserver(() => {
            cor_kr.applyReplySubtitles();
        });

        cor_kr.dialogueObserver.observe(dBox, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["name"]
        });

        cor_kr.applyReplySubtitles();
    },

    startObservers: function () {
        cor_kr.observeDialogueMenu();

        if (!cor_kr.translationLoop) {
            cor_kr.translationLoop = setInterval(() => {
                cor_kr.applyGlobalTranslations();
            }, 1200);
        }

        const retry = setInterval(() => {
            if (cor_kr.dialogueObserver) {
                clearInterval(retry);
                return;
            }
            cor_kr.observeDialogueMenu();
        }, 1000);

        setTimeout(() => clearInterval(retry), 15000);
    }
};

console.log("%c[cor-KR] 한글 로컬라이제이션 로드됨", "color: #4CAF50; font-weight: bold;");

// readoutAdd 후킹: 엔티티 메시지 등도 강제 번역
(function() {
    const origReadoutAdd = window.readoutAdd;
    window.readoutAdd = function(opts) {
        if (opts && opts.message && typeof opts.message === "string") {
            // 번역 테이블에서 찾아서 대체
            let dict = (window.getLocalizationForPage && getLocalizationForPage(true).strings) || {};
            if (dict[opts.message]) {
                opts.message = dict[opts.message];
            } else if (env.localization && env.localization.strings && env.localization.strings[opts.message]) {
                opts.message = env.localization.strings[opts.message];
            }
        }
        return origReadoutAdd.apply(this, arguments);
    };
})();

// chatter 후킹: entity 액션의 text 필드도 번역
(function() {
    if (typeof window.chatter !== "function") return;
    const origChatter = window.chatter;
    window.chatter = function(opts) {
        if (opts && opts.text && typeof opts.text === "string") {
            const t = cor_kr.getTranslatedString(opts.text);
            if (t !== opts.text) opts.text = t;
        }
        if (opts && opts.message && typeof opts.message === "string") {
            const t = cor_kr.getTranslatedString(opts.message);
            if (t !== opts.message) opts.message = t;
        }
        return origChatter.apply(this, arguments);
    };
})();

// 페이지 진입 감지: 게임이 자체 basement.js를 로드하여 env.fbx_* 를 덮어쓰므로
// 페이지가 /fbx/로 들어오면 cor-KR의 한국어 entity 정의를 다시 적용한다.
(function() {
    // 1) moveTo 후킹 (게임 자체 navigation 함수)
    const tryHookMoveTo = () => {
        if (typeof window.moveTo !== "function" || window.__corKrMoveToHooked) return false;
        // window.moveTo는 브라우저 기본 함수도 있으므로 게임 함수인지 체크
        const origMoveTo = window.moveTo;
        window.moveTo = function(path) {
            const result = origMoveTo.apply(this, arguments);
            console.log("[cor-KR] moveTo 감지:", path);
            // 게임이 페이지 스크립트를 비동기 로드하므로 여러 시점에 재적용
            [200, 600, 1200, 2500].forEach(delay => {
                setTimeout(() => cor_kr.reapplyForCurrentPage(path), delay);
            });
            return result;
        };
        window.__corKrMoveToHooked = true;
        console.log("[cor-KR] moveTo 후킹 완료");
        return true;
    };

    // moveTo가 아직 정의 안되었을 수 있으므로 재시도
    if (!tryHookMoveTo()) {
        const retry = setInterval(() => {
            if (tryHookMoveTo()) clearInterval(retry);
        }, 200);
        setTimeout(() => clearInterval(retry), 20000);
    }

    // 2) pathname 폴링 (백업) - hash 라우팅 가능성도 포함
    let lastPath = "";
    setInterval(() => {
        const path = location.pathname + location.hash;
        if (path === lastPath) return;
        lastPath = path;
        console.log("[cor-KR] path 변경:", path);
        [300, 900, 1800].forEach(delay => {
            setTimeout(() => cor_kr.reapplyForCurrentPage(path), delay);
        });
    }, 500);

    // 3) 주기적 강제 확인: env.fbx_cyst가 영어인지 검사하여 한국어로 재덮어쓰기
    setInterval(() => {
        try {
            if (typeof env === "undefined" || !env.fbx_cyst) return;
            const t = env.fbx_cyst.Touch && env.fbx_cyst.Touch.text;
            if (t && /[a-zA-Z]/.test(t) && !/[가-힣]/.test(t)) {
                // 영어 그대로면 다시 적용
                if (typeof cor_kr.applyBasementOverrides === "function") {
                    cor_kr.applyBasementOverrides();
                    console.log("[cor-KR] 영어 감지 - basement 강제 재적용");
                }
            }
        } catch (e) {}
    }, 1500);
})();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (consolething != undefined) console.log(consolething[0], consolething[1]);
        },
        observe: () => {
            const ms = document.querySelector("#mindspike-scanner");
            const ct = document.querySelector("#content");
            if (ms) cor_kr.observer.common.itself.observe(ms, { childList: true, subtree: true });
            if (ct) cor_kr.observer.common.itself.observe(ct, { childList: true, subtree: true });
            console.log("%ccommon observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
        }
    },
    bodychildren: {
        func: (consolething) => {
            cor_kr.processWarning();

            const entMenu = document.querySelectorAll('#entity-menu .ent');
            if (entMenu && entMenu.length) {
                entMenu.forEach(e => {
                    if (e.getAttribute('entname') && !e.__corKrHooked) {
                        e.__corKrHooked = true;
                        e.addEventListener('click', () => {
                            try {
                                const entity = flags.detectedEntities[e.getAttribute('pagename')]['entities'][e.getAttribute('entname')];
                                const container = document.querySelector('#entcontent');
                                container.innerHTML = "";

                                let replay = getReadoutMsg({
                                    message: entity.text.replace(/\n/g, "<br>"),
                                    type: `examine ${entity.type}`,
                                    name: entity.displayName || entity.name,
                                    image: entity.image
                                });

                                try {
                                    replay = getReadoutMsg({
                                        message: cor_kr.entity_menu[entity.name]['desc'],
                                        type: `examine ${entity.type}`,
                                        name: cor_kr.entity_menu[entity.name]['name'],
                                        image: entity.image
                                    });
                                } catch (error) {
                                    console.warn("could not localize " + entity.name + " - @cor-KR");
                                }

                                container.insertAdjacentHTML('beforeend', replay);
                                setTimeout(() => container.querySelector('.message').classList.add('active'), 5);
                            } catch (err) { console.warn("[cor-KR] entity click failed", err); }
                        });
                    }
                });
                processTranslation(document.querySelector("#entity-menu"));
            }

            if (consolething != undefined) console.log(consolething[0], consolething[1]);
        },
        observe: () => {
            cor_kr.observer.bodychildren.itself.observe(body, { subtree: false, childList: true });
            console.log("%cbodychildren observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
        }
    },
    gad: {
        func: (consolething) => {
            try {
                cor_kr.processSpecificTranslation(env.menu["system-menu"].querySelectorAll(".mindsci-status"), "definition");
            } catch (e) {}
            if (consolething != undefined) console.log(consolething[0], consolething[1]);
        },
        observe: () => {
            try {
                cor_kr.observer.gad.itself.observe(env.menu["system-menu"].querySelector(".mindsci-status"),
                    { childList: true, subtree: true, attributes: true });
                console.log("%cgad observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
            } catch (e) {}
        }
    },
    dialogue: {
        func: (consolething) => {
            cor_kr.processReply();
            if (consolething != undefined) console.log(consolething[0], consolething[1]);
        },
        observe: () => {
            const dlg = document.querySelector("#dialogue-box");
            if (dlg) cor_kr.observer.dialogue.itself.observe(dlg, { childList: true });
            console.log("%cdialogue observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
        }
    },
    masks: {
        func: (consolething) => {
            const grid = document.querySelector(`.ozo-mask-grid`);
            if (grid) processTranslation(grid);
            cor_kr.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
            cor_kr.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');
            if (consolething != undefined) console.log(consolething[0], consolething[1]);
        },
        observe: () => {
            const grid = document.querySelector(".ozo-mask-grid");
            if (grid) cor_kr.observer.masks.itself.observe(grid, { childList: true });
            console.log("%cmasks observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
        }
    },
    page: {
        func: (consolething) => {
            cor_kr.observer.page.disconnectChildren && cor_kr.observer.page.disconnectChildren();
            new Promise((resolve) => {
                if (consolething) cor_kr.updateResources();
                resolve(getLocalizationForPage(true));
            }).then(() => {
                processTranslation();
                cor_kr.processStatic(true);
                cor_kr.processMenu();
                cor_kr.processWarning();

                const defBox = document.querySelector(`#definition-box`);
                if (defBox) processTranslation(defBox);
                const ms = document.querySelector(`#mindspike-scanner`);
                if (ms) processTranslation(ms);
                const grid = document.querySelector(`.ozo-mask-grid`);
                if (grid) processTranslation(grid);

                cor_kr.processSpecificTranslation("mindpike");
                cor_kr.processSpecificTranslation(document.querySelectorAll(".mindsci-status"), "definition");
                cor_kr.processEntityNamesSafeguard();

                cor_kr.observer.common.observe();
                cor_kr.observer.bodychildren.observe();
                cor_kr.observer.gad.observe();
                cor_kr.observer.dialogue.observe();
                cor_kr.observer.masks.observe();

                if (consolething) console.log(consolething[0], consolething[1]);
            });
        },
        observe: () => {
            cor_kr.observer.page.itself.observe(body, { attributes: true, attributeFilter: ['page'] });
            console.log("%cpage observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
        },
        disconnectChildren: () => {
            // page 전환 시 자식 옵저버들을 모두 disconnect 후 재연결 (스테일 노드 누적 방지)
            try { cor_kr.observer.common.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.bodychildren.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.gad.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.dialogue.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.masks.itself.disconnect(); } catch (e) {}
=======
=======
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
cor_kr.reapplyForCurrentPage = function(path) {
    try {
        const p = path || (location.pathname + location.hash);
        if (p.indexOf("fbx") !== -1 && typeof cor_kr.applyBasementOverrides === "function") {
            cor_kr.applyBasementOverrides();
            console.log("[cor-KR] basement entity 오버라이드 재적용 완료 (path=" + p + ")");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
        }
        if (typeof getLocalizationForPage === "function") getLocalizationForPage(true);
        cor_kr.applyGlobalTranslations();
    } catch (e) {
        console.warn("[cor-KR] reapplyForCurrentPage failed", e);
    }
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// ============= 리소스 목록 및 lazy 로더 =============

cor_kr.list = {
    everything: cor_kr.baseUrl + "localization/everystuff.js",
    page: {
        fbx: cor_kr.baseUrl + "localization/basement.js"
    },
    entityMenu: cor_kr.baseUrl + "localization/entity-menu.js"
};

cor_kr.updateResources = function (fresh = false) {
    let listArray = [];

    if (fresh == true) {
        listArray.push(cor_kr.list.everything);
        listArray.push(cor_kr.list.entityMenu);
        if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
            listArray.push(cor_kr.list.page[page.dialoguePrefix]);
        } else if (page.dialoguePrefix != "notfound") {
            console.warn("[cor-KR] dialoguePrefix '" + page.dialoguePrefix + "' 에 해당하는 로컬라이제이션이 없습니다");
        }
    } else {
        if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
            const url = cor_kr.list.page[page.dialoguePrefix];
            const already = document.querySelectorAll(`script[src="${url}?v=${page.cacheval}"]`).length > 0;
            if (!already) listArray.push(url);
        } else if (page.dialoguePrefix != "notfound") {
            console.warn("[cor-KR] dialoguePrefix '" + page.dialoguePrefix + "' 에 해당하는 로컬라이제이션이 없습니다");
        }
    }

    if (listArray.length != 0) {
        console.log("%c리소스 업데이트 - @cor-KR", cor_kr.fancy.general);
        console.log(listArray);
        return addResources(listArray);
    } else {
        console.log("%c업데이트할 리소스 없음 - @cor-KR", cor_kr.fancy.general);
    }
};

// ============= 옵저버 인스턴스 생성 =============

cor_kr.observer.common.itself = new MutationObserver(() => cor_kr._safeRun('common', () => cor_kr.observer.common.func()));
cor_kr.observer.bodychildren.itself = new MutationObserver(() => cor_kr._safeRun('bodychildren', () => cor_kr.observer.bodychildren.func()));
cor_kr.observer.gad.itself = new MutationObserver(() => cor_kr._safeRun('gad', () => cor_kr.observer.gad.func()));
cor_kr.observer.dialogue.itself = new MutationObserver(() => cor_kr._safeRun('dialogue', () => cor_kr.observer.dialogue.func()));
cor_kr.observer.masks.itself = new MutationObserver(() => cor_kr._safeRun('masks', () => cor_kr.observer.masks.func()));
cor_kr.observer.page.itself = new MutationObserver(() => cor_kr._safeRun('page', () => cor_kr.observer.page.func(true)));

// ============= 부트 =============

// CSS 주입
if (!document.querySelector("#cor-kr-css")) {
    const styleEl = document.createElement('style');
    styleEl.id = "cor-kr-css";
    styleEl.appendChild(document.createTextNode(cor_kr.css));
    document.head.appendChild(styleEl);
}

// 게임의 정의 캐시 무효화 (cor-RU의 핵심 트릭)
page.formedDefinitionStrings = undefined;

// page observer 즉시 시작 (페이지 진입 감지)
cor_kr.observer.page.observe();

// 초기 리소스 로드 + 첫 페이지 처리 (한 번만)
cor_kr.updateResources(true);
setTimeout(() => {
    cor_kr._safeRun('page', () => cor_kr.observer.page.func(false));
}, 1500);
=======
=======
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
setTimeout(() => {
    try {
        const count = Object.keys(env.localization?.strings || {}).length;
        console.log(`[cor-KR] loaded global string count: ${count}`);
    } catch (e) {
        console.warn("[cor-KR] unable to read string count", e);
    }
}, 800);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)
=======
>>>>>>> parent of 06af1c5 (dhll)

// 리소스 업데이트 시작
cor_kr.initList();
cor_kr.installTranslationHook();
cor_kr.installLocalizationHook();
cor_kr.applyFont();
cor_kr.startObservers();
cor_kr.updateResources();
cor_kr.bootApply();
