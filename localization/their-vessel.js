/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/their-vessel.js
    /local/ocean/ship 번역
*/

env.localization.page['localship'] = {dialogues: {},
    definitions: {},
    strings: {
        "this is really that first contact ship, damn. did you know they turned it into a museum?": "이게 정말 그 첫 접촉 함선이네. 세상에. 이걸 박물관으로 만들었다는 거 알고 있었어?",
        "so the \"low cohesion\" here probably refers to that... other place, being connected": "그러니까 여기서 말하는 \"낮은 응집도\"는 아마 그... 다른 장소가 연결되어 있다는 뜻일 거야",
        "that's weird, does this area seem bigger now?": "이상하네. 이 구역이 전보다 더 커진 것 같지 않아?",
        "figures we finally get a compatible corrucyst with some real data, and it has something destroying it": "진짜 데이터가 든 호환 코러시스트를 겨우 얻었더니, 안에서 뭔가가 그걸 부수고 있다니 딱 그럴 줄 알았다"
    },
    entityDescriptions: {
        "the funny little room": cor_kr.entity_menu["the funny little room"].desc,
        "clemens romanus": cor_kr.entity_menu["clemens romanus"]?.desc || "::경험 사고형상"
    }
}

getLocalizationForPage(true)

