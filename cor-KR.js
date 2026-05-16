/*
    cor-KR - corru.observer 한국어 로컬라이제이션 모드
    cor-RU(https://github.com/cor-RU/cor-RU) 구조를 그대로 차용하여 안정성 확보.

    > cor-KR.js
    메인 로더. 옵저버 설치, 페이지 변경 감지, 리소스 lazy 로드.
*/

// EP1 이후는 미지원 - cor-RU 패턴과 동일
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

cor_kr = window.cor_kr || {};

// 베이스 URL (jsdelivr CDN)
cor_kr.baseUrl = "https://cdn.jsdelivr.net/gh/0W1DD/corru-KR@main/";

// 로깅 색상
cor_kr.fancy = {
    general: 'color:rgb(76, 175, 80)',
    observed: 'color:rgb(33, 150, 243)',
    setobserver: 'color:rgb(156, 39, 176)'
};

// 폰트 CSS
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

// ============= 번역 유틸리티 함수 (cor-RU의 processSpecificTranslation 등) =============

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
                    if (childNode.textContent != processStringTranslation(childNode.textContent))
                        childNode.textContent = processStringTranslation(childNode.textContent);
                }
            }
        });
    }
    else {
        selector.forEach(el => {
            if (el.getAttribute(attribute) != null) {
                if (el.getAttribute(attribute) != processStringTranslation(el.getAttribute(attribute)))
                    el.setAttribute(attribute, processStringTranslation(el.getAttribute(attribute)));
            }
        });
    }
};

cor_kr.processEntityNamesSafeguard = function () {
    document.querySelectorAll("#content .target").forEach(el => {
        let ent = el.getAttribute("entity");
        if (ent) { el.setAttribute("entaltname", processStringTranslation(ent)) }
    });
};

cor_kr.processStatic = function (force) {
    cor_kr.processSpecificTranslation(document.querySelectorAll('title'));
    cor_kr.processSpecificTranslation(document.querySelectorAll(".enter"), 'page');
    if (force) processTranslation(document.querySelector(`#static`), true);
    else processTranslation(document.querySelector(`#static`));
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
    } catch (e) { /* 메뉴 아직 준비 안됨 */ }
};

cor_kr.processReply = function () {
    cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'name');
    cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'definition');
    cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'endtext');
};

cor_kr.processReadout = function () {
    processTranslation(document.querySelector("#minireadout"));

    const dothething = function (selector) {
        if (selector == null) return;
        let messages = selector.querySelectorAll(".message");
        let length = messages.length - 1;
        messages.forEach(el => {
            if (length > 0) {
                el.classList.add('tskip');
                el.querySelectorAll("*").forEach(c => { c.classList.add('tskip') });
            }
            if (length == 1) {
                if (el.lastElementChild && el.lastElementChild.textContent == "NOTE::'restored partial recent log'")
                    processTranslation(el, true);
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

cor_kr.observer.common.itself = new MutationObserver(() => cor_kr.observer.common.func(["%ccommon observed! - @cor-KR", cor_kr.fancy.observed]));
cor_kr.observer.bodychildren.itself = new MutationObserver(() => cor_kr.observer.bodychildren.func(["%cbodychildren observed! - @cor-KR", cor_kr.fancy.observed]));
cor_kr.observer.gad.itself = new MutationObserver(() => cor_kr.observer.gad.func(["%cgad observed! - @cor-KR", cor_kr.fancy.observed]));
cor_kr.observer.dialogue.itself = new MutationObserver(() => cor_kr.observer.dialogue.func(["%cdialogue observed! - @cor-KR", cor_kr.fancy.observed]));
cor_kr.observer.masks.itself = new MutationObserver(() => cor_kr.observer.masks.func(["%cmasks observed! - @cor-KR", cor_kr.fancy.observed]));
cor_kr.observer.page.itself = new MutationObserver(() => cor_kr.observer.page.func(["%cpage observed! - @cor-KR", cor_kr.fancy.observed]));

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

// 초기 리소스 로드 + 첫 페이지 처리
cor_kr.updateResources(true);

// 첫 페이지 처리도 트리거 (page observer가 첫 진입은 못 잡을 수 있음)
setTimeout(() => {
    try {
        cor_kr.observer.page.func();
    } catch (e) { console.warn("[cor-KR] 초기 페이지 처리 실패", e); }
}, 1000);

console.log("%c[cor-KR] 한국어 로컬라이제이션 로드됨 - cor-RU 구조 기반", cor_kr.fancy.general);
console.log("%c문의/버그: GitHub @0W1DD/corru-KR - @cor-KR", cor_kr.fancy.general);
