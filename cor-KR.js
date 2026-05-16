/*/ cor-KR - corru.observer를 위한 한글 로컬라이제이션 모드 /*/

env.localization = {
   dialogues: {},
   definitions: {},
    strings: {},
    entityDescriptions: {},
    page: {}
};

cor_kr = window.cor_kr || {};

// 베이스 URL (jsdelivr CDN)
cor_kr.baseUrl = "https://cdn.jsdelivr.net/gh/0W1DD/corru-KR@main/";

// 로깅 색상
cor_kr.fancy = {
    general: 'color:rgb(76, 175, 80)',
    observed: 'color:rgb(33, 150, 243)',
    setobserver: 'color:rgb(156, 39, 176)'
};

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
            length--;
        });
        processTranslation(document.querySelector("#readout"));
    };

    dothething(document.querySelector("#readout"));
    if (env.menu && env.menu['readout']) dothething(env.menu['readout']);
    if (env.menuStorage && env.menuStorage.elements && env.menuStorage.elements['readout'])
        dothething(env.menuStorage.elements['readout']);
};

// ============= 옵저버 정의 (cor-RU와 동일 구조) =============

cor_kr.observer = {
    common: {
        func: (consolething) => {
            processTranslation();
            processTranslation(document.querySelector(`#mindspike-scanner`));
            processTranslation(document.querySelector(`#advance-notice`));
            cor_kr.processEntityNamesSafeguard();

            if (document.querySelector("#combat")) {
                processTranslation(document.querySelector(`#combat`), true);
                cor_kr.processSpecificTranslation(document.querySelectorAll(".floater"), "amt");
            }

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
        }
    }
};

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
    try {
        const count = Object.keys(env.localization?.strings || {}).length;
        console.log(`[cor-KR] loaded global string count: ${count}`);
    } catch (e) {
        console.warn("[cor-KR] unable to read string count", e);
    }
}, 800);

// 리소스 업데이트 시작
cor_kr.initList();
cor_kr.installTranslationHook();
cor_kr.installLocalizationHook();
cor_kr.applyFont();
cor_kr.startObservers();
cor_kr.updateResources();
cor_kr.bootApply();
