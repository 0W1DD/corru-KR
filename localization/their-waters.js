/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/their-waters.js
    /local/ocean 번역
*/

env.localization.page['localocean'] = {dialogues: {},
    definitions: {},
    strings: {
        "you can really tell this was a long time ago, jesus. look at how small their island is": "정말 오래전이라는 게 확 느껴지네. 세상에, 저 섬이 얼마나 작은지 봐",

        "stilted shore": cor_kr.entity_menu["stilted shore"].name,
        "the embassy": cor_kr.entity_menu["the embassy"].name,

        "dive": "잠수",
        "rise": "상승",
    },
    entityDescriptions: {
        'our dull vessel': cor_kr.entity_menu["our dull vessel"].desc,
        'their vessel': cor_kr.entity_menu["their vessel"].desc,
        "the embassy": cor_kr.entity_menu["the embassy"].desc,
        'gate::the depths': cor_kr.entity_menu["gate::the depths"].desc,
        'stilted shore': cor_kr.entity_menu["stilted shore"].desc
    }
}

getLocalizationForPage(true)

