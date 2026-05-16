/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/basement.js
    / 시작 페이지 번역
*/

env.localization.page['fbx'] = {dialogues: {},
    definitions: {},
    strings: {
        "about this job": "이 일에 대해서",

        "DENDRITIC CYST": "수지상 낭포",
        "touch": "만지기",
        "lift": "들어 올리기",
        "the notes I got say that there were apparently a ton of these on the ship": "내가 받은 기록에 따르면 배에는 이런 게 엄청나게 많았다고 해",
        "all sorts of sizes too": "크기도 제각각이었고",
        "but most were too heavy to retrieve... so we just got this small one": "하지만 대부분은 너무 무거워서 회수할 수 없었어... 그래서 이 작은 것 하나만 가져온 거야",
        "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "수지상 낭포는 단단한 외피를 가지고 있다. 여기에 연결할 방법은 없을 것 같다",
        "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "수지상 낭포는 놀라울 정도로 무겁다. 손안에서 돌리면 내부에서 금속이 연달아 부딪히는 소리가 난다. 다시 내려놓으면 덩굴 같은 돌기들이 새 방향을 찾아 테이블 위에서 몸체를 지탱한다",

        "FRACTALLINE CYST": "프랙탈린 낭포",
        "nobody knows what this one is.. pretty sure it's dead though": "이게 정확히 뭔지는 아무도 몰라.. 그래도 죽은 건 확실해 보여",
        "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "프랙탈린 낭포의 외피는 미끌거리고 약간 물렁하다. 세게 쥐어짜면 아마 진흙처럼 뭉개질 것이다... 그냥 건드리지 않는 편이 좋겠다",

        "CYST": "낭포",
        "so this is the mystery piece": "그러니까 이게 그 수수께끼의 조각이네",
        "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "얼마나 오래 바다 밑에 있었는지를 생각하면 이상할 만큼 상태가 좋아",
        "no clue what it is aside from some similar internal structure to network cysts we've found before": "전에 찾은 네트워크 낭포와 내부 구조가 비슷하다는 것 말고는 뭔지 전혀 모르겠어",
        "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "낭포는 단단한 외피를 가지고 있다. 위쪽 근처의 몇몇 원형 지점은 다른 부분보다 덜 단단하다. 네 경험상 이런 곳은 보통 연결 지점이다. 이 지점을 더 자세히 스캔할 수 있을 것이다.",
        "depth scan": "정밀 스캔",
        "ANALYSIS::'valid nerve point';'connection enabled'": "분석::'유효한 신경 지점';'연결 가능'",
        "::CORRUCYSTIC ENTITY": "::코러시스트성 개체",
        "::NO FUNCTION SIGNATURE": "::기능 서명 없음",
        "::CONNECTIVE MEMBRANE EXPOSED": "::연결 막 노출",

        "CYSTIC COLUMN": "낭포 기둥",

        "CONNECTION POINT": "연결 지점",

        "attempt connection": "연결 시도",
        "CONNECTION_POINT_LOCATED": "연결_지점_감지됨",
        "__COMMENCING__": "__절차_개시__",

        "plastic box": "플라스틱 상자",
        "use to feed column": "기둥에 먹이기",
        "empty plastic box": "빈 플라스틱 상자",

        "pistol": "권총",
        "kill dendritic cyst and feed column": "수지상 낭포를 죽여 기둥에 먹이기",

        "hey buddy": "야, 친구",
        "welcome back": "다시 왔구나",
        "you ready to feed this thing?": "이거 먹일 준비 됐어?",
        "haven't heard back on the request yet": "요청에 대해서는 아직 답을 못 받았어",
        "so, still killing time here": "그래서 아직 여기서 시간이나 보내고 있어"
    },
    entityDescriptions: {
        "dendritic cyst": `::코러시스트성 개체
::기능 서명: 컨테이너
::노출된 연결 조직 없음`,
        "fractalline cyst": `::코러시스트성 개체
::손상된 기능 서명
::노출된 연결 조직 없음`,
        "cystic column": `::코러시스트성 개체
::기능 서명: 코러시스트 유지 관리
::노출된 연결 조직 없음`,
        "cyst": `::코러시스트성 개체
::기능 서명 없음
::연결 막 노출`,
        "connection point": `::코러시스트성 개체 구성 요소
::유효한 연결 지점`,
        "plastic box": `::합성 컨테이너
::비활성 금속 포함`,
        "empty plastic box": `::합성 컨테이너
::비어 있음`,
        "pistol": `::연장식 충격봉이 장착된 공압 권총
::2052 G.E.T. 모델
::불법 개조 감지됨`,
    }
}

// === 대사 === //
// depthrecovery 대사는 everystuff.js 참고

// == MOTH == //

env.localization.page["fbx"].dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        이 낭포들은 어디서 찾았어?<+>where
        이 권총은 어떻게 할 거야?<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        아무것도 아니야<+>CHANGE::++moth
            FAKEEND::(뒤로)
`)
env.localization.page['fbx'].dialogues["mth++fbx"] = generateDialogueObject(`
start
    self
        물어볼 게 있어

    moth
        응?

    RESPOBJ::mthhubresp

gun
    self
        그래서, 이 권총은 그냥 놔둘 거야?

    moth
        아, 음
        있잖아, 쓸모가 있을 수도 있잖아
        솔직히 말하면 지금 당장 돌려주고 싶지가 않았어 ㅋㅋ
        연구개발 쪽에서도 딱히 많이 필요하진 않을걸, 뭔가를 죽일 일이 자주 있는 것도 아니고
        나중에 돌려줄게

    RESPOBJ::mthhubresp

where
    self
        이것들은 어디서 건져 온 거야?

    moth
        뉴질랜드 근처 해저 난파선에서 나온 거야
        여기서 "근처"라는 건 남동쪽 해안에서 한 천 킬로미터쯤 떨어졌다는 뜻이고
        워낙 외진 곳에서 발견된 거라...
        뭐, 뉴질랜드보다 더 가까운 지명은 들어도 모를 것 같아서
        원래 추락한 지점에서 꽤 멀리 떠내려간 걸로 보고 있어
        추정상 저 아래에 20년에서 30년, 어쩌면 그보다 더 오래 있었대

    RESPOBJ::mthhubresp
`)


env.localization.page['fbx'].dialogues["index"] = generateDialogueObject(`
start
    moth
        야, 친구. 어서 와
        솔직히 이렇게 작은 건수에 네가 올까 싶긴 했어
        요즘 난파선이 워낙 많이 발견되고 있거든
        어쨌든 지금 장비를 켤 테니까, 그동안 둘러봐도 돼

    sourceless
        해독 장치들이 켜지며 얽힌 전선 위로 빛을 던진다.
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))

    RESPONSES::self
        이게 뭐야?<+>whatis
        앉기<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)

whatis
    self
        이게 뭐야?
    moth
        뉴질랜드 근처 오베스크 난파선에서 나온 물건이야
        기록에 따르면 거의 전부 녹아내렸다고 하던데, 그게 좀 이상하지...
        어쨌든... 그중 핵심은 저 큰 거야
        받침대는 보통 "중요함"을 뜻하는데, 저건 표식이 없어
        알렉스가 기본 스캔을 했고, 네트워크 노드 같다고 했어
        이게 마인드스파이크를 받아들일지도 아직 확실하지 않아
        뭐, 어쨌든 돈은 받을 테니까... 한번 해봐

    RESPONSES::self
        앉기<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)
        마인드스파이크 작동<+>END
            SHOWIF::"PAGE!!intrositting"

sit
    sourceless
        금속 의자가 콘크리트를 긁는다. 너는 자리에 앉는다.
            EXEC::env.introSit()
            WAIT::3500

    sourceless
        좌석은 차갑고 불편하다. 보호 장비의 빛이 진주빛 낭포들 사이로 흩어진다.

    moth
        늘 하던 방식이지 - 마인드스파이크 준비 완료

    RESPONSES::self
        이게 뭐야?<+>whatis
            SHOWONCE::
        마인드스파이크 작동<+>END

END::env.enableSpikeCursor();MUI('deprohibit')
`)



getLocalizationForPage(true)

