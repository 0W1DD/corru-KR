/*
    cor-KR - a Korean localization mod for corru.observer;
    see https://github.com/0W1DD/corru-KR for more info

    This project references the cor-RU translation team's work.
    러시아팀 번역(cor-RU)을 참고했습니다.

    > cor-KR.js
    main loader for the Korean localization resources.
*/

// 현재 공개 번역 범위는 EP0로 제한합니다.
if ((page.path == '/' && !check('TEMP!!sat') && check('ep0_epilogue') && !check('ep1_showmaterials')) || env.ep1 == true) {
    chatter({actor: 'actual_site_error', text: "hi! cor-KR is available only for ep0<br>안녕하세요! cor-KR은 현재 ep0에서만 사용할 수 있습니다", readout: true})
    throw new Error("hi! cor-KR is available only for ep0")
}

env.localization = {
   dialogues: {},
   definitions: {}, 
   strings: {}, 
   entityDescriptions: {},
   page: {}
}

const cor_kr_script_src = (() => {
    let script = document.currentScript
        || Array.from(document.getElementsByTagName('script')).find(s => s.src && s.src.includes('cor-KR.js'));
    return script ? script.src : '';
})();

const cor_kr_base_path = cor_kr_script_src ? cor_kr_script_src.replace(/\/[^\/]*$/, '/') : '';

cor_kr = {
    css: `
@font-face {
    font-family: 'ycomputer';
    src: url('${cor_kr_base_path}fonts/Ycomputer.ttf') format('truetype'),
         url('${cor_kr_base_path}fonts/Ycomputer.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'cafe24';
    src: local("Cafe24 Ssurround Regular"), local("Cafe24Ssurround"), local("Cafe24");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

:root {
    --cor-kr-font: 'ycomputer', "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif;
    --cor-kr-choice-font: 'cafe24', 'ycomputer', "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif;
}

body {
    font-family: var(--cor-kr-font);
}

#dialogue-box,
#readout,
#minireadout,
#system-menu,
#entity-menu,
.menu,
.button,
.reply,
.response {
    font-family: var(--cor-kr-font);
}

#dialogue-box .reply,
.reply,
#dialogue-box .response,
.response {
    font-family: var(--cor-kr-choice-font) !important;
}

body[state="corru-loaded"][menu="none"]:not(.in-dialogue)::before, body.loading::after, body.corru-refreshing::after {
    content: "경고::'마인드스파이크 사용은 광과민성 뇌전증이 있는 사용자에게 발작을 유발할 수 있습니다.';\\A'하드웨어 가속을 켜 두면 일시적인 화면 어긋남을 줄일 수 있습니다.';\\A'일부 브라우저 확장 프로그램은 성능에 영향을 줄 수 있습니다.';\\A'계속 진행할지는 사용자의 판단에 따릅니다.'";
    font-family: var(--cor-kr-font);

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

body.loading::after, body.corru-refreshing::after {
    content: "주의::'마인드스파이크 버퍼 정리 중';'진행 상황은 사라지지 않습니다'";
    padding: 1em;
    top: 50%;
    transform: translateY(-100%);
    opacity: 1;
    display: block;
}

body.loading::after {
    content: "알림::'리소스 불러오는 중';'잠시만 기다려 주세요'";
}

#meta-menu .moth-trigger:after,
#meta-menu .mask-trigger:after { 
    content: "나방"  !important; 
    left: 0;
    right: 0;
    text-align: center;
    transition-delay: 0s;
}
#meta-menu .mask-trigger:after { content: "가면"  !important; }
#mui-links #meta-obs:after { content: "개체"  !important; }
#mui-links #meta-sys:after { content: "시스템" !important; }
#mui-links #meta-hub:after { content: "탐색" !important; }

#dialogue-box.dialogue-click-proceed::after {
    content: "VVV 클릭/ENTER로 계속 VVV";
    display: block;
    width: 100%;
    text-align: center;
    animation: click-to-proceed 1s linear infinite;
} 

#dialogue-box.can-skip::before {
    content: "선형 흐름 구간 - ESC로 건너뛰기";
    display: block;
    text-align: center;
    padding: 0.5em;
    color: var(--neutral-color);
    font-size: 0.75rem;
    opacity: 0.5;
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--dark-color);
}

#dialogue-skip::before {
    content: "확인::'흐름 구간 건너뛰기'";
}

#skip-vfx::before {
    content: "진행 중::'구간 진행'";
}

body:not(.mui-active) .target::after, body:not(.mui-active) #realgrid .target::before {
    content: "마우스 오른쪽 버튼";
}

.target.always-targeted[entaltname]::after,
.target.targeted[entaltname]::after,
#realgrid .target.targeted[entaltname]::before,
.always-targeted .target[entaltname]::after,
.always-targeted .target[entaltname]::before {
    content: attr(entaltname) !important;
}

@media screen and (max-width: 799px), (max-height: 599px) {
	html:not(.mobile):after, html:not(.mobile):before {
		position: fixed;
		z-index: 1001231231231231230;
		top: 0;
		left: 0;
		height: 100%;
	}
	
	html:not(.mobile):after {
		content: "오류::\\A'현재 표시 장치는 적합하지 않습니다';\\a'최소 800x600 이상의 신경 출력이 필요합니다'";
		box-sizing: border-box;
		white-space: pre-wrap;
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;
		font-family: var(--cor-kr-font);
		font-size: 2rem;	
        line-height: 1.5em;
		letter-spacing: 2.5px;
		padding: 10px;
		color: var(--bright-color);
		text-align: center;
	}
	
	html:not(.mobile):before {
		content: "";
		position: fixed;
		background-color: var(--dark-color);
		width: 100%;
	}
}

#mindspike-scanner span.loose-thought::after {
    content: "..__불완전한_사고형상__..";
    display: block;
    font-family: var(--cor-kr-font);
    letter-spacing: 0;
    font-size: 0.63rem;
    margin-top: -0.5em;
}

body[quality="regular"] .quality::after { content: "품질: 보통" }
body[quality="low"] .quality::after { content: "품질: 낮음" }

.rulink {
    color: #b2ffff;
}
.rulink:hover {
    text-decoration-line: underline;
    color: #ffffff;
}
`,

    fancy: {
        general: 'color:rgb(229, 142, 22)',
        observed: 'color:rgb(229, 194, 22)',
        setobserver: 'color:rgb(227, 227, 0)'
    },

    processSpecificTranslation: function (selector, attribute = false) {
        if (selector == "mindpike") {
            document.querySelectorAll("#mindspike-examine").forEach(el=>{for (const childNode of el.childNodes) {childNode.textContent = "조사"}})
            document.querySelectorAll("#mindspike-act").forEach(el=>{for (const childNode of el.childNodes) {childNode.textContent = "행동"}})
        }
        else if (attribute == false) {
            selector.forEach(el=>{
                for (const childNode of el.childNodes) {
                    if (childNode.nodeType === Node.TEXT_NODE) {
                        if (childNode.textContent != processStringTranslation(childNode.textContent)) childNode.textContent = processStringTranslation(childNode.textContent)
                    }
                }
            })
        }
        else {
            selector.forEach(el=>{
                if (el.getAttribute(attribute) != null) {
                    if (el.getAttribute(attribute) != processStringTranslation(el.getAttribute(attribute))) el.setAttribute(attribute, processStringTranslation(el.getAttribute(attribute)))
                }
            })
        }
        return
    },
    processEntityNamesSafeguard: function () {
        document.querySelectorAll("#content .target").forEach(el=>{
            let ent = el.getAttribute("entity")
            if(ent) { el.setAttribute("entaltname", processStringTranslation(ent))}
        })
    },
    processStatic: function (force) {
        cor_kr.processSpecificTranslation(document.querySelectorAll('title'));
        cor_kr.processSpecificTranslation(document.querySelectorAll(".enter"), 'page');
        if (force) processTranslation(document.querySelector(`#static`), true);
        else processTranslation(document.querySelector(`#static`));
    },
    processWarning: function (force) {
        if (force) {
            processTranslation(document.querySelector(`.cryptowarn`), true);
            processTranslation(document.querySelector(`#mod-warning`), true);
            processTranslation(document.querySelector(`#gpu-warning`), true);
            processTranslation(document.querySelector(`#wide-warning`), true);
            processTranslation(document.querySelector(`#dialogue-skip`), true);
        } else {
            processTranslation(document.querySelector(`.cryptowarn`));
            processTranslation(document.querySelector(`#mod-warning`));
            processTranslation(document.querySelector(`#gpu-warning`));
            processTranslation(document.querySelector(`#wide-warning`));
            processTranslation(document.querySelector(`#dialogue-skip`));
        }
    },
    processMenu: function () {
        env.menu['system-menu'].querySelectorAll(".fundfriend").forEach(el=>{el.classList.add('tskip')})
        cor_kr.processSpecificTranslation(env.menu['system-menu'].querySelectorAll('#savetext'), 'placeholder');
        processTranslation(env.menu['system-menu'])

        processTranslation(env.menu['entity-menu'])

        processTranslation(document.querySelector("#meta-menu"));
        processTranslation(document.querySelector(`#advance-notice`));
        
        cor_kr.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
        cor_kr.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');
    },
    processReply: function () {
        cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'name');
        cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'definition');
        cor_kr.processSpecificTranslation(document.querySelectorAll('.reply'), 'endtext');
    },
    processReadout: function () {
        processTranslation(document.querySelector("#minireadout"))

        dothething = function (selector) {
            if (selector == null) return;
            messages = selector.querySelectorAll(".message")
            length = messages.length - 1

            messages.forEach(el=>{
                if (length > 0) {
                    el.classList.add('tskip')
                    el.querySelectorAll(" *").forEach(el=>{el.classList.add('tskip')})
                }
                if (length == 1) {
                if (el.lastElementChild.textContent == "NOTE::'restored partial recent log'") processTranslation(el, true)
                }
                length--})
            processTranslation(document.querySelector("#readout"))
        }

        dothething(document.querySelector("#readout"))
        dothething(env.menu['readout'])
        dothething(env.menuStorage?.elements['readout'])
    },

    // 화면 변화에 맞춰 번역을 다시 적용하는 옵저버들입니다.

    observer: {
        common: {
            func: (consolething)=>{
                processTranslation();
                processTranslation(document.querySelector(`#mindspike-scanner`));
                processTranslation(document.querySelector(`#advance-notice`));
                cor_kr.processEntityNamesSafeguard();

                if (document.querySelector("#combat")) {
                    processTranslation(document.querySelector(`#combat`), true)
                    cor_kr.processSpecificTranslation(document.querySelectorAll(".floater"), "amt")
                }

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_kr.observer.common.itself.observe(document.querySelector("#mindspike-scanner"), { childList: true, subtree: true });
                cor_kr.observer.common.itself.observe(document.querySelector("#content"), { childList: true, subtree: true });

                console.log("%ccommon observer is set up! - @cor-KR", cor_kr.fancy.setobserver)
            }
        },
        bodychildren: {
            func: (consolething)=>{
                cor_kr.processWarning();
                
                if (document.querySelectorAll('#entity-menu .ent') != null) {
                    document.querySelectorAll('#entity-menu .ent').forEach(e=>{
                        if(e.getAttribute('entname')) {
                            e.addEventListener('click', ()=>{
                                let entity = flags.detectedEntities[e.getAttribute('pagename')]['entities'][e.getAttribute('entname')]
                                let container = document.querySelector('#entcontent')
                                container.innerHTML = ""


                                let replay = getReadoutMsg({message: entity.text.replace(/\n/g, "<br>"), type: `examine ${entity.type}`, name: entity.displayName || entity.name, image: entity.image})

                                try {replay = getReadoutMsg({message: cor_kr.entity_menu[entity.name]['desc'], type: `examine ${entity.type}`, name: cor_kr.entity_menu[entity.name]['name'], image: entity.image})}
                                catch (error) {
                                    console.warn("could not localize " + entity.name + " - @cor-KR")
                                    console.error(error)
                                }

                                container.insertAdjacentHTML('beforeend', replay)
                                setTimeout(()=>container.querySelector('.message').classList.add('active'), 5)
                            })
                        }
                    })
                    processTranslation(document.querySelector("#entity-menu"))
                }

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_kr.observer.bodychildren.itself.observe(body, {subtree: false, childList: true});

                console.log("%cbodychildren observer is set up! - @cor-KR", cor_kr.fancy.setobserver)
            }
        },
        gad: {
            func: (consolething)=>{
                cor_kr.processSpecificTranslation(env.menu["system-menu"].querySelectorAll(".mindsci-status"), "definition");

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_kr.observer.gad.itself.observe(env.menu["system-menu"].querySelector(".mindsci-status"), { childList: true, subtree: true, attributes: true });

                console.log("%cgad observer is set up! - @cor-KR", cor_kr.fancy.setobserver)
            }
        },
        dialogue: {
            func: (consolething)=>{
                cor_kr.processReply();

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_kr.observer.dialogue.itself.observe(document.querySelector("#dialogue-box"), { childList: true });

                console.log("%cdialogue observer is set up! - @cor-KR", cor_kr.fancy.setobserver)
            }
        },
        masks: {
            func: (consolething)=>{
                processTranslation(document.querySelector(`.ozo-mask-grid`))
                cor_kr.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
                cor_kr.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_kr.observer.masks.itself.observe(document.querySelector(".ozo-mask-grid"), { childList: true });

                console.log("%cmasks observer is set up! - @cor-KR", cor_kr.fancy.setobserver)
            }
        },
        page: {
            func: (consolething)=>{
                new Promise((resolve) => {
                    if (consolething) cor_kr.updateResources()
                    resolve(getLocalizationForPage(true))
                })
                .then(()=>{
                    cor_kr.devved()
                            
                    processTranslation();

                    cor_kr.processStatic(true);
                    cor_kr.processMenu();
                    cor_kr.processWarning();

                    processTranslation(document.querySelector(`#definition-box`));
                    processTranslation(document.querySelector(`#mindspike-scanner`));
                    processTranslation(document.querySelector(`.ozo-mask-grid`))

                    cor_kr.processSpecificTranslation("mindpike");
                    cor_kr.processSpecificTranslation(document.querySelectorAll(".mindsci-status"), "definition");
                    cor_kr.processEntityNamesSafeguard();

                    cor_kr.observer.common.observe();
                    cor_kr.observer.bodychildren.observe();
                    cor_kr.observer.gad.observe();
                    cor_kr.observer.dialogue.observe();
                    cor_kr.observer.masks.observe();

                    if (consolething) console.log(consolething[0], consolething[1])
                })
            },
            observe: ()=>{
                cor_kr.observer.page.itself.observe(body, {attributes: true, attributeFilter: ['page']});

                console.log("%cpage observer is set up! - @cor-KR", cor_kr.fancy.setobserver)
            }
        },
    },

    embassyCoherent: function () {
        if (env.localization.page['localocean']) env.localization.page['localocean'].entityDescriptions['the embassy'] = `::공간 사고형상
::상속된 맥락::<span style='color: var(--obesk-color)'>'공연';'벨지가 기뻐하며 웃고 있음'</span>`
        cor_kr.entity_menu['the embassy']['desc'] = `::공간 사고형상<br>
::상속된 맥락::<span style='color: var(--obesk-color)'>"'공연';'${processDefinitionsInString("벨지")}가 기뻐하며 웃고 있음"')}</span>`},

    devElement: `<div class="devs ulbox tdone cor-kr">
    <ul class="tdone">
        <h4 class="tdone">비공식 한국어 번역</h4>
        <li class="tdone"><span class="tdone" definition="cor-RU 구조를 참고한 한국어 패치" class="tdone">cor-KR</span></li>
        <li class="tdone"><span class="tdone" definition="번역 진행 중" class="tdone">한국어 로컬라이제이션 작업</span></li>
    </ul>
</div>`,

    devved: function () {
        if (env.menu["system-menu"].querySelector(".devs.cor-kr") == null) env.menu["system-menu"].querySelector(".devs").insertAdjacentHTML('afterend', cor_kr.devElement)
    },

    list: {
        everything: "https://0w1dd.github.io/corru-KR/localization/everystuff.js",
        page: {
            fbx:                "https://0w1dd.github.io/corru-KR/localization/basement.js",

            hello:              "https://0w1dd.github.io/corru-KR/localization/auth-layer.js",
            hub:                "https://0w1dd.github.io/corru-KR/localization/hub.js",

            localcity:          "https://0w1dd.github.io/corru-KR/localization/their-city.js",
            citystreet:         "https://0w1dd.github.io/corru-KR/localization/city-surface.js",

            localorbit:         "https://0w1dd.github.io/corru-KR/localization/the-void.js",
            dullvessel:         "https://0w1dd.github.io/corru-KR/localization/our-dull-vessel.js",

            localocean:         "https://0w1dd.github.io/corru-KR/localization/their-waters.js",
            localship:          "https://0w1dd.github.io/corru-KR/localization/their-vessel.js",
            interview1:         "https://0w1dd.github.io/corru-KR/localization/the-funny-little-room.js",

            localdepths:        "https://0w1dd.github.io/corru-KR/localization/the-depths.js",
        },
        entityMenu: "https://0w1dd.github.io/corru-KR/localization/entity-menu.js",
        load:       "https://0w1dd.github.io/corru-KR/load.js",
    },

    updateResources: function (fresh = false) {
        let listArray = [];

        if (fresh == true) {
            listArray.push(cor_kr.list.everything);
            listArray.push(cor_kr.list.entityMenu);
            if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) listArray.push(cor_kr.list.page[page.dialoguePrefix])
                else if (page.dialoguePrefix != "notfound") console.warn("the page with dialoguePrefix " + page.dialoguePrefix + " does not have a localization! this might be a bug, but might also be intentional or plain expected if you are using other mods - @cor-KR");
            listArray.push(cor_kr.list.load);
        }
        else {
            if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {if (document.querySelectorAll(`script[src="${cor_kr.list.page[page.dialoguePrefix]}?v=${page.cacheval}"]`).length == 0) {listArray.push(cor_kr.list.page[page.dialoguePrefix])}}
                else console.warn("the page with dialoguePrefix " + page.dialoguePrefix + " does not have a localization! this might be a bug, but might also be intentional or plain expected if you are using other mods - @cor-KR")
        }
        if (listArray.length != 0) {console.log("%cupdating following resources! - @cor-KR", cor_kr.fancy.general); console.log(listArray); return addResources(listArray)}
        else console.log("%cno updates for resources needed! - @cor-KR", cor_kr.fancy.general)
    },
}

cor_kr.observer.common.itself = new MutationObserver(()=>{cor_kr.observer.common.func(["%ccommon observed! - @cor-KR", cor_kr.fancy.observed])})
cor_kr.observer.bodychildren.itself = new MutationObserver(()=>{cor_kr.observer.bodychildren.func(["%cbodychildren observed! - @cor-KR", cor_kr.fancy.observed])})
cor_kr.observer.gad.itself = new MutationObserver(()=>{cor_kr.observer.gad.func(["%cgad observed! - @cor-KR", cor_kr.fancy.observed])})
cor_kr.observer.dialogue.itself = new MutationObserver(()=>{cor_kr.observer.dialogue.func(["%cdialogue observed! - @cor-KR", cor_kr.fancy.observed])})
cor_kr.observer.masks.itself = new MutationObserver(()=>{cor_kr.observer.masks.func(["%cmasks observed! - @cor-KR", cor_kr.fancy.observed])})
cor_kr.observer.page.itself = new MutationObserver(()=>{cor_kr.observer.page.func(["%cpage observed! - @cor-KR", cor_kr.fancy.observed])})

// 번역 완료 구간을 벗어나기 전에 안내합니다.
cor_kr['advance'] = function () {
    MUI('off'); flash(true); cutscene(true); exitMenu();
    if(env.bgm) env.bgm.fade(env.bgm.volume(), 0, 1000)
    corruStatic.play()
    corruStatic.fade(0, getModifiedVolume('music', 1), 1000)
                
    setTimeout(()=>{
        sessionStorage.clear()
        location.replace('/')
    }, 1000)
}
cor_kr['advancewarnclick'] = function () {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="kr-warning" class="popup-warning">
            <div class="sysblock">
                <div class="sysbox kr">
                    <h3>!!__경고__!!</h3>
                    <p class="sysinfo">현재 cor-KR에서 안정적으로 준비된 번역 구간의 끝에 도달했습니다.</p>
                    <p class="sysinfo">다음 에피소드에서는 cor-KR이 비활성화되며, 게임 텍스트가 영어로 표시될 수 있습니다.</p>
                    <p class="sysinfo">번역은 계속 작업 중입니다. 문제가 보이면 저장소 이슈나 피드백으로 알려 주세요.</p>
                    <p class="sysinfo">사용해 주셔서 감사합니다.</p>
                    <div class="buttons">
                        <span id="gpu-done" class="button" onclick="cor_kr.advance();document.querySelector('#kr-warning').remove()">로그 진행</span>
                        <span id="gpu-hide" class="button" onclick="document.querySelector('#kr-warning').remove()">아직 진행하지 않기</span>
                    </div>
                </div>
            </div>
        </div>
    `)
}
env.entities['advance log'] = {
    hide: true,
    name: 'advance log',
    type: "system-component",
    image: "/img/textures/target.png",
    text: `::SYSTEM COMPONENT
    ::ALERT::<span style="color:var(--bright-color)">'current mindspike log procession concluded';'static environment sustained'</span>
    ::NOTE::'log state will advance on next visit';'utilize ACT:advance to immediately proceed to next state'`,
    actions: [
        {
            name: "advance",
            exec: ()=>{cor_kr.advancewarnclick()}
        }
    ]  
}

console.log("%c(kr) cor-KR loaded. Korean localization is in progress; please report translation issues through the repository. - @cor-KR", cor_kr.fancy.general)

if (!document.querySelector("#cor-krcss")) {
    document.head.appendChild(
        document.createElement(
            'style'
        ).appendChild(
            document.createTextNode(
                cor_kr.css
            )
        ).parentElement
    ).setAttribute(
            "id", "cor-krcss"
        )
}

page.formedDefinitionStrings = undefined


cor_kr.updateResources(true)







