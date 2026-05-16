/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    > localization/basement.js
    / 시작 페이지 번역
*/

env.localization.page['fbx'] = {
    dialogues: {},
    definitions: {},
    strings: {
        "about this job": "이 의뢰에 대해서",

        "DENDRITIC CYST": "수지상 낭포",
        "touch": "터치",
        "lift": "들어 올리기",
        "the notes I got say that there were apparently a ton of these on the ship": "내가 받은 인계서에 따르면, 그 함선에 이런 게 아주 널려 있었다고 하더라고",
        "all sorts of sizes too": "크기도 제각각이었고 말이야",
        "but most were too heavy to retrieve... so we just got this small one": "하지만 대부분은 너무 무거워서 인양할 수가 없었대... 그래서 이 작은 것 하나만 간신히 건져온 거야",
        "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "수지상 낭포는 단단한 외피로 둘러싸여 있다. 여기에 연결할 수 있는 방법은 없을 것 같다.",
        "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "수지상 낭포는 보기보다 놀라울 정도로 무겁다. 손으로 돌려가며 살펴보자 내부에서 금속성 부품들이 자갈거리며 부딪히는 소리가 연달아 들려온다. 테이블 위에 다시 내려놓자, 표면의 덩굴 같은 돌기들이 새로운 각도로 자리를 잡으며 스스로 몸체를 지탱한다.",

        "FRACTALLINE CYST": "프랙탈린 낭포",
        "nobody knows what this one is.. pretty sure it's dead though": "이게 정확히 뭔지는 아무도 몰라... 그래도 죽어 있는 상태인 건 확실해 보여",
        "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "프랙탈린 낭포의 외피는 미끈거리고 미약하게 반동이 느껴진다. 힘주어 꽉 쥐었다간 그대로 뭉개져 진흙처럼 변해버릴 것 같다... 그냥 건드리지 않는 편이 좋겠다.",

        "CYST": "낭포",
        "so this is the mystery piece": "그러니까 이게 그 수수께끼의 조각이네",
        "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "그... 알잖아? ‘그 일’이 터진 이후로 줄곧 심해에 가라앉아 있었던 것치고는 이상할 정도로 보존 상태가 좋아",
        "no clue what it is aside from some similar internal structure to network cysts we've found before": "전에 발견했던 네트워크 낭포들과 내부 구조가 유사하다는 점 말고는, 정체가 뭔지 전혀 감이 안 잡혀",
        "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "낭포의 외피는 견고하다. 상단 부근에 위치한 몇몇 원형 지점은 다른 부위에 비해 유연한 편이다. 네 경험상 이러한 부위는 대개 인터페이스 연결점이었다. 이 지점을 더 정밀하게 스캔할 수 있을 것이다.",
        "depth scan": "심도 스캔",
        "ANALYSIS::'valid nerve point';'connection enabled'": "분석::'유효한 신경 지점 감지';'연결 활성화'",
        "::CORRUCYSTIC ENTITY": "::코러시스트성 개체",
        "::NO FUNCTION SIGNATURE": "::기능 서명 없음",
        "::CONNECTIVE MEMBRANE EXPOSED": "::연결성 막 노출됨",

        "CYSTIC COLUMN": "낭포 기둥",

        "CONNECTION POINT": "연결 지점",

        "attempt connection": "연결 시도",
        "CONNECTION_POINT_LOCATED": "연결_지점_포착됨",
        "__COMMENCING__": "__프로세스_개시__",

        "plastic box": "플라스틱 상자",
        "use to feed column": "기둥에 주입하기",
        "empty plastic box": "빈 플라스틱 상자",

        "pistol": "권총",
        "kill dendritic cyst and feed column": "수지상 낭포를 파괴하여 기둥에 주입하기",

        "hey buddy": "어이, 친구",
        "welcome back": "다시 왔구나",
        "you ready to feed this thing?": "이 녀석한테 연료 먹일 준비는 됐어?",
        "haven't heard back on the request yet": "요청한 건에 대해서는 아직 피드백을 못 받았어",
        "so, still killing time here": "그래서 그냥 여기서 계속 시간이나 때우는 중이야"
    },
    entityDescriptions: {
        "dendritic cyst": `::코러시스트성 개체
::기능 서명: 컨테이너
::노출된 연결 조직 없음`,
        "fractalline cyst": `::코러시스트성 개체
::기능 서명 손상됨
::노출된 연결 조직 없음`,
        "cystic column": `::코러시스트성 개체
::기능 서명: 코러시스트 유지 관리
::노출된 연결 조직 없음`,
        "cyst": `::코러시스트성 개체
::기능 서명 없음
::연결성 막 노출됨`,
        "connection point": `::코러시스트성 개체 컴포넌트
::유효한 연결 지점`,
        "plastic box": `::합성 컨테이너
::비활성 금속 포함`,
        "empty plastic box": `::합성 컨테이너
::비어 있음`,
        "pistol": `::연장식 충격봉이 장착된 공압 권총
::2052 G.E.T. 모델
::불법 개조 흔적 감지됨`,
    }
}

// === 대사 === //

// == MOTH == //

env.localization.page["fbx"].dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        이 낭포들은 어디서 찾아낸 거야?<+>where
        이 권총은 어떻게 할 생각이야?<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        아무것도 아니야<+>CHANGE::++moth
            FAKEEND::(물러나기)
`)

env.localization.page['fbx'].dialogues["mth++fbx"] = generateDialogueObject(`
start
    self
        물어볼 게 좀 있어.

    moth
        어, 뭔데?

    RESPOBJ::mthhubresp

gun
    self
        그나저나, 이 권총은 그냥 여기 둘 거야?

    moth
        아, 그거? 음...
        있지, 언젠가 쓸모가 있을지도 모르잖아.
        솔직히 말하면 지금 당장 반납하기가 좀 아까웠어 ㅋㅋ
        어차피 R&D(연구개발) 부서 애들도 딱히 쓸 일 없을걸? 걔네가 현장에서 뭘 죽여야 할 일이 자주 있는 것도 아니고.
        대충 가지고 있다가 나중에 돌려주지 뭐.

    RESPOBJ::mthhubresp

where
    self
        이 물건들은 원래 어디서 건져 올린 거야?

    moth
        뉴질랜드 근처 해저에 가라앉아 있던 난파선에서 나온 거야.
        아, 여기서 '근처'라는 건 남동쪽 해안에서 한 1,000킬로미터는 떨어져 있다는 뜻이지만...
        워낙 오지에서 발견된 거라 말이지.
        뭐, 뉴질랜드보다 더 가까운 지명을 대봤자 어차피 들어도 모를 테니까.
        원래 침몰했던 지점에서 꽤 멀리 떠내려온 걸로 추정하고 있어.
        대략 저 밑바닥에 20년에서 30년... 어쩌면 그보다 훨씬 오래 박혀 있었을 거래.

    RESPOBJ::mthhubresp
`)


env.localization.page['fbx'].dialogues["index"] = generateDialogueObject(`
start
    moth
        어이, 친구. 어서 와.
        솔직히 이렇게 자잘한 건수에도 네가 직접 와줄 줄은 몰랐어.
        요즘 해저 난파선이 워낙 무더기로 발견되는 추세라 다들 바쁘잖아.
        어쨌든 장비 시동 걸 테니까, 그동안 주변 좀 둘러보고 있어봐.

    sourceless
        해독 장치들이 일제히 켜지며, 거미줄처럼 뒤엉킨 전선 위로 서늘한 빛을 뿌린다.
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))

    RESPONSES::self
        이게 다 뭐야?<+>whatis
        의자에 앉는다<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)

whatis
    self
        이게 다 뭐야?
    moth
        뉴질랜드 근처에서 인양된 '오베스크' 난파선 잔해들이야.
        근데 내가 받은 기록에는 본체가 거의 다 녹아내렸다고 적혀 있었거든? 그게 참 묘하단 말이지...
        어쨌든... 여기서 핵심은 저기 있는 커다란 녀석이야.
        원래 이런 받침대 위에 올려져 있다는 건 '중요한 물건'이라는 뜻인데, 저건 아무런 표식도 없더라고.
        알렉스가 기초 스캔을 돌려봤는데, 대충 네트워크 노드처럼 생겨 먹었대.
        이게 마인드스파이크를 정상적으로 받아들일지 어떨지조차 아직은 미지수야.
        뭐, 결과가 어떻든 페이는 정산되니까... 밑져야 본전이지, 한번 찔러봐.

    RESPONSES::self
        의자에 앉는다<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)
        마인드스파이크 링크 활성화<+>END
            SHOWIF::"PAGE!!intrositting"

sit
    sourceless
        철제 의자가 콘크리트 바닥을 날카롭게 긁는다. 당신은 자리에 앉는다.
            EXEC::env.introSit()
            WAIT::3500

    sourceless
        시트는 차갑고 엉성하여 불편하기 짝이 없다. 보호 장구에서 흘러나온 인공적인 빛이 진주 빛깔의 낭포들 사이로 무질서하게 반사된다.

    moth
        늘 하던 대로 하자고. 마인드스파이크 로드 완료.

    RESPONSES::self
        이게 다 뭐야?<+>whatis
            SHOWONCE::
        마인드스파이크 링크 활성화<+>END

END::env.enableSpikeCursor();MUI('deprohibit')
`)