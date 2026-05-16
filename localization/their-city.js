/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/their-city.js
    /local/city 번역
*/


env.localization.page['localcity'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "this is prettyyyy busted... but at least it's something": "꽤에에에 많이 망가졌네... 그래도 뭐라도 있긴 해",

        "glimmering spires mark their cities": cor_kr.entity_menu["glimmering spires mark their cities"].name,
        "these grand icons of their control": cor_kr.entity_menu["these grand icons of their control"].name,
        "they watch": cor_kr.entity_menu["they watch"].name,
    },
    entityDescriptions: {
        "glimmering spires mark their cities": cor_kr.entity_menu["glimmering spires mark their cities"].desc,
        "these grand icons of their control": cor_kr.entity_menu["these grand icons of their control"].desc,
        "they watch": cor_kr.entity_menu["they watch"].desc,
    }
}


// === 대사 === //

env.localization.page['localcity'].dialogues.mthresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        이 도시는 뭐야?<+>where
        아무것도 아니야<+>CHANGE::++moth
            FAKEEND::(뒤로)
`)
env.localization.page['localcity'].dialogues["mth++localcity"] = generateDialogueObject(`
start
    self
        이 도시 사고형상에 대해 물어볼 게 있어
    moth
        응-응?

    RESPOBJ::mthresp

where
    self
        이 도시는 뭐야?
    
    moth
        솔직히 말하면 특정한 도시라고는 생각 안 해
        여러 가지가 뒤섞인 것처럼 보여... 실제 도시 모습이라기보다 도시들을 상징하는 것들에 가깝지
            SHOWIF::[['hub__funfriend-kickoutq', false]]
        이 낭포가 굶주리고 있으니까, 아키제테셰의 우리 도시들에 대한 기억이 살아남으려고 한데 뭉쳤을지도 몰라
            SHOWIF::[['hub__funfriend-kickoutq']]
        굶주린 코러시스트 장치에서 그런 행동을 물리적 차원으로 관찰한 적이 있어
            SHOWIF::[['hub__funfriend-kickoutq']]
        그러니 정신적 차원으로도 이어진다고 봐도 될 거야
            SHOWIF::[['hub__funfriend-kickoutq']]

    RESPOBJ::mthresp
`)


getLocalizationForPage(true)


// 느슨한 사고 표기를 다시 렌더링합니다.

cor_kr.processSpecificTranslation(document.querySelectorAll(".loose-thought"), "text")

document.querySelectorAll('#content .loose-thought .title').forEach(e=>{e.remove()})

document.querySelectorAll('#content .loose-thought').forEach(e=>{e.insertAdjacentHTML('beforeend', `<div class="title">${e.getAttribute('text')}</div>`)})

new Lettering('#content .loose-thought .title').letters()

document.querySelectorAll("#content .loose-thought .title > span").forEach((e, i) => e.style.animationDelay = `${-1 * (i * 0.25)}s`)


