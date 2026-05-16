/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/the-void.js
    /local/orbit 번역
*/

env.localization.page['localorbit'] = {dialogues: {},
    definitions: {},
    strings: {
        "this thoughtspace is pretty damn big... i'm not seeing much of a reason for it either": "이 사고공간은 정말 엄청나게 크네... 왜 이렇게 큰지도 딱히 모르겠고",
        "don't forget you moved akizet's ship to the ocean thoughtspace! kinda wild it can just move like that": "아키제트의 함선을 바다 사고공간으로 옮겼다는 거 잊지 마! 저렇게 그냥 움직일 수 있다는 게 꽤 말도 안 되네",
        "about the void": "공허에 대해서",
    },
    entityDescriptions: {
        'gate::the dull contrivance': cor_kr.entity_menu["gate::the dull contrivance"].desc,
        'our dull vessel': cor_kr.entity_menu["our dull vessel"].desc,
    }
}

env.localization.page['localorbit'].dialogues.mthvoidresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        흐릿한 장치?<+>dull
            SHOWIF::[['EXEC::env.localization.page.localorbit.dialogues.mthvoidresp.scannedDull()']]

        아무것도 아니야<+>CHANGE::++moth
            FAKEEND::(뒤로)
`)
env.localization.page.localorbit.dialogues.mthvoidresp.scannedDull = ()=>{
    try {
        if(flags.detectedEntities["..__THE_VOID__.."].entities["gate::the dull contrivance"].scanned) {
            return true
        } else {
            return false
        }
    } catch(e) {
        return false
    }
}
env.localization.page['localorbit'].dialogues["mth++localorbit"] = generateDialogueObject(`
start
    self
        이 사고형상에 대해 물어볼 게 있어

    moth
        좋아, 말해 봐

    RESPOBJ::mthvoidresp

dull
    self
        흐릿한 장치에 대해 아는 게 있어?

    moth
        아직 거기 있다는 것 말고는 그렇게 많지 않아
        그리고 유기 생명은 그걸 통과해 살아남지 못해서 쿠우만 사용할 수 있다는 정도
        적어도 오래된 인터뷰 몇 개에서는 그렇게 말했어
        내 생각엔 그냥 자기 고향 세계에 손님이 오는 걸 원치 않는 것 같지만
        ....
        미안, 로그 좀 보고 있었어
        네 마인드스파이크는 이게 연결 사고형상이라고 말하는 것 같네?
        이걸 이용하면 오베스키아를 제대로 들여다볼 수 있을지도 몰라
        고칠 수만 있다면 말이지

    RESPOBJ::mthvoidresp
`)

getLocalizationForPage(true)

