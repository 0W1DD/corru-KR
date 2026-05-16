/*
    cor-KR - corru.observer 한국어 로컬라이제이션 모드 (경량화/최적화 버전)
    
    > cor-KR.js
    메인 로더. 불필요한 후킹과 지연을 제거하고, 순수 DOM 옵저버 패턴으로 최적화됨.
*/

// EP1 이후는 미지원
if ((page && page.path == '/' && !check('TEMP!!sat') && check('ep0_epilogue') && !check('ep1_showmaterials')) || env.ep1 == true) {
    try {
        chatter({
            actor: 'actual_site_error',
            text: "hi! cor-KR is availiable only for ep0<br>안녕하세요! cor-KR은 ep0에서만 사용 가능합니다",
            readout: true
        });
    } catch (e) {}
    throw new Error("hi! cor-KR is availiable only for ep0");
}

// 로컬라이제이션 저장소
env.localization = {
    dialogues: {},
    definitions: {},
    strings: {},
    entityDescriptions: {},
    page: {}
};

let cor_kr = window.cor_kr || {};

// 베이스 URL (jsdelivr CDN)
cor_kr.baseUrl = "https://cdn.jsdelivr.net/gh/0W1DD/corru-KR@main/";

// 로깅 색상
cor_kr.fancy = {
    general: 'color:rgb(76, 175, 80)',
    observed: 'color:rgb(33, 150, 243)',
    setobserver: 'color:rgb(156, 39, 176)'
};

// 폰트 및 UI 기본 CSS 설정
cor_kr.css = `
@font-face {
    font-family: 'cor-kr-font';
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
    font-family: 'cor-kr-font', monospace !important;
}
`;

// ============= 번역 유틸리티 함수 =============

cor_kr.processSpecificTranslation = function (selector, attribute = false) {
    if (selector == "mindpike") {
        document.querySelectorAll("#mindspike-examine").forEach(el => {
            for (const childNode of el.childNodes) { childNode.textContent = "조사" }
        });
        document.querySelectorAll("#mindspike-act").forEach(el => {
            for (const childNode of el.childNodes) { childNode.textContent = "행동" }
        });
    }
    else if (attribute == false) {
        selector.forEach(el => {
            for (const childNode of el.childNodes) {
                if (childNode.nodeType === Node.TEXT_NODE) {
                    // 무한 루프 방지: 원문과 번역문이 다를 때만 덮어쓰기
                    let translated = processStringTranslation(childNode.textContent);
                    if (childNode.textContent != translated) childNode.textContent = translated;
                }
            }
        });
    }
    else {
        selector.forEach(el => {
            if (el.getAttribute(attribute) != null) {
                let translatedAttr = processStringTranslation(el.getAttribute(attribute));
                if (el.getAttribute(attribute) != translatedAttr) el.setAttribute(attribute, translatedAttr);
            }
        });
    }
};

cor_kr.processEntityNamesSafeguard = function () {
    document.querySelectorAll("#content .target").forEach(el => {
        let ent = el.getAttribute("entity");
        if (ent) { el.setAttribute("entaltname", processStringTranslation(ent)); }
    });
};

cor_kr.processStatic = function (force) {
    cor_kr.processSpecificTranslation(document.querySelectorAll('title'));
    cor_kr.processSpecificTranslation(document.querySelectorAll(".enter"), 'page');
    processTranslation(document.querySelector(`#static`), !!force);
};

cor_kr.processWarning = function (force) {
    const ids = ['.cryptowarn', '#mod-warning', '#gpu-warning', '#wide-warning', '#dialogue-skip'];
    ids.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) processTranslation(el, !!force);
    });
};

cor_kr.processMenu = function () {
    try {
        env.menu['system-menu'].querySelectorAll(".fundfriend").forEach(el => { el.classList.add('tskip') });
        cor_kr.processSpecificTranslation(env.menu['system-menu'].querySelectorAll('#savetext'), 'placeholder');
        
        processTranslation(env.menu['system-menu']);
        processTranslation(env.menu['entity-menu']);
        processTranslation(document.querySelector("#meta-menu"));
        processTranslation(document.querySelector(`#advance-notice`));
        
        cor_kr.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
        cor_kr.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');
    } catch (e) {}
};

cor_kr.processReply = function () {
    cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'name');
    cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'definition');
    cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'endtext');
};

cor_kr.processReadout = function () {
    processTranslation(document.querySelector("#minireadout"));

    const scanAndSkip = function (selector) {
        if (!selector) return;
        let messages = selector.querySelectorAll(".message");
        let length = messages.length - 1;
        
        messages.forEach(el => {
            // 과거 로그는 tskip 클래스를 부여하여 옵저버가 다시 건드리지 않도록 차단
            if (length > 0) {
                el.classList.add('tskip');
                el.querySelectorAll("*").forEach(c => { c.classList.add('tskip'); });
            }
            if (length == 1) {
                if (el.lastElementChild && el.lastElementChild.textContent == "NOTE::'restored partial recent log'")
                    processTranslation(el, true);
            }
            length--;
        });
        processTranslation(document.querySelector("#readout"));
    };

    scanAndSkip(document.querySelector("#readout"));
    if (env.menu && env.menu['readout']) scanAndSkip(env.menu['readout']);
    if (env.menuStorage && env.menuStorage.elements && env.menuStorage.elements['readout']) scanAndSkip(env.menuStorage.elements['readout']);
};

// ============= 옵저버 정의 (빠른 반응, 락 제거) =============

cor_kr.observer = {
    common: {
        func: () => {
            processTranslation();
            processTranslation(document.querySelector(`#mindspike-scanner`));
            processTranslation(document.querySelector(`#advance-notice`));
            cor_kr.processReadout();
            cor_kr.processEntityNamesSafeguard();

            const combatEl = document.querySelector("#combat");
            if (combatEl) {
                processTranslation(combatEl, true);
                cor_kr.processSpecificTranslation(document.querySelectorAll(".floater"), "amt");
            }
        },
        observe: () => {
            const ms = document.querySelector("#mindspike-scanner");
            const ct = document.querySelector("#content");
            if (ms) cor_kr.observer.common.itself.observe(ms, { childList: true, subtree: true });
            if (ct) cor_kr.observer.common.itself.observe(ct, { childList: true, subtree: true });
            console.log("%c[cor-KR] Common observer active", cor_kr.fancy.setobserver);
        }
    },
    bodychildren: {
        func: () => {
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
                                } catch (error) { /* Fallback to original */ }

                                container.insertAdjacentHTML('beforeend', replay);
                                setTimeout(() => container.querySelector('.message').classList.add('active'), 5);
                            } catch (err) {}
                        });
                    }
                });
                processTranslation(document.querySelector("#entity-menu"));
            }
        },
        observe: () => {
            cor_kr.observer.bodychildren.itself.observe(body, { subtree: false, childList: true });
        }
    },
    gad: {
        func: () => {
            try {
                cor_kr.processSpecificTranslation(env.menu["system-menu"].querySelectorAll(".mindsci-status"), "definition");
            } catch (e) {}
        },
        observe: () => {
            try {
                const msStatus = env.menu["system-menu"].querySelector(".mindsci-status");
                if (msStatus) cor_kr.observer.gad.itself.observe(msStatus, { childList: true, subtree: true, attributes: true });
            } catch (e) {}
        }
    },
    dialogue: {
        func: () => {
            cor_kr.processReply();
        },
        observe: () => {
            const dlg = document.querySelector("#dialogue-box");
            if (dlg) cor_kr.observer.dialogue.itself.observe(dlg, { childList: true });
        }
    },
    masks: {
        func: () => {
            const grid = document.querySelector(`.ozo-mask-grid`);
            if (grid) processTranslation(grid);
            cor_kr.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
            cor_kr.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');
        },
        observe: () => {
            const grid = document.querySelector(".ozo-mask-grid");
            if (grid) cor_kr.observer.masks.itself.observe(grid, { childList: true });
        }
    },
    page: {
        func: (fetchResources) => {
            cor_kr.observer.page.disconnectChildren();
            
            new Promise((resolve) => {
                if (fetchResources) cor_kr.updateResources();
                resolve(getLocalizationForPage(true));
            }).then(() => {
                processTranslation();
                cor_kr.processStatic(true);
                cor_kr.processMenu();
                cor_kr.processWarning();
                cor_kr.processReadout();

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
            });
        },
        observe: () => {
            cor_kr.observer.page.itself.observe(body, { attributes: true, attributeFilter: ['page'] });
        },
        disconnectChildren: () => {
            try { cor_kr.observer.common.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.bodychildren.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.gad.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.dialogue.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.masks.itself.disconnect(); } catch (e) {}
        }
    }
};

// ============= 리소스 목록 및 업데이트 =============

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
        }
    } else {
        if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
            const url = cor_kr.list.page[page.dialoguePrefix];
            const already = document.querySelectorAll(`script[src="${url}?v=${page.cacheval}"]`).length > 0;
            if (!already) listArray.push(url);
        }
    }

    if (listArray.length != 0) {
        console.log("%c[cor-KR] 리소스 로드 중...", cor_kr.fancy.general, listArray);
        return addResources(listArray);
    }
};

// ============= 옵저버 인스턴스 할당 (직접 연결) =============

cor_kr.observer.common.itself = new MutationObserver(() => cor_kr.observer.common.func());
cor_kr.observer.bodychildren.itself = new MutationObserver(() => cor_kr.observer.bodychildren.func());
cor_kr.observer.gad.itself = new MutationObserver(() => cor_kr.observer.gad.func());
cor_kr.observer.dialogue.itself = new MutationObserver(() => cor_kr.observer.dialogue.func());
cor_kr.observer.masks.itself = new MutationObserver(() => cor_kr.observer.masks.func());
cor_kr.observer.page.itself = new MutationObserver(() => cor_kr.observer.page.func(true));

// ============= 부트스트랩 (딜레이 제거, 즉시 실행) =============

if (!document.querySelector("#cor-kr-css")) {
    const styleEl = document.createElement('style');
    styleEl.id = "cor-kr-css";
    styleEl.appendChild(document.createTextNode(cor_kr.css));
    document.head.appendChild(styleEl);
}

// 게임 내부 정의 캐시 무효화로 재번역 유도
page.formedDefinitionStrings = undefined;

// 옵저버 및 리소스 즉시 구동
cor_kr.observer.page.observe();
cor_kr.updateResources(true);
cor_kr.observer.page.func(false); // setTimeout 없이 즉각적인 첫 페이지 번역 실행

console.log("%c[cor-KR] 한국어 로컬라이제이션 최적화 로드 완료", cor_kr.fancy.general);