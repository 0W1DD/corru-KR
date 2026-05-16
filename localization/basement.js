/*
    cor-KR - a korean localization mod for corru.observer;
    (based on cor-RU template)
    
    > localization/basement.js
    localization for /
    (---yes just /
    ---thats the starting page)
*/

env.localization.page['fbx'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "about this job": "이 일에 대하여",

        "DENDRITIC CYST": "수상돌기 낭포",
        "touch": "만지다",
        "lift": "들어 올리다",
        "the notes I got say that there were apparently a ton of these on the ship": "기록에 따르면 함선에 이런 게 엄청 많았다고 해",
        "all sorts of sizes too": "게다가 크기도 아주 다양했고",
        "but most were too heavy to retrieve... so we just got this small one": "하지만 대부분 너무 무거워서 회수할 수가 없었어... 그래서 이 작은 것만 하나 챙겨온 거야",
        "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "수상돌기 낭포는 단단한 외부 껍질을 가지고 있다. 여기에 연결할 수 있는 방법은 없을 것 같다.",
        "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "수상돌기 낭포는 놀라울 정도로 무겁다. 손에서 이리저리 돌려보니 안에서 금속이 부딪히는 소리가 연달아 들린다. 다시 내려놓자, 낭포의 촉수들이 스스로 책상 위에서 지탱할 새로운 자세를 찾는다.",

        "FRACTALLINE CYST": "분지 낭포", 
        "nobody knows what this one is.. pretty sure it's dead though": "이게 정확히 뭔지는 아무도 몰라.. 하지만 죽은 게 확실해",
        "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "분지 낭포의 껍질은 끈적거리고 탄력이 있다. 세게 쥐어짜면 아마 진흙처럼 뭉개져 버릴 것이다... 그냥 이대로 가만히 두는 게 좋겠다.",

        "CYST": "낭포", 
        "so this is the mystery piece": "이게 바로 그 미스터리한 녀석이야",
        "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "이게 바다 밑바닥에 얼마나 오래 처박혀 있었는지 생각하면, 놀라울 정도로 상태가 좋아, 너도 알다시피",
        "no clue what it is aside from some similar internal structure to network cysts we've found before": "이게 무슨 역할을 하는지는 전혀 모르겠지만, 내부는 우리가 예전에 발견했던 네트워크 낭포와 비슷한 구조를 띄고 있어",
        "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "낭포는 단단한 외부 껍질을 가졌다. 하지만 위쪽의 둥근 지점 몇 개는 다른 곳보다 무르다. 당신의 경험상, 이런 곳은 보통 연결 지점이다. 이 지점들은 확실히 좀 더 꼼꼼히 스캔해볼 수 있다.",
        "depth scan": "정밀 스캔",
        "ANALYSIS::'valid nerve point';'connection enabled'": "분석::'유효한 신경점';'연결 가능'",
        "::CORRUCYSTIC ENTITY": "`::코루시스트 독립체",
        "::NO FUNCTION SIGNATURE": "::기능 시그니처 없음",
        "::CONNECTIVE MEMBRANE EXPOSED": "::노출된 결합막",

        "CYSTIC COLUMN": "낭포성 기둥", 

        "CONNECTION POINT": "연결 지점",

        "attempt connection": "연결 시도",
        "CONNECTION_POINT_LOCATED": "연결_지점_확인됨",
        "__COMMENCING__": "__절차_시작__",   
        
        "plastic box": "플라스틱 상자",
        "use to feed column": "기둥에 먹이주기",
        "empty plastic box": "빈 플라스틱 상자",

        "pistol": "권총",
        "kill dendritic cyst and feed column": "수상돌기 낭포를 죽이고 기둥에 먹이주기",

        "hey buddy": "안녕 친구",
        "welcome back": "환영해",
        "you ready to feed this thing?": "자, 이 녀석한테 밥 줄 준비 됐어?",
        "haven't heard back on the request yet": "요청한 건에 대해선 아직 연락을 못 받았어",
        "so, still killing time here": "그러니 일단은 여기서 시간이나 때우고 있자고"
    },
    entityDescriptions: {
        "dendritic cyst": `::코루시스트 독립체
::기능 시그니처: 컨테이너
::노출된 결합 조직 없음`,
        "fractalline cyst": `::코루시스트 독립체
::손상된 기능 시그니처
::노출된 결합 조직 없음`,
        "cystic column": `::코루시스트 독립체
::기능 시그니처: 코루시스트 유지보수
::노출된 결합 조직 없음`,
        "cyst": `::코루시스트 독립체
::기능 시그니처 없음
::노출된 결합막`,
        "connection point": `::코루시스트 독립체 구성 요소
::유효한 연결 지점`,
        "plastic box": `::합성 컨테이너
::비활성 금속 포함`,
        "empty plastic box": `::합성 컨테이너
::비어있음`,
        "pistol": `::공압식 타격 권총
::모델 2052 G.E.T.
::불법 개조 발견됨`,
    }
}

// === DIALOGUES === //
    // see everystuff.js for depthrecovery dialogue

    
// == MOTH == //

env.localization.page["fbx"].dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        이 낭포들은 어디서 찾은 거야?<+>where
        이 권총은 어떻게 해?<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        신경 쓰지 마<+>CHANGE::++moth
            FAKEEND::(뒤로)
`)
env.localization.page['fbx'].dialogues["mth++fbx"] = generateDialogueObject(`
start
    self
        질문이 하나 있어

    moth
        응?
    
    RESPOBJ::mthhubresp

gun
    self
        그럼 이 권총은 그냥 우리가 가지고 있는 거야?

    moth
        오, 그게
        알다시피, 유용할 때가 있을지도 모르잖아
        솔직히 말해서 당장 돌려주기 싫었을 뿐이야 ㅋㅋ
        R&D 부서에서도 그다지 필요해 보이지 않고, 걔네가 뭔가를 죽여야 할 일은 별로 없으니까
        나중에 돌려줄게
    
    RESPOBJ::mthhubresp

where
    self
        이거 다 어디서 가져온 거야?
    
    moth
        뉴질랜드 근처 바다 밑바닥에 있던 오베스크 난파선에서 가져왔어
        '근처'라는 건 남동쪽 해안에서 대충 천 킬로미터 정도 떨어져 있다는 뜻이야
        그냥 엄청 외딴 곳에서 발견돼서...
        뭐, 네가 뉴질랜드보다 더 가까운 곳은 모를 것 같았거든
        원래 추락했던 곳에서 꽤 멀리 떠내려간 거라고 하더라
        추측컨대 못해도 20~30년은 거기 처박혀 있었을 거야

    RESPOBJ::mthhubresp
`)


env.localization.page['fbx'].dialogues["index"] = generateDialogueObject(`
start 
    moth
        안녕 친구, 환영해 
        솔직히 이렇게 소소한 일거리에 네가 올까 싶었어
        요즘 난파선이 하도 많이 발견돼서 말이야
        어쨌든 지금 다 켤 테니까 넌 일단 좀 둘러보고 있어
        
    sourceless
        디코딩 기계가 켜지며 어지럽게 엉킨 전선들에 빛을 비춘다.
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))
        
    RESPONSES::self
        이게 뭐야<+>whatis
        앉는다<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)

whatis
    self
        이게 뭐야?
    moth
        뉴질랜드 근처에 추락한 오베스크 난파선에서 발견된 거야
        기록에 따르면 거의 다 녹아내렸다고 하더라, 조금 이상하긴 한데...
        아무튼... 가장 중요한 건 저기 저 큰 놈이야
        받침대 위에 있다는 건 보통 '중요하다'는 뜻인데, 쟨 아무 표시도 없어
        알렉스가 기본 스캔을 해봤는데, 네트워크 노드랑 비슷하대
        저게 마인드스파이크를 받아들일지도 아직 확실하지 않아
        뭐, 어쨌든 돈은 받을 테니까... 한번 해봐
        
    RESPONSES::self
        앉는다<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)
        마인드스파이크 활성화<+>END
            SHOWIF::"PAGE!!intrositting"
        
sit
    sourceless
        금속 의자가 콘크리트 바닥을 긁는 소리가 난다. 당신은 자리에 앉는다.
            EXEC::env.introSit()
            WAIT::3500

    sourceless
        자리는 차갑고 불편하다. 당신의 보호 장비에서 나오는 빛이 진주빛 낭포에 반사되어 흩어진다.
        
    moth
        옛날 방식대로 - 마인드스파이크 준비 완료야

    RESPONSES::self
        이게 뭐야<+>whatis
            SHOWONCE::
        마인드스파이크 활성화<+>END
        
END::env.enableSpikeCursor();MUI('deprohibit')
`)



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up