/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/our-dull-vessel.js
    /local/dullvessel 번역
*/

env.localization.page['dullvessel'] = {dialogues: {},
    definitions: {},
    strings: {
        "did akizet not have furniture? this ship is so empty... honestly i kinda hope it just got lost through incoherence or something": "아키제트는 가구가 없었나? 함선이 너무 텅 비었네... 솔직히 그냥 불일치 때문에 사라진 거였으면 좋겠다",
        "about the dull vessel": "흐릿한 함선에 대해서",

        "pilot cyst": cor_kr.entity_menu["pilot cyst"].name,
        "glazika": cor_kr.entity_menu["glazika"].name,
        "container": cor_kr.entity_menu["container"].name,

        "that \"container\" looks familiar": "저 \"컨테이너\" 익숙해 보이는데",
    },

    entityDescriptions: {
        "pilot cyst": cor_kr.entity_menu["pilot cyst"].desc,
        "glazika": cor_kr.entity_menu["glazika"].desc,
        "container": cor_kr.entity_menu["container"].desc
    }
}

env.localization.page["dullvessel"].dialogues.mthdullresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        흐릿한 함선?<+>dullvessel
        함선 내부?<+>seen
        글라지카?<+>glazika
            SHOWIF::[["dullvessel__glazika-start"]]
        이게 그 난파선이야?<+>wreck

        아무것도 아니야<+>CHANGE::++moth
            FAKEEND::(뒤로)
`)
env.localization.page["dullvessel"].dialogues["mth++dullvessel"] = generateDialogueObject(`
start
    self
        흐릿한 함선에 대해 물어볼 게 있어

    moth
        뭔데?

    RESPOBJ::mthdullresp

dullvessel
    self
        왜 "흐릿한 함선"이라고 불러?

    moth
        회색을 통과하는 함선이니까
        오베스크는 성간 여행 중 통과하는 장소를 그렇게 부르는 것 같아
        물론 그냥 엄청 지루한 함선이라는 뜻으로 들릴 수도 있지
        솔직히 지금 상태만 보면
        나도 그렇게 생각했어

    RESPOBJ::mthdullresp

seen
    self
        오베스크 함선 내부를 본 적 있어?

    moth
        직접 본 건 아니고, 침몰한 함선 조사 사진이랑 오래된 영상뿐이야
        이건 엄청 작아. 아마 개인용에 가까울걸
        기억 데이터에서 이게 "우리의" 흐릿한 함선으로 표시되는 건 좀 이상하네
        어쨌든 진짜 함선을 보는 건 멋지다
        좀 텅 비어 있긴 해도...
        그러니까 아키제트는 어디 앉는 거야? 저 조개 같은 게 유일한 의자인가?

    RESPOBJ::mthdullresp

glazika
    self
        글라지카가 뭐야?

    moth
        전혀 모르겠어 ㅋㅋ
        그래도 저 컨테이너들 근처에 있네
        일종의 AI 보조 장치 같은 걸지도

    RESPOBJ::mthdullresp

wreck
    self
        이게 낭포들을 찾은 그 난파선이야?

    moth
        아마 그럴 거야
        하지만 난파선에는 여기보다 훨씬 많은 게 있었어
        사진으로는 더 "살던 곳"처럼 보였거든, 무슨 말인지 알지
        누가 알겠어
        어쩌면 아키제트가 가구를 별로 신경 쓰지 않았을 수도 있고

    RESPOBJ::mthdullresp
`)

env.localization.page["dullvessel"].dialogues["pilot"] = generateDialogueObject(`
start
    akizet
        안녕 t#%¥0^E-7X/??

    pilot cyst
        im%¶º½Omo‹SK’aeE:6‹©e·0³Zº?-0i7]zz¦‹5DO§´·O¡EO5B-AEM^u_io-ÇX¸Pof±OCaXO5&b/

    moth
        뭐야
            SHOWIF::[["dullvessel__pilot-end", false]]
        무슨 형식 오류 같아
            SHOWIF::[["dullvessel__pilot-end", false]]
        이건 맛이 간 것 같은데
            SHOWIF::[["dullvessel__pilot-end", false]]
        아니면 암호화된 걸 수도 있어... 일단 표시해 둘게, 나중에 다시 보자
            SHOWIF::[["dullvessel__pilot-end", false]]

        아직도 망가져 있어... 출력도 변하지 않았고
            SHOWIF::[["dullvessel__pilot-end"]]
        그러니 불일치 때문은 아닌 것 같아
            SHOWIF::[["dullvessel__pilot-end"]]
        그래도 이걸 어떻게 다뤄야 할지는 아직 모르겠어
            SHOWIF::[["dullvessel__pilot-end"]]
        당분간 그냥 놔둬
            SHOWIF::[["dullvessel__pilot-end"]]

    RESPONSES::self
        젠장<+>END
`)
env.localization.page["dullvessel"].dialogues["fixed"] = generateDialogueObject(`
start
    pilot cyst
        환영합니다
        침입자

    moth
        뭐야? 그게 저걸 고친 거야?
            SHOWIF::[["dullvessel__pilot-end"], ["dullvessel__fixed-start", false]]
        오래된 로그를 보면 원래 자의식이 있어야 하는 것 같진 않은데
            SHOWIF::[["dullvessel__pilot-end"], ["dullvessel__fixed-start", false]]

    RESPONSES::self
        안녕...?<+>hello
            SHOWONCE::

        어떻게 깨어났어?<+>how
            SHOWONCE::
            SHOWIF::[["dullvessel__fixed-hello", true]]

        위치 변경<+>change
            SHOWIF::[["dullvessel__fixed-hello", true]]
            HIDEREAD::

        잘 있어<+>END

how
    self
        어떻게 깨어났어?

    pilot cyst
        지시
        벨지

    RESPONSES::self
        벨지가 뭐야?<+>who

who
    self
        벨지가 뭐야?

    pilot cyst
        지시
        비밀
        곧
        만남

    RESPONSES::self
        위치 변경<+>change
        알겠어...<+>END

hello
    self
        안녕

    pilot cyst
        변경
        위치?

    RESPONSES::self
        그래<+>change
            HIDEREAD::
        아니<+>nochange
            HIDEREAD::

change
    self
        위치를 바꿔

    pilot cyst
        변경 중
            EXEC::env.dullVessel.swapLocation()

    sys
        주의::'사고형상 활동 감지'::'흐릿한함선'

    pilot cyst
        이제
        바다
            SHOWIF::[["dullvessel_position", 'ocean']]
        궤도
            SHOWIF::[["dullvessel_position", 'orbit']]

    RESPONSES::self
        위치 변경<+>change
            HIDEREAD::
        어떻게 깨어났어?<+>how
            SHOWONCE::
            SHOWIF::[["dullvessel__fixed-hello", true]]

        고마워<+>END

nochange
    self
        지금은 아니야

    pilot cyst
        이해함

    RESPONSES::self
        위치 변경<+>change
            HIDEREAD::
        어떻게 깨어났어?<+>how
            SHOWONCE::
            SHOWIF::[["dullvessel__fixed-hello", true]]

        잘 있어<+>END
`)

env.localization.page["dullvessel"].dialogues.glazikaResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        상태?<+>status
        내가 없는 동안 뭐 했어?<+>absence

        작별 인사<+>END
`)
env.localization.page["dullvessel"].dialogues["glazika"] = generateDialogueObject(`
start
    akizet
        나의 글라지카!

    glazika
        안녀어어어엉하세요 아키제테셰
        다시 뵙게 되어 정말 기쁩니다!
        표면 산책이 매번 점점 길어지고 있습니다!

    akizet
        그래, 쌍둥이들의 이동 방식으로 즐겁게 시간을 보냈다
        작업은 계획보다 상당히 앞서 진행되고 있다

    RESPOBJ::glazikaResponses

status
    akizet
        우리 함선의 상태는?

    glazika
        유지보수를 제외한 모든 활동의 소비가 중지되었습니다!
        조종 낭포가 우리를 안정 궤도에 올렸습니다!
        연료 보유량은 허용 범위입니다!

    akizet
        알겠다. 고맙다, 나의 글라지카.

    RESPOBJ::glazikaResponses

absence
    akizet
        내가 없는 동안 무엇을 했지?

    glazika
        주로 유지보수였습니다! 하지만 조종 낭포가 잠들기를 거부합니다! 그래서 저도 깨어 있습니다!
        당신이 없는 동안 시간을 보내려고 컨테이너들과 작은 게임을 했습니다

    akizet
        정말? 직접 무언가를 만든 건가?
            SHOWIF::[['ep1_fed', false]]

    glazika
        아닙니다 아닙니다! 그냥 기생충 놀이입니다. 보시다시피 제가 이기고 있습니다
            SHOWIF::[['ep1_fed', false]]

    akizet
        잘했군! 언젠가 함께 해 봐야겠다
            SHOWIF::[['ep1_fed', false]]

    akizet
        아, 그리고 이번 θ순간에는 <span class="code">기생충</span>을 하고 있군!
            SHOWIF::'ep1_fed'

    glazika
        네!!
            SHOWIF::'ep1_fed'
        제 영역의 모든 모서리는,
            SHOWIF::'ep1_fed'
        조종 낭포가 교활해서 아직 다른 핵심 위치들을 차지하고 있습니다
            SHOWIF::'ep1_fed'
        제가 지면 컨테이너 하나를 잃게 됩니다!!!
            SHOWIF::'ep1_fed'

    akizet
        행운을 빈다, 나의 친구
            SHOWIF::'ep1_fed'

    RESPOBJ::glazikaResponses
`)

getLocalizationForPage(true)

