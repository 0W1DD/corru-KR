/*/ 여기에 도착했다면 그리고 이게 뭔지 모르겠다면, /*/
/*/ 아마도 링크를 클릭했을 것 같습니다. 모드를 올바르게 설치하세요.  /*/
/*/ 앞으로 코드를 보지 마세요. 스포일러가 있습니다!!! 히히          /*/
/*/ 설치 가이드: https://corru-kr.github.io/corru-KR/tutorial.MP4    /*/
/*/ 모드 페이지: https://github.com/corru-KR/corru-KR                 /*/

/*    cor-KR - corru.observer를 위한 한글 로컬라이제이션 모드;
    자세한 정보는 https://github.com/corru-KR/corru-KR 참고
    > cor-KR.js
    중요한 코드!!! 전체 모드를 로드합니다...
*/

// EP1이 시작되었거나 크레딧에서 시도할 때 경고
if ((page.path == '/' && !check('TEMP!!sat') && check('ep0_epilogue') && !check('ep1_showmaterials')) || env.ep1 == true) {
    chatter({actor: 'actual_site_error', text: "안녕! cor-KR은 현재 EP0까지만 지원합니다<br>더 많은 번역이 준비 중입니다!", readout: true})
    throw new Error("cor-KR은 현재 EP0까지만 지원합니다")
}

env.localization = {
   dialogues: {},
   definitions: {},
    strings: {},
    entityDescriptions: {},
   page: {}
}

cor_kr = {
    css: `
    @font-face {
        font-family: 'noto-sans-kr';
        src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    
    body[state="corru-loaded"][menu="none"]:not(.in-dialogue)::before,
    body.loading::after, 
    body.corru-refreshing::after {
        content: "경고::'시각적 깜빡임에 민감한 경우, 광과민성 발작이 발생할 수 있습니다.';\\A'GPU 가속이 활성화되어 있는지 확인하십시오.';\\A'제3자 확장 기능은 성능에 영향을 줄 수 있습니다.';\\A'계속은 사용자의 판단입니다.'";
        font-family: monospace;
        font-size: 0.75em;
        max-width: 600px;
        position: fixed;
        z-index: 1000;
        display: block;
        top: 10vh;
        background: var(--dark-color);
        padding: 0.25em;
        text-align: center;
        line-height: 1.25em;
        white-space: pre-wrap;
        pointer-events: none;
    }
    
    body.loading::after, 
    body.corru-refreshing::after {
        content: "알림::'사고 버퍼 정리 중';'진행 상황은 저장됩니다'";
        padding: 1em;
        top: 50%;
        transform: translateY(-100%);
        opacity: 1;
        display: block;
    }
    `,
    
    // 번역 처리 함수들
    processStringTranslation: function(text) {
        if (!text) return text;
        // 번역 데이터가 있으면 적용
        return env.localization.strings[text] || text;
    },
    
    processDefinitionsInString: function(text) {
        if (!text || !env.localization.definitions) return text;
        return env.localization.definitions[text] || text;
    },
    
    processSpecificTranslation: function (selector, attribute = false) {
        if (!selector) return;
        
        if (attribute == false) {
            selector.forEach(el => {
                for (const childNode of el.childNodes) {
                    if (childNode.nodeType === Node.TEXT_NODE) {
                        const translated = cor_kr.processStringTranslation(childNode.textContent);
                        if (childNode.textContent != translated) {
                            childNode.textContent = translated;
                        }
                    }
                }
            })
        } else {
            selector.forEach(el => {
                if (el.getAttribute(attribute) != null) {
                    const translated = cor_kr.processStringTranslation(el.getAttribute(attribute));
                    if (el.getAttribute(attribute) != translated) {
                        el.setAttribute(attribute, translated);
                    }
                }
            })
        }
    },
    
    processStatic: function (force) {
        cor_kr.processSpecificTranslation(document.querySelectorAll('title'));
        if (force) processTranslation(document.querySelector(`#static`), true);
        else processTranslation(document.querySelector(`#static`));
    },
    
    processMenu: function () {
        processTranslation(env.menu['system-menu']);
        processTranslation(env.menu['entity-menu']);
        processTranslation(document.querySelector("#meta-menu"));
        cor_kr.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
    },
    
    processReply: function () {
        cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'name');
        cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'definition');
        cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'endtext');
    },
    
    observer: {
        common: {
            func: (consolething) => {
                processTranslation();
                processTranslation(document.querySelector(`#mindspike-scanner`));
                if (document.querySelector("#combat")) {
                    processTranslation(document.querySelector(`#combat`), true);
                }
                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: () => {
                cor_kr.observer.common.itself.observe(document.querySelector("#mindspike-scanner"), { childList: true, subtree: true });
                cor_kr.observer.common.itself.observe(document.querySelector("#content"), { childList: true, subtree: true });
                console.log("%c공통 감시자 설정됨! - @cor-KR", "color: #4CAF50; font-weight: bold;");
            }
        },
        
        dialogue: {
            func: (consolething) => {
                cor_kr.processReply();
                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: () => {
                cor_kr.observer.dialogue.itself.observe(document.querySelector("#dialogue-box"), { childList: true });
                console.log("%c대화 감시자 설정됨! - @cor-KR", "color: #2196F3; font-weight: bold;");
            }
        },
        
        page: {
            func: (consolething) => {
                new Promise((resolve) => {
                    if (consolething) cor_kr.updateResources();
                    resolve(getLocalizationForPage(true));
                })
                .then(() => {
                    processTranslation();
                    cor_kr.processStatic(true);
                    cor_kr.processMenu();
                    processTranslation(document.querySelector(`#definition-box`));
                    processTranslation(document.querySelector(`#mindspike-scanner`));
                    
                    cor_kr.observer.common.observe();
                    cor_kr.observer.dialogue.observe();
                    
                    if (consolething) console.log(consolething[0], consolething[1]);
                })
            },
            observe: () => {
                cor_kr.observer.page.itself.observe(body, {attributes: true, attributeFilter: ['page']});
                console.log("%c페이지 감시자 설정됨! - @cor-KR", "color: #FF9800; font-weight: bold;");
            }
        }
    },
    
    // 리소스 로드
    list: {
        everything: "https://corru-kr.github.io/corru-KR/localization/everystuff.js",
        page: {
            fbx: "https://corru-kr.github.io/corru-KR/localization/basement.js",
            hello: "https://corru-kr.github.io/corru-KR/localization/auth-layer.js",
            hub: "https://corru-kr.github.io/corru-KR/localization/hub.js",
            localcity: "https://corru-kr.github.io/corru-KR/localization/their-city.js",
            citystreet: "https://corru-kr.github.io/corru-KR/localization/city-surface.js",
            localorbit: "https://corru-kr.github.io/corru-KR/localization/the-void.js",
            dullvessel: "https://corru-kr.github.io/corru-KR/localization/our-dull-vessel.js",
            localocean: "https://corru-kr.github.io/corru-KR/localization/their-waters.js",
            localship: "https://corru-kr.github.io/corru-KR/localization/their-vessel.js",
        },
        entityMenu: "https://corru-kr.github.io/corru-KR/localization/entity-menu.js",
        load: "https://corru-kr.github.io/corru-KR/load.js",
    },
    
    updateResources: function (fresh = false) {
        let listArray = [];
        if (fresh == true) {
            listArray.push(cor_kr.list.everything);
            listArray.push(cor_kr.list.entityMenu);
            if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
                listArray.push(cor_kr.list.page[page.dialoguePrefix]);
            }
            listArray.push(cor_kr.list.load);
        } else {
            if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
                if (document.querySelectorAll(`script[src="${cor_kr.list.page[page.dialoguePrefix]}?v=${page.cacheval}"]`).length == 0) {
                    listArray.push(cor_kr.list.page[page.dialoguePrefix]);
                }
            }
        }
        
        if (listArray.length != 0) {
            console.log("%c다음 리소스 업데이트 중! - @cor-KR", "color: #9C27B0; font-weight: bold;");
            console.log(listArray);
            return addResources(listArray);
        } else {
            console.log("%c리소스 업데이트 필요 없음! - @cor-KR", "color: #607D8B; font-weight: bold;");
        }
    },
    
    devElement: `<div class="devs ulbox tdone cor-kr">
        <ul class="tdone">
            <h4 class="tdone">비공식 번역 팀</h4>
            <li class="tdone"><span class="tdone" definition="디스코드">cor-KR 커뮤니티</span></li>
        </ul>
    </div>`,
    
    devved: function () {
        if (env.menu["system-menu"].querySelector(".devs.cor-kr") == null) {
            env.menu["system-menu"].querySelector(".devs").insertAdjacentHTML('afterend', cor_kr.devElement);
        }
    }
};

// 뮤테이션 옵저버 설정
cor_kr.observer.common.itself = new MutationObserver(() => {
    cor_kr.observer.common.func(["%c공통 감지됨! - @cor-KR", "color: #4CAF50;"]);
});

cor_kr.observer.dialogue.itself = new MutationObserver(() => {
    cor_kr.observer.dialogue.func(["%c대화 감지됨! - @cor-KR", "color: #2196F3;"]);
});

cor_kr.observer.page.itself = new MutationObserver(() => {
    cor_kr.observer.page.func(["%c페이지 감지됨! - @cor-KR", "color: #FF9800;"]);
});

console.log("%c질문, 제안, 버그 보고는 GitHub 이슈를 통해 주세요! - @cor-KR", "color: #E91E63; font-weight: bold;");

// CSS 추가
if (!document.querySelector("#cor-kr-css")) {
    document.head.appendChild(
        document.createElement('style').appendChild(
            document.createTextNode(cor_kr.css)
        ).parentElement
    ).setAttribute("id", "cor-kr-css");
}

// 리소스 업데이트 시작
cor_kr.updateResources(true);
