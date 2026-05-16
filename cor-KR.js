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
    let lastPath = "";
    setInterval(() => {
        const path = location.pathname;
        if (path === lastPath) return;
        lastPath = path;

        // 페이지가 바뀌었으므로 잠시 후 (원본 페이지 스크립트 실행 뒤) 오버라이드 재적용
        setTimeout(() => {
            try {
                if (path.indexOf("/fbx") !== -1 && typeof cor_kr.applyBasementOverrides === "function") {
                    cor_kr.applyBasementOverrides();
                    console.log("[cor-KR] basement entity 오버라이드 재적용 완료");
                }
                if (typeof getLocalizationForPage === "function") getLocalizationForPage(true);
                cor_kr.applyGlobalTranslations();
            } catch (e) {
                console.warn("[cor-KR] page-change reapply failed", e);
            }
        }, 500);

        // 한번 더 늦게 재적용 (원본 스크립트가 비동기로 덮을 가능성 대비)
        setTimeout(() => {
            try {
                if (path.indexOf("/fbx") !== -1 && typeof cor_kr.applyBasementOverrides === "function") {
                    cor_kr.applyBasementOverrides();
                }
            } catch (e) {}
        }, 1500);
    }, 400);
})();
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
