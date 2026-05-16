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

            processTranslation(document.querySelector("#dialogue-box"));
            processTranslation(document.querySelector("#readout"));
            processTranslation(document.querySelector("#minireadout"));
            processTranslation(document.querySelector("#meta-menu"));
            processTranslation(document.querySelector("#static"));

            if (env && env.menu) {
                processTranslation(env.menu["system-menu"]);
                processTranslation(env.menu["entity-menu"]);
                processTranslation(env.menu["readout"]);
            }

            cor_kr.applyReplySubtitles();
        } catch (e) {
            console.warn("[cor-KR] applyGlobalTranslations failed", e);
        }
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

// 리소스 업데이트 시작
cor_kr.initList();
cor_kr.applyFont();
cor_kr.startObservers();
cor_kr.updateResources();
