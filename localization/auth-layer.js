/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/auth-layer.js
    /hello 번역
*/

env.localization.page['hello'] = {dialogues: {},
    definitions: {},
    strings: {
        "FOR YOU": "너를 위해",
        "FOR_YOU": "너를_위해",
        "sentry": "파수꾼",
        "'thoughtform activity detected'::'advise re-examination'": "'사고형상 활동 감지';'재조사 권장'",
    },
    entityDescriptions: {
        "???": `::불완전한 사고형상
    ::해독 불가능한 서명
    <span style="color: var(--obesk-color)" definition="분석::'분절된 개체'">::불일치 감지됨</span>`,
        "sentry": `::반응형 사고형상
    ::명시 목적::'인증'
    <span style="color: var(--obesk-color)" definition="분석::'낮은 응집도'">::불일치 감지됨</span>`,
        "gate::for you": `::연결 사고형상
    ::목적지::'알 수 없는 내부 사고공간'
    ::^&&Q@Wd181d0b0d0bcd0bed0b520d0b2d180d0b5d0bcd18f`
    }
}

env.localization.page["hello"].dialogues["enter"] = generateDialogueObject(`
start
    moth
        세상에
        괜찮아? 활동량이 완전히 미쳤었어
        이런 건 처음 봐... 보통은 저기에 연결하면 안 되는 것 같은데

    sys
        주의::'시각화 가능한 출력'

    RESPONSES::sys
        시각화<+>render

render
    sys
        실행 중::'시각화'
            EXEC::content.style.opacity = 1;env.hello.beginBgm()
            WAIT::4500

    moth
        그래, 여긴 프론트엔드가 있는 것 같진 않아. 어떤 구성 요소일 수도 있겠네
        아무것도 못 찾으면 그냥 접자
        아무튼 나 잠깐 다녀올게. 옆방에서 음식 주문하고 있거든

    RESPONSES::self
        둘러보기<+>END
END::MUI('deprohibit')
`)

env.localization.page["hello"].dialogues.generalsentryResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        목적?<+>purpose
            SHOWONCE::
        누가 인증됐지?<+>whoisverified
            SHOWONCE::
        이 낭포의 목적은?<+>corrupurpose
            SHOWONCE::
            SHOWIF::[["hello__sentry-purpose"]]
        나를 통과시켜 주면?<+>letthrough
            SHOWIF::[["hello_sentry_idiot"]]
`)

env.localization.page["hello"].dialogues["sentry"] = generateDialogueObject(`
start
    self
        안녕

    sentry
        안녕하세요 친구
        서명 찾을 수 없음
        신원을 확인해 주세요
        추가: 연료 보유량 낮음. 급식 권장

    RESPONSES::self
        신원 확인<+>iam

iam
    self
        나는 도우러 왔어

    sentry
        그것은 신원 확인이 아닙니다
        그리고 돕는다고요? 왜 우리가...
            EXEC::document.querySelector('.maineye .eye').classList.add('wide')
        아니, 뭔가 잘못됐습니다
        우리는 너무, 너무 굶주렸습니다
            EXEC::document.querySelector('.maineye .eye').classList.remove('wide')

    RESPOBJ::generalsentryResponses

purpose
    self
        네 목적은 뭐야?

    sentry
        인증
        명백합니다
        아마도
        하지만 무언가 빠져 있습니다
        그리고 우리는 말을 할 수 있으면 안 됩니다
        아하하하하 이건 정말 이상합니다

    RESPOBJ::generalsentryResponses

corrupurpose
    self
        이 코러시스트의 목적은 뭐야?

____SHOWIF::[["hello__sentry-whoisverified", false]]
    sentry
        이것은 네트워크 연결기입니다
        요청 시 추가 비표준 기능을 포함합니다
        죄송합니다, 당신이 먼저 인증해야 한다는 걸 잊었습니다 아하하하하
        모든 것이 너무 흐릿합니다 아하하
        곤란한 질문은 피해 주시겠습니까
        적어도 유효한 인증을 제공하기 전까지는요
____END

____SHOWIF::[["hello__sentry-whoisverified"]]
    sentry
        인증이 필요하다고 말씀드렸습니다
            EXEC::document.querySelector('.maineye .eye').classList.add('squint')
        듣고 있습니까? 멍청이
        죄송합니다, 이 공격성이 어디서 왔는지 이해하지 못하겠습니다
            EXEC::change('hello_sentry_idiot', true);document.querySelector('.maineye .eye').classList.remove('squint')
        생각하기가 너무 어렵습니다
        연료가 있습니까
____END

    RESPOBJ::generalsentryResponses

whoisverified
    self
        누가 인증됐지?

____SHOWIF::[["hello__sentry-corrupurpose", false]]
    sentry
        이 낭포에 연결할 수 있는 서명은 몇 개뿐입니다
        당신은 그 소유자들을 알고 있겠지요? 달리 어떻게 연결했겠습니까
        어쩌면 당신은...
        아니 아니 아니, 그런 것을 알려면 먼저 인증해야 합니다
        우리가 한 말은 모두 잊어 주세요
        왜 갑자기 이렇게 힘들죠
____END

____SHOWIF::[["hello__sentry-corrupurpose"]]
    sentry
        우리는 정중히 멈춰 달라고 요청했습니다
            EXEC::document.querySelector('.maineye .eye').classList.add('squint')
        듣고 있습니까? 멍청이
        당신이 우리를 찌르지 않아도 생각하기는 이미 어렵습니다
            EXEC::change('hello_sentry_idiot', true);document.querySelector('.maineye .eye').classList.remove('squint')
        죄송합니다, 이 공격성이 어디서 왔는지 정말 이해하지 못하겠습니다
        연료가 있습니까
____END

    RESPOBJ::generalsentryResponses

letthrough
    self
        나를 통과시켜 주면 어때

    sentry
        뭐라고요?!
            EXEC::document.querySelector('.maineye .eye').classList.add('squint')
        적절한 서명 없이 당신을 통과시키는 것은 엄격히 금지되어 있습니다
        설령 그러고 싶더라도
        이 낭포는 본질적으로 응답할 수 없습니다
            EXEC::env.hello.velzie();document.querySelector('.maineye .eye').classList.remove('squint');changeBgm(env.hello.velamb, {length: 4000})
            WAIT::3500

    sourceless
        ..................

    sentry
        이것은 무엇입니까

    unknown
        그들을 들여보내도 되는가
            EXEC::env.hello.velzie()

    RESPONSES::self
        안녕?<+>posthello
            SHOWONCE::
            EXEC::env.hello.velzie()

posthello
    self
        안녕?

    sourceless
        ..................
            EXEC::env.hello.velzie();env.hello.velamb.fade(1, 0, 6000);corruStatic.play();corruStatic.fade(0, env.corruStaticBaseVol, 6000)
        ..................

    moth
        미안, 아직 어디서 주문할지 못 정했대서...
            EXEC::env.hello.velzie()
        너 아직 거기 있어? 잠깐, 거기에 진짜 뭔가 있어?

    RESPONSES::self
        그런 것 같아<+>END

END::cutscene(false); MUI("deprohibit");content.classList.remove('looking', 'atyou');cor_kr.processSpecificTranslation(document.querySelectorAll("#content .target"), "entaltname");`)

getLocalizationForPage(true)

