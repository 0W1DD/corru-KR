/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/the-depths.js
    /local/depths 번역
*/

env.localization.page['localdepths'] = {dialogues: {},
    definitions: {},
    strings: {
        "don't worry, i'm seeing this. keep going": "걱정하지 마, 나도 보고 있어. 계속해",
        "i think our friend altered this one while you were out, i'm seeing less data... gotta keep its leverage somehow i guess": "네가 빠져 있는 동안 우리 친구가 이걸 바꾼 것 같아. 데이터가 줄어 보이네... 어떻게든 우위를 유지하려는 거겠지",

        "UNKNOWN": "알 수 없음",

        'NOT NOW': '지금은 안 돼',
        'FORGIVE ME FOR THIS': '이 일을 용서해 줘',
        'GOODBYE': '안녕',
        'INTERLOPER': '침입자',

        "WARNING::'data overload';'safeguards active'": "경고::'데이터 과부하';'안전장치 활성화'",
        "CRITICAL_ERROR::'severe data overload';'ejecting'": "치명적_오류::'심각한 데이터 과부하';'이탈 중'"
    },

    entityDescriptions: {
        "unknown": `::처리 불가능한 사고형상
::<span definition="주석::'비표준 형식';'공간 사고형상으로 추정'">비정상 서명</span>`
    }
}

env.localization.page["localdepths"].dialogues["velzie"] = generateDialogueObject(`
start
    sys
        실행 중::'시각화'

    unknown
        침입자
            EXEC::env.depths.velzie();
            WAIT::4500
        너희의 호기심이 너희를 망칠 것이다
        너희는 준비되지 않았다

    RESPONSES::self
        뭐?<+>what

what
    self
        무슨 뜻이야?

    unknown
        나는 안다. 너희가 원하는 것을
        내가 너희를 돕겠다
        이 낭포의 건강을 회복시켜라
        연결을 켜라
        너희는 원하는 모든 것을 얻게 될 것이다

    RESPONSES::self
        너는 누구야?<+>abrupt

abrupt
    self
        너는 누구야?
            EXEC::env.depths.velzieBye();endDialogue()
`)

getLocalizationForPage(true)

