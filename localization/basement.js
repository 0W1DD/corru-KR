// cor-KR 로컬라이제이션 - 지하 (Basement)
// 페이지: fbx

if (!env.localization.page.fbx) env.localization.page.fbx = {
    dialogues: {},
    definitions: {},
    strings: {},
    entityDescriptions: {}
};

// 기본 UI 문자열
Object.assign(env.localization.page.fbx.strings, {
    "hey buddy": "야, 친구",
    "welcome back": "다시 온 거야",
    "what is this": "이거 뭐야",
    "sit down": "앉을게",
    "activate mindspike": "마인드스파이크 작동",
    "about this job": "이 일에 대해서",
    "you ready to feed this thing?": "이것 좀 먹일 준비 됐어?",
    "haven't heard back on the request yet": "아직 요청에 대한 답변이 없어",
    "so, still killing time here": "그래서 여기서 시간을 때우고 있어",
    "where were these cysts found?": "저 낭포들은 어디서 건져왔어?",
    "what do we do with this gun": "저 권총으로 뭘 할 거야?",
    "nevermind": "상관없어",
    "so this is the mystery piece": "자, 이게 수수께끼 조각이지",
    "the notes i got say that there were apparently a ton of these on the ship": "내가 받은 기록에 따르면 저런 게 배에 엄청 많이 있었대",
    "all sorts of sizes too": "크기도 제각각이고",
    "but most were too heavy to retrieve... so we just got this small one": "근데 대부분이 너무 무거워서... 그래서 이 작은 거 하나만 건져왔어",
    "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "수상돌기 낭포는 단단한 외부 껍질이 있어. 이거에 연결할 방법은 없을 것 같아",
    "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "수상돌기 낭포는 생각보다 무거워. 손에 들었다 놨다 하면 안에서 쇳소리가 계속 난다. 다시 내려놓으면 촉수들이 새로운 위치를 찾아서 테이블 위에 버티고 있어",
    "nobody knows what this one is.. pretty sure it's dead though": "이건 뭔지 아무도 모르겠어... 근데 죽어있을 거 같긴 해",
    "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "분지 낭포의 외부 껍질은 끈적이고 탱탱해. 꽉 짜면 아마 진흙처럼 될 거야... 그냥 손대지 말자",
    "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "해양 바닥에 얼마나 오래 있었는지 생각해보면 상태가 이상하게 좋지",
    "no clue what it is aside from some similar internal structure to network cysts we've found before": "내부 구조가 우리가 전에 찾았던 네트워크 낭포와 비슷한 거 말고는 뭔지 모르겠어",
    "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "낭포는 단단한 외부 껍질을 가지고 있어. 근데 위쪽에 있는 몇 개의 동그란 점들은 다른 부분보다 덜 단단해. 네 경험상 이런 건 보통 연결점이야. 이 지점을 더 자세히 스캔할 수 있을 거 같아",
    "depth scan": "깊이 스캔",
    "ANALYSIS::'valid nerve point';'connection enabled'": "분석::'유효한 신경 지점';'연결 가능'",
    "::CORRUCYSTIC ENTITY": "::CORRU 낭포 존재",
    "::NO FUNCTION SIGNATURE": "::기능 서명 없음",
    "::CONNECTIVE MEMBRANE EXPOSED": "::노출된 연결 막",
    "CYSTIC COLUMN": "낭포 기둥",
    "CONNECTION POINT": "연결점",
    "attempt connection": "연결 시도",
    "CONNECTION_POINT_LOCATED": "연결점_위치파악됨",
    "__COMMENCING__": "__시작중__",
    "plastic box": "플라스틱 상자",
    "use to feed column": "기둥에 먹일 때 사용",
    "empty plastic box": "빈 플라스틱 상자",
    "pistol": "권총",
    "kill dendritic cyst and feed column": "수상돌기 낭포를 죽이고 기둥에 먹이기",
    "a sharp pain pierces your skull. your mindspike recoils from the corrucyst.": "날카로운 통증이 두개골을 관통해. 너의 마인드스파이크가 corru 낭포에서 물러난다.",
    "ATTENTION::'emergency ejection complete'": "주의::'긴급 배출 완료'",
    "ANALYSIS::'minimal connector damage';'minor neural impact'": "분석::'최소 커넥터 손상';'미미한 신경 영향'",
    "are you all right?": "괜찮아?",
    "oh, shit": "엿, 이런",
    "moth frantically pulls the wires out of a smoking processor. the room smells like fried electronics.": "모스가 분연한 프로세서에서 번개같이 배선을 빼낸다. 방 안은 타버린 전자제품 냄새가 난다.",
    "jesus christ": "진짜",
    "that spike just saved your life dude": "그 스파이크가 너 목숨 구했어",
    "i mean, it didn't sound like that thing was trying to kill you, but damn, just look at this": "글쎄, 그게 너를 죽이려고 하는 건 아닌 것 같긴 했는데, 진짜, 이거 봐",
    "i'm gonna have to limit the signal splitter in case that happens again": "만약을 위해 신호 분배기를 제한해야 할 것 같아",
    "what now?": "이제 뭐해?",
    "well...": "글쎄...",
    "we gotta repair this thing. imagine what we could learn, seriously": "우리가 이 걸 수리해야 해. 뭘 배울 수 있을지 생각해봐",
    "only problem is...": "문제는 뭐냐면...",
    "everything that passes through here dies eventually because we just don't know how to keep it alive": "여기를 거쳐 가는 모든 게 결국 죽어. 우리가 어떻게 살려두는지 모르거든",
    "and it's not like we can just go ask the obesk how": "그리고 우리가 오베스크에 가서 물어볼 수도 없고",
    "it seems like the best option right now is to reconnect and find a way to sustain it...": "지금으로선 최선의 방법이 다시 연결해서 살릴 방법을 찾는 거야...",
    "don't forget how long this thing has been alive, there has to be something we can learn in there": "이 게 얼마나 오래 살았는지 잊지 마. 분명히 배울 게 있을 거야",
    "so get back in, look a little closer at what we have... worst case, at least we got more data.": "그럼 다시 들어가서, 우리가 가진 게 뭔지 좀 더 자세히 봐... 최악의 경우에도 데이터를 더 얻을 수 있잖아",
    "sound good?": "좋지?",
    "what about the entity?": "그 존재는 어떻게 되는 거야?",
    "sounds good": "좋아",
    "that system manager thing, funfriend, that'll be the key to both maintaining and repairing this cyst": "그 시스템 관리자 같은 거, funfriend, 그게 이 낭포를 유지하고 수리하는 데 핵심이 될 거야",
    "and we gotta repair this thing. we could learn SO much, seriously": "그리고 우리가 이 걸 수리해야 해. 정말 엄청 많이 배울 수 있어",
    "we've never been able to maintain corrucystic tech, let alone fix it": "우리는 corru 낭포 기술을 유지한 적도 없어, 수리는 말할 것도 없고",
    "imagine if you and i discovered the secret to keeping it alive, maybe they'd finally move me out of the basement": "만약 너랑 내가 이거 살리는 방법을 찾으면, 혹시 나를 지하에서 나갈 수 있을까",
    "anyway--my order for like copper tubing is in": "어쨌든 - 내가 주문한 구리 튜브가 들어올 거야",
    "not the strangest order from our department, believe it or not": "우리 부서에서 나온 주문 중에 가장 이상한 건 아니야, 믿든지 말든지",
    "so we just need to wait a bit for that to come in": "그래서 그게 들어올 때까지 잠깐 기다리면 돼",
    "obviously we gotta repair this thing. we could learn SO much, seriously": "당연히 우리가 이 걸 수리해야 해. 정말 엄청 많이 배울 수 있어",
    "but according to the funfriend thing, we need some metal to give to the column, which apparently will feed the corrucyst": "근데 funfriend에 따르면, 우리가 기둥에 줄 금속이 필요해. 그게 corru 낭포를 먹일 거래",
    "...and i'm pretty sure that container we have is one of the same ones on akizet's ship, so it probably has something we can use": "...그리고 우리가 가진 그 컨테이너는 akizet의 배에 있던 것과 같은 종류일 거야. 그래서 우리가 쓸 수 있는 뭔가가 있을 거야",
    "i'm just not really sure how to open it short of destroying it": "근데 그걸 어떻게 열어야 할지 모르겠어. 부수지 말고",
    "do me a favor - reconnect and ask funfriend about that, maybe it'll have a suggestion": "한 가지 해 줄래 - 다시 연결해서 funfriend한테 물어봐. 아마 뭔가 제안이 있을 거야",
    "oh, uh": "아, 음",
    "i didn't mean to be so flippant about that, sorry": "그렇게 무심한 척할 의도는 아니었어, 미안해",
    "this time i was actually able to track what it was saying with some direct stream access": "이번엔 직접 스트림 접근으로 그게 뭘 말하는지 추적할 수 있었어",
    "you heard the thing, it doesn't want to kill you": "그 소리 들었잖아. 그건 너를 죽이고 싶어하지 않아",
    "in fact it's relying on us to survive, and it <em>does</em> seem to want to survive": "사실 그건 우리가 살아남기를 바라고 있고, 정말 살아남기를 원하는 것 같아",
    "i think it just didn't have any other way to get you out of that thoughtspace": "그냥 너를 그 사고 공간에서 꺼낼 다른 방법이 없었던 거야",
    "which i guess it's just gonna be holding as leverage for now": "그래서 지금은 그걸 레버리지로 쓸 거겠지",
    "but look, don't worry about it, you got me watching over this operation": "근데 봐, 걱정하지 마. 너한테는 내가 이 작업을 감시하고 있잖아",
    "if something like that happens again, i'll make sure you're fine": "그런 일이 다시 생기면, 내가 너가 괜찮도록 할 거야",
    "didn't it lead you to whatever this was last time?": "그게 지난번엔 너를 그 뭔가한테 이끌어가지 않았어?",
    "was it the same thing?": "같은 거였어?",
    "looked similar but different": "비슷하긴 한데 달랐어",
    "well, comparing the logs,": "음, 기록을 비교해보니",
    "it looks like it's at least part of the same thing": "적어도 같은 것의 일부인 것 같아",
    "but the data that hit you is way different...": "근데 너한테 부딪친 데이터는 완전히 달라...",
    "last time it was just noise, probably to disrupt your connection": "지난번엔 그냥 노이즈였어. 아마 너의 연결을 방해하려고",
    "but this time it was structured somehow": "근데 이번엔 뭔가 구조가 있었어",
    "not enough to make sense of, but...": "이해할 정도는 아니지만...",
    "i think you nearly connected to whatever it was": "내 생각엔 너가 그게 뭐든 거의 연결할 뻔했어",
    "still, maybe next time you find some giant incoherent thing,": "어쨌든, 다음번에 거대한 무언가 난해한 것을 찾으면",
    "don't just blindly enter it, ok?": "무조건 들어가지 말고, 알지?",
    "the throttling we set up protected you this time": "우리가 설정한 조절 장치가 이번엔 너를 보호했어",
    "but it's not perfect, and some of it still hit your brain": "근데 완벽하지 않아서 일부가 너의 뇌에 맞았어",
    "so like... take it easy for a bit": "그래서... 좀 쉬자",
    "...uh-huh, right": "...네, 맞아",
    "moth paces in the dark, a dark shape held to an ear.": "모스는 어둠 속에서 배회한다. 어두운 그림자가 귀에 들려온다.",
    "you receive a welcoming wave that turns into a vague gesture to the central cyst.": "너는 인사 손짓을 받는데 그게 중앙 낭포로의 모호한 제스처로 변한다.",
    "look, we're just trying something new": "봐, 우리가 새로운 거 시도하는 거야",
    "there's lots of waiting time, and observation...": "대기 시간도 많고, 관찰도 하고...",
    "uh-huh...": "음...",
    "strange? like what?": "이상해? 뭐 같은?",
    "oh, well... we're still poking around": "아, 글쎄... 우리가 계속 탐색하고 있거든",
    "there's some promising stuff here and there, but...": "여기저기 희망적인 것도 있지만...",
    "right...": "그렇지...",
    "can it wait for the full report?": "전체 보고서까지 기다릴 수 있어?",
    "...ok, then just send them down once they're ready, we'll process them too": "...알겠어, 그럼 준비되면 내려 보내 줘. 우리가 처리할게",
    "it's async, you know? we can do more than one": "비동기식이잖아? 우리가 한 개 이상 할 수 있어",
    "...yeah, look, the contractor just got here, so, i need to go": "...네, 봐, 계약자가 방금 왔어. 그래서 나 가야 해",
    "we can talk about it later": "나중에 얘기하자",
    "thanks dude": "고마워, 친구",
    "yeah, bye": "응, 바이",
    "the call is over. moth sighs.": "통화가 끝난다. 모스가 한숨을 쉰다.",
    "hey buddy": "야, 친구",
    "good news first": "좋은 소식부터",
    "i'm pretty sure another part of the cyst is repaired": "내 생각엔 낭포의 다른 부분이 수리됐을 거야",
    "probably the next part of the collapse, judging by the activity measurements": "활동 측정으로 봐선 아마 붕괴의 다음 부분일 거야",
    "hopefully the last": "마지막이길 바래",
    "because the bad news is, it feels like the upstairs are prying at the door": "나쁜 소식은, 위층 사람들이 문을 들이려고 하는 것 같아",
    "i mean, it's not especially rare to take so long on a few corrucystic pieces, but...": "내 말은, corru 낭포 조각 몇 개로 이렇게 오래 걸리는 게 특별히 드문 건 아닌데...",
    "when it happens, that's when they start calling": "하지만 그럴 땐 통화가 시작돼",
    "so i bought us some time, but, i'm not sure how much": "그래서 나 시간을 벌었는데, 얼마나 벌었는지는 모르겠어",
    "they just think we're trying some long operation, which...": "쟤네들 생각엔 우리가 뭔가 오래 걸리는 작업을 하고 있는 거고...",
    "you know, isn't a lie": "그건 거짓이 아니잖아",
    "but we might end up getting more pieces to look over soon": "근데 우리가 곧 더 많은 조각들을 봐야 할 수도 있어",
    "what if they want it back before we're really done?": "만약 우리가 정말 끝나기 전에 돌려달라고 하면 어떻게 해?",
    "before we have communications back?": "통신이 다시 복구되기 전에?",
    "to be honest, that's probably going to happen": "솔직히, 그게 일어날 가능성이 높아",
    "we still have no idea if it's even possible to repair": "우리가 아직도 수리가 가능한지도 모르잖아",
    "but, if things get...": "근데, 만약 상황이...",
    "i don't know, really down to the wire,": "글쎄, 정말 마지막까지 몰려갈 때",
    "i've noticed the monitoring on biohazard disposals is really lax": "나 생물 위험 폐기물 모니터링이 정말 느슨한 걸 알아챘어",
    "not saying we do anything, but...": "뭘 하자는 건 아니지만...",
    "...wouldn't be the first time": "...처음도 아니잖아",
    "look, let's just get started": "봐, 일단 시작하자",
    "if it comes to that, we'll cross that bridge when we get there": "그렇게 되면 그때 그 다리를 건넘으로 해",
    "ok": "알겠어",
    "anything else on your mind?": "다른 생각 있어?",
    "i have a question": "내가 물어볼 게 있는데",
    "yeah?": "응?",
    "where were these pulled from?": "저건 어디서 건져왔어?",
    "so they found this stuff in a wreck along the ocean floor near new zealand": "그래서 쟤네들이 뉴질랜드 근처 해양 바닥의 난파선에서 이 거를 찾았어",
    "and by 'near', I mean like a thousand miles off the southeast coast": "그리고 '근처'라는 게 남동쪽 해안에서 천 마일 떨어진 곳 말이야",
    "it's just that it was found so far out from anything else, that, like...": "그냥 그게 다른 모든 것에서 그렇게 멀리 떨어져 있어서...",
    "new zealand is just the closest point of reference i figured you'd recognize": "뉴질랜드가 내가 넌 알 것 같은 가장 가까운 참고점일 뿐이야",
    "they think it had drifted a pretty far distance from wherever it actually fell": "쟤네들 생각엔 그게 원래 떨어진 곳에서 꽤 멀리 표류했다고 생각해",
    "the estimates they put down say it's probably been down there 20, 30ish years": "쟤네들 추정으론 아마 20~30년 정도는 거기 있었을 거야",
    "oh, well,": "아, 글쎄",
    "you know, it might be handy": "알아, 나중에 쓸모가 있을 수도 있으니까",
    "to be honest with you i don't really feel like returning it right now lol": "솔직히 지금 당장 돌려주고 싶지 않아 하하",
    "r&d didn't seem like they needed it, it's not often they need to kill something": "연구개발팀은 필요 없어 보였어. 뭔가를 죽일 일이 자주 있지 않거든",
    "i'll return it later": "나중에 돌려줄 게",
    
    // 엔티티 액션 라벨 (소문자로 정의 - 게임이 찾는 형식)
    "examine": "조사하기",
    "touch": "만져보기",
    "lift": "들어올리기",
    "depth scan": "깊이 스캔",
    "ATTENTION::'additional ACT enabled';'rescan'": "경고::'추가 행동 활성화됨';'재스캔'"
});

// 엔티티 설명
Object.assign(env.localization.page.fbx.entityDescriptions, {
    "dendritic cyst": `::CORRU 낭포 존재
::기능 서명: 컨테이너
::노출된 연결 조직 없음`,
    "fractalline cyst": `::CORRU 낭포 존재
::손상됨
::기능 서명
::노출된 연결 조직 없음`,
    "cyst": `::CORRU 낭포 존재
::기능 서명 없음
::노출된 연결 막`,
    "cystic column": `::CORRU 낭포 존재
::기능 서명: CORRU 낭포 유지보수
::노출된 연결 조직 없음`,
    "connection point": `::CORRU 낭포 존재 구성 요소
::유효한 연결점`,
    "plastic box": `::합성 컨테이너
::불활성 금속 포함`,
    "empty plastic box": `::합성 컨테이너
::비어 있음`,
    "pistol": `::공압 권총 - 분사 로드 구동식
::모델 2052 G.E.T.
::불법 개조 발견됨`
});

// 초기 모스 인사말
env.localization.page.fbx.dialogues.index = generateDialogueObject(`
start
    moth
        야, 친구. 어서 와.
        솔직히 이렇게 건질 게 적은 건이라 네가 올지 좀 긴가민가했어
        요즘은 바다 난파선이 엄청 많이 발견되거든
        아무튼 지금 장비 다 켤게, 그동안 이것저것 둘러봐도 돼

    sourceless
        해독 장비가 켜지며, 거미줄처럼 얽힌 전선 더미 위로 빛을 쏟아낸다.
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))

    RESPONSES::self
        what is this<+>whatis
        sit down<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)

whatis
    self
        이거 뭐야?
    moth
        뉴질랜드에서 그리 멀지 않은 데서 건진 오베스크 난파선 유물인데
        내가 받은 기록엔 거의 다 녹아 있었다고 하더라, 좀 이상하지...
        아무튼... 핵심은 여기 있는 저 큰 놈이야
        보통 받침대에 올라가 있으면 '중요한 물건'이라는 뜻인데, 이건 표시가 없어
        알렉스가 기본 스캔은 해봤는데, 네트워크 노드처럼 보인대
        마인드스파이크를 받아줄지도 아직 확실치 않고
        뭐 그래도 돈은 똑같이 받으니까... 한번 해봐

    RESPONSES::self
        sit down<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)
        activate mindspike<+>END
            SHOWIF::"PAGE!!intrositting"

sit
    sourceless
        금속 의자가 콘크리트를 긁는 소리를 낸다. 너는 자리에 앉는다.
            EXEC::env.introSit()
            WAIT::3500

    sourceless
        의자는 차갑고 불편하다. 보호 장비의 빛이 진주빛 낭포 표면에 흩어진다.

    moth
        알지? 평소대로, 마인드스파이크 준비

    RESPONSES::self
        what is this<+>whatis
            SHOWONCE::
        activate mindspike<+>END

END::env.enableSpikeCursor();MUI('deprohibit')
`);

// 재사용 응답 객체
env.localization.page.fbx.dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::

RESPONSES::self
        어디서 저 낭포들을 건져왔어?<+>where
        저 권총으로 뭘 할 거야?<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        상관없어<+>CHANGE::++moth

FAKEEND::(뒤로)
`);

// 모스와의 추가 대화
env.localization.page.fbx.dialogues["mth++fbx"] = generateDialogueObject(`
start

self
        내가 물어볼 게 있는데

    moth
        응?

RESPOBJ::mthhubresp

gun
    self
        근데 우리 그 권총 그냥 두는 건가?

    moth

  아, 글쎄, 나중에 필요할 수도 있으니까
        정직하게 말하면 지금 바로 돌려주기가 싫은 것도 있고
        연구개발팀도 별로 필요 없을 거 같아, 사람을 죽일 일이 자주 있는 건 아니잖아
        나중에 돌려줄 게

    RESPOBJ::mthhubresp

where
    self
        저건 어디서 건져온 거야?

    moth

   해양 바닥의 난파선에서 건져왔는데 뉴질랜드에서 그리 멀지 않은 곳이지
        근데 "그리 멀지 않은"이라는 게, 남동쪽 해안에서 천 킬로미터 정도 떨어진 곳 말이야

       정말 오지중의 오지라서...
        글쎄, 뉴질랜드 주변보다 더 외진 곳도 없을 것 같아
        쟤네들 평가론 원래 떨어져 있던 곳에서 충분히 멀리 표류했다고 생각하대
        그들 추정으론 20~30년 이상은 해저에 있었던 것 같아

    RESPOBJ::mthhubresp
`);

// depthrecovery - 긴급 배출 후 대화
env.localization.page.fbx.dialogues.depthrecovery = generateDialogueObject(`
start
    sourceless quiet
        날카로운 통증이 두개골을 관통해. 너의 마인드스파이크가 corru 낭포에서 물러난다.
            WAIT::3000

    sys
        주의::'긴급 배출 완료'
        분석::'최소 커넥터 손상';'미미한 신경 영향'
            EXEC::document.querySelector('#connection-overlay').classList.add('fade');setTimeout(()=>document.querySelector('#connection-overlay').classList.remove('show'),3000)

    moth
        괜찮아?
        아, 진짜

    sourceless
        모스가 분연한 프로세서에서 번개같이 배선을 빼낸다. 방 안은 타버린 전자제품 냄새가 난다.

    moth
        진짜 말이야
        그 스파이크가 너 목숨 구했어
        내 말은, 그게 너를 죽이려고 하는 건 아인 것 같긴 했는데, 진짜, 이거 봐
        내가 신호 분배기를 제한해야 할 것 같아. 만약을 위해

    RESPONSES::self
        이제 뭐해?<+>whatnow_lk
            SHOWIF::[["hub__funfriend-fuelthanks", false],["exm|dullvessel|container", false]]
        이제 뭐해?<+>whatnow_lk
            SHOWIF::[["hub__funfriend-fuelthanks", false],["exm|dullvessel|container", true]]
        이제 뭐해?<+>whatnow_mk
            SHOWIF::[["hub__funfriend-fuelthanks", true],["exm|dullvessel|container", false]]
        이제 뭐해?<+>whatnow_hk
            SHOWIF::[["hub__funfriend-fuelthanks"],["exm|dullvessel|container"]]

whatnow_lk
    self
        이제 뭐해?

    moth
        글쎄...
        우리가 이 걸 수리해야 해. 뭘 배울 수 있을지 생각해봐
        문제는 뭐냐면...
        여기를 거쳐 가는 모든 게 결국 죽어. 우리가 어떻게 살려두는지 모르거든
        그리고 우리가 오베스크에 가서 물어볼 수도 없고
        지금으로선 최선의 방법이 다시 연결해서 살릴 방법을 찾는 거야...
        이 게 얼마나 오래 살았는지 잊지 마. 분명히 배울 게 있을 거야
        그럼 다시 들어가서, 우리가 가진 게 뭔지 좀 더 자세히 봐... 최악의 경우에도 데이터를 더 얻을 수 있잖아
        좋지?

    RESPONSES::self
        그 존재는 어떻게 되는 거야?<+>entity
        좋아<+>END

whatnow_mk
    self
        이제 뭐해?

    moth
        글쎄...
        그 시스템 관리자 같은 거, funfriend, 그게 이 낭포를 유지하고 수리하는 데 핵심이 될 거야
        그리고 우리가 이 걸 수리해야 해. 정말 엄청 많이 배울 수 있어
        우리는 corru 낭포 기술을 유지한 적도 없어, 수리는 말할 것도 없고
        만약 너랑 내가 이거 살리는 방법을 찾으면, 혹시 나를 지하에서 나갈 수 있을까
        어쨌든 - 내가 주문한 구리 튜브가 들어올 거야
        우리 부서에서 나온 주문 중에 가장 이상한 건 아니야, 믿든지 말든지
        그래서 그게 들어올 때까지 잠깐 기다리면 돼
        좋지?

    RESPONSES::self
        그 존재는 어떻게 되는 거야?<+>entity
        좋아<+>END

whatnow_hk
    self
        이제 뭐해?

    moth
        당연히 우리가 이 걸 수리해야 해. 정말 엄청 많이 배울 수 있어
        우리는 corru 낭포 기술을 유지한 적도 없어, 수리는 말할 것도 없고
        만약 너랑 내가 이거 살리는 방법을 찾으면, 혹시 나를 지하에서 나갈 수 있을까
        근데 funfriend에 따르면, 우리가 기둥에 줄 금속이 필요해. 그게 corru 낭포를 먹일 거래
        ...그리고 우리가 가진 그 컨테이너는 akizet의 배에 있던 것과 같은 종류일 거야. 그래서 우리가 쓸 수 있는 뭔가가 있을 거야
        근데 그걸 어떻게 열어야 할지 모르겠어. 부수지 말고
        한 가지 해 줄래 - 다시 연결해서 funfriend한테 물어봐. 아마 뭔가 제안이 있을 거야

    RESPONSES::self
        그 존재는 어떻게 되는 거야?<+>entity
        좋아<+>END

entity
    self
        그 존재는 어떻게 되는 거야?

    moth
        아, 음
        그렇게 무심한 척할 의도는 아니었어, 미안해
        이번엔 직접 스트림 접근으로 그게 뭘 말하는지 추적할 수 있었어
        그 소리 들었잖아. 그건 너를 죽이고 싶어하지 않아
        사실 그건 우리가 살아남기를 바라고 있고, 정말 살아남기를 원하는 것 같아
        그냥 너를 그 사고 공간에서 꺼낼 다른 방법이 없었던 거야
        그래서 지금은 그걸 레버리지로 쓸 거겠지
        근데 봐, 걱정하지 마. 너한테는 내가 이 작업을 감시하고 있잖아
        그런 일이 다시 생기면, 내가 너가 괜찮도록 할 거야

    RESPONSES::self
        알겠어<+>END

END::flash(true);setTimeout(()=>{content.classList.remove('ep0-epi');change('ep0_epilogue', 'started');flash(false)}, 1000)
`);

// EP0 - 두 번째 배출 후
env.localization.page.fbx.dialogues["ep0-depthrecovery2"] = generateDialogueObject(`
start
    sourceless quiet
        너의 눈이 초점을 다시 맞춘다. 너의 마인드스파이크가 물러난다.
            WAIT::3000
        통증이 척추를 통해 퍼진다.

    sys
        주의::'긴급 배출 완료'
        분석::'커넥터 손상 없음';'미미한 신경 영향'
            EXEC::document.querySelector('#connection-overlay').classList.add('fade');setTimeout(()=>document.querySelector('#connection-overlay').classList.remove('show'),3000)

    moth
        감사합니다
        제한 설정이 효과가 있었던 것 같아
        무슨 일이 일어났어?
        네 로그가 완전히 읽을 수 없는 말도 안 되는 데이터로 가득 찼어
        넌 새로운 사고 공간으로 이동을 시작했다가...
        그리고 거기서 그냥... 터져버렸어?

    self
        뭔가를 찾았어
        들어가려고 했는데, velzie가 나를 막았어
        지난번 이런 일이 일어났을 때처럼 말이야
        근데 이번은 달랐어
        velzie가 내가 거기 있는 걸 놀라워하더라
        뭔가 일어나는 걸 막기 위해 필사적이었어

    moth
        그게 지난번에 너한테 뭔가로 이끌어가지 않았어?
        같은 거였어?

    self
        비슷하긴 한데 달랐어

    moth
        음, 기록을 비교해보니
        적어도 같은 것의 일부인 것 같아
        근데 너한테 부딪친 데이터는 완전히 달라...
        지난번엔 그냥 노이즈였어. 아마 너의 연결을 방해하려고
        근데 이번엔 뭔가 구조가 있었어
        이해할 정도는 아니지만...
        내 생각엔 너가 그게 뭐든 거의 연결할 뻔했어
        어쨌든, 다음번에 거대한 무언가 난해한 것을 찾으면
        무조건 들어가지 말고, 알지?
        우리가 설정한 조절 장치가 이번엔 너를 보호했어
        근데 완벽하지 않아서 일부가 너의 뇌에 맞았어
        그래서... 좀 쉬자

    RESPONSES::self
        알겠어<+>END

END::flash(true);setTimeout(()=>{content.classList.remove('ep0-epi');env.enableSpikeCursor();flash(false)}, 1000)
`);

// EP0 - 에필로그 시작
env.localization.page.fbx.dialogues["ep0_epilogue"] = generateDialogueObject(`
start
    moth
        ...네, 맞아

    sourceless
        모스는 어둠 속에서 배회한다. 어두운 그림자가 귀에 들려온다.
        너는 인사 손짓을 받는데 그게 중앙 낭포로의 모호한 제스처로 변한다.

    moth
        봐, 우리가 새로운 거 시도하는 거야
        대기 시간도 많고, 관찰도 하고...
        음...
        이상해? 뭐 같은?
        아, 글쎄... 우리가 계속 탐색하고 있거든
        여기저기 희망적인 것도 있지만...
        그렇지...
        전체 보고서까지 기다릴 수 있어?
        ...알겠어, 그럼 준비되면 내려 보내 줘. 우리가 처리할게
        비동기식이잖아? 우리가 한 개 이상 할 수 있어
        ...네, 봐, 계약자가 방금 왔어. 그래서 나 가야 해
        나중에 얘기하자
        고마워, 친구
        응, 바이

    sourceless
        통화가 끝난다. 모스가 한숨을 쉰다.

    moth
        야, 친구
        좋은 소식부터
        내 생각엔 낭포의 다른 부분이 수리됐을 거야
        활동 측정으로 봐선 아마 붕괴의 다음 부분일 거야
        마지막이길 바래
        나쁜 소식은, 위층 사람들이 문을 들이려고 하는 것 같아
        내 말은, corru 낭포 조각 몇 개로 이렇게 오래 걸리는 게 특별히 드문 건 아닌데...
        하지만 그럴 땐 통화가 시작돼
        그래서 나 시간을 벌었는데, 얼마나 벌었는지는 모르겠어
        쟤네들 생각엔 우리가 뭔가 오래 걸리는 작업을 하고 있는 거고...
        그건 거짓이 아니잖아
        근데 우리가 곧 더 많은 조각들을 봐야 할 수도 있어

    RESPONSES::self
        알겠어<+>END
`);

// EP1 - 재료 배송 후
env.localization.page.fbx.dialogues["ep1_materials"] = generateDialogueObject(`
start
    moth
        야, 친구, 한 가지 왔어
            SHOWIF::[["TEMP!!sat", false]]
        자, 한 가지 왔어
            SHOWIF::[["TEMP!!sat"]]

    sourceless
        모스가 구리 튜브로 가득 찬 플라스틱 상자를 들어올린다. 짤랑거리는 소리가 난다.
        작은 길이로 자른 것들이다.
        상자가 테이블에 놓여진다. 분지 낭포가 공간을 내기 위해 옮겨진다.
            EXEC::content.classList.add('showcopper')

    moth
        이 거 죽어있는 거 맞는 것 같으니까, 그냥...

    sourceless
        분지 낭포가 근처 생물 위험 쓰레기통에 버려진다.

    moth
        어쨌든 - 이거 낭포한테 먹일 준비 됐어?
            SHOWIF::[["ep0_epilogue", "started"]]

        그리고!
            SHOWIF::[["ep0_epilogue", "done"]]

    sourceless
        모스가 수상돌기 낭포 근처에 원통형 권총을 내려놓는다.
            SHOWIF::[["ep0_epilogue", "done"]]
            EXEC::content.classList.add('showgun')

    moth
        권총 요청이 연구개발팀을 좀 들썩였어
            SHOWIF::[["ep0_epilogue", "done"]]
        근데 내가 corru 낭포 컨테이너를 죽이려는 거라고 설명하니까 그들이 정확히 필요한 거를 주더라
            SHOWIF::[["ep0_epilogue", "done"]]
        이건 corru 기술을 폐기하기 위해 용도 변경한 소를 죽이는 권총 같은 거야
            SHOWIF::[["ep0_epilogue", "done"]]
        발사체는 없고, 높은 속도로 짧은 스파이크만 발사해. 나 생각엔 전자기 추진 같은 거 쓰는 것 같아
            SHOWIF::[["ep0_epilogue", "done"]]
        어쨌든, 넌 뭘 생각하는지 알겠지 - 왜 둘 다?
            SHOWIF::[["ep0_epilogue", "done"]]
        간단해 - 내가 구리 주문 취소하는 거 깜빡했어
            SHOWIF::[["ep0_epilogue", "done"]]
        그래서 우리가 둘 다 가지게 됐지.
            SHOWIF::[["ep0_epilogue", "done"]]
        우리가 구리를 쓸 수도 있고, 컨테이너를 죽이고 akizet의 '가공 금속'을 쓸 수도 있어
            SHOWIF::[["ep0_epilogue", "done"]]
        개인적으로는 구리가 낫다고 생각해. 컨테이너가 뭘 할지 몰라서
            SHOWIF::[["ep0_epilogue", "done"]]
        근데... 넌 핫시트에 앉아있으니까 넌 결정해
            SHOWIF::[["ep0_epilogue", "done"]]

    RESPONSES::self
        알겠어<+>END
`);

// EP1 - 구리 급식
env.localization.page.fbx.dialogues["ep1_feedcopper"] = generateDialogueObject(`
start
    self
        시작하자
            SHOWIF::[["ep0_epilogue", "started"]]
        구리로 가자
            SHOWIF::[["ep0_epilogue", "done"]]

    sourceless
        넌 플라스틱 상자를 더 가깝게 끌어당긴다.
        구리 막대들이 집중된 빛 아래에서 반짝인다.

    moth
        좋아!
        funfriend가 말하길 기둥에 줘야 한대. 그럼 기둥이 나머지를 처리한대
        그래서 우리가 그냥 구멍에 버리면 되는 거 같아? 구멍이 커 보이거든

    RESPONSES::self
        낭포를 옮겨놓자<+>move
            EXEC::env.spikeMoveLoopPaused = true;body.classList.add('prepgrab');document.querySelector('.cursor').id = "cursor-upper-left"

move
    sourceless
        넌 너의 마인드스파이크를 조종해서 유틸리티 클로를 뻗어 낭포를 움켜잡는다.
            EXEC::body.classList.add('cystgrab')
        낭포의 낭포질 유리 같은 피부가 약간 물러나고 좋은 그립감을 제공한다.
        넌 당겨대. 비록 위치 위에 자성 끌림이 있지만, 쉽게 제거된다.
            EXEC::body.classList.add('cystlift')

    moth
        좋아, 너무 꽉 쥐지 말고

    RESPONSES::self
        구리를 부으자<+>dump
            EXEC::body.classList.add('pourcopper')

dump
    sourceless
        넌 상자를 대각선으로 기울여 조심스럽게 금속 막대들을 작은 배치로 흔든다.
        그들은 기둥의 공동을 채우며 쇳소리를 내고, 불투명한 수은 같은 액체가 천천히 금속 위로 올라온다.
        그것은 구리 막대 주위를 살아있는 것처럼 구르고 꿈틀거린다.
        방의 팬들이 모스의 몇 가지 키입력 이후 더 크게 울린다.
            EXEC::body.classList.add('pourcopper')

    moth
        그냥 혹시 모르니까

    sourceless
        넌 빈 상자를 옆에 놓는다.
            EXEC::body.classList.add('emptycopper');body.classList.remove('pourcopper', 'cystlift')

    RESPONSES::self
        끝났어?<+>done

done
    self
        끝났어?
            EXEC::body.classList.remove('cystgrab');document.querySelector('.cursor').style.transform = "translate(0, 50vh)"

    moth
        마치 내가 뭐 알 것처럼 하하
        근데 작동하는 것 같긴 해
        다시 연결해서 우리 친구한테 확인해 봐

    RESPONSES::self
        알겠어<+>END

END::env.spikeMoveLoopPaused = false;body.classList.remove('prepgrab');;change('ep1_fed', 'copper')
`);

// EP1 - 컨테이너 살인
env.localization.page.fbx.dialogues["ep1_feedcontainer"] = generateDialogueObject(`
start
    sourceless
        넌 소 죽이는 권총을 움켜잡고 멀리 겨누고 실험적으로 트리거를 당긴다.
        눈 깜짝할 사이에 스파이크가 팁에서 튀어나오고 큰 쉬익 소리가 난다. 그리고 다시 들어간다.
        넌 권총 안에서 뭔가 으르렁거리는 소리가 느껴진다.

    self
        좋아
        이 거 죽이자

    moth
        사이코처럼 말하지 말 것 같은데 하하

    RESPONSES::self
        낭포를 옮겨놓자<+>move
            EXEC::env.spikeMoveLoopPaused = true;body.classList.add('prepgrab');document.querySelector('.cursor').id = "cursor-upper-left"

move
    sourceless
        넌 너의 마인드스파이크를 조종해서 유틸리티 클로를 뻗어 낭포를 움켜잡는다.
            EXEC::body.classList.add('cystgrab')
        낭포의 낭포질 유리 같은 피부가 약간 물러나고 좋은 그립감을 제공한다.
        넌 당겨대. 비록 위치 위에 자성 끌림이 있지만, 쉽게 제거된다.
            EXEC::body.classList.add('cystlift', 'containerseq')

    moth
        좋아, 너무 꽉 쥐지 말고

    RESPONSES::self
        컨테이너를 집어들자<+>grab

grab
    sourceless
        넌 corru 낭포 컨테이너를 가져가고 테이블에서 들어올린다. 거꾸로 들고 있다.
            WAIT::1000
            EXEC::body.classList.add('containerfade');setTimeout(()=>body.classList.add('containercenter'), 400)
        그것의 수상돌기들이 공중에서 게으르게 흔들린다.

    moth
        그래서 funfriend가 말하길 기저부를 치면 즉시 죽는대
        만약 안 치면
        폭력적으로 반응한다는 거더라
        글쎄, 그게 그리 나쁠 순 없지. 그리 크진 않고 너의 슈트 꽤 두껍고
        근데...
        만약 던져야 하면 내 기계 쪽으로 던지지는 마

    RESPONSES::self
        죽여<+>kill

kill
    sourceless
        넌 소 죽이는 권총을 낭포의 받침대 촉수들 사이에 각도를 맞춘다.
            EXEC::body.classList.add('containeraim')
        몇몇이 무기의 옆면에 붙으려 시도해본다. 연결 가능성을 테스트해본다. 하지만 통과한다.
        배럴이 곧 유리질 밑부분에 닿고, 그래서 넌 트리거를 짠다.
        넌 양쪽 손에 놀라운 반동을 느낀다. 큰 크랙이 방 안에 울린다. 낭포의 촉수가 격렬하게 흔들린다.
            WAIT::2000
            EXEC::env.intro.glass.rate(1.25);env.intro.glass.play();flash(true);setTimeout(()=>body.classList.add('containershot'), 200);setTimeout(()=>flash(false), 400)
        그들이 빠르게 축축해지고 녹기 시작한다.
            EXEC::body.classList.remove('containershot')
        넌 전체를 기둥의 공동에 떨어뜨린다. 그 전에 붕괴되기 전에.
            EXEC::body.classList.add('containerdrop');body.classList.remove('containerfade')
        금색 금속이 반짝이지만 녹아내린 컨테이너 아래로 사라진다.
            EXEC::body.classList.remove('containeraim')
        넌 낭포를 낮추고 권총을 내려놓는다.
            EXEC::body.classList.remove('cystlift', 'containercenter')

    moth
        와
        빠른 생각이네. 이게 여기저기 녹으면 진짜 지저분했을 수도
        아마 위험하기도 했을 거고
            EXEC::body.classList.remove('cystgrab');document.querySelector('.cursor').style.transform = "translate(0, 50vh)"
        그리고 나 생각엔 그게 다야... 내가 생각했던 것보다 별로 안 나쁘네
        다시 연결해서 funfriend랑 얘기해봐
        좋아?

    RESPONSES::self
        알겠어<+>END

END::env.spikeMoveLoopPaused = false;body.classList.remove('prepgrab', 'containerseq');change('ep1_fed', 'container')
`);

// EP1 - 다음 대화
env.localization.page.fbx.dialogues["ep1_followup"] = generateDialogueObject(`
start
    moth
        야, 친구!
        괜찮길 바래
        빨리 시작하자
        어제 밤 로그를 좀 봤는데...
        표면 사고형이 엄청 활동했어 - 너가 접근할 수 있는 그런 거들이
        나 생각엔 funfriend가 뭔가 큰 거 고쳤을 거야
        그한테 가서 뭐가 있는지 확인해 봐!

    RESPONSES::self
        알겠어<+>END

start
    moth
        야, 친구, 잘 지내?
        지난밤 활동을 확인해봤는데...
        이게 funfriend가 첫 번째 붕괴 부분을 고쳤을 때랑 비슷해
        나 생각엔 다음 부분이 준비됐을 거야
        활동량으로 봐선 이건 아마 더 큰 부분일 거야
        그래서... 미안해. 너가 아직 프레이밍이 별로라고 생각해도
            SHOWIF::'mth++embassy-gamebad'
        들어가!
        그리고. 나 일한 후에 궁금해져서
        예전 뉴스 기록이랑 영상 자료를 찾아봤어... 붕괴 일어났을 때
        비디오가 다 한 사이트에만 있던 시절 기억해? 그럼 좋았을 텐데
        어쨌든 뭐 대단한 건 못 찾았고
        관찰할 게 있으면 나중에 시간 되면 들어 줄 게
        근데 지금은 너한테 다시 들어가야 해
        요즘 몇 일일 뿐이지만, 사람들이 이게 어떻게 가는지 묻기 시작했어
        계속 유지하고 있었는데... 너 알지?
        얼마나 오래 유지할 수 있을지 모르겠고. 몇 주든 며칠이든
        우리가 가진 게 아마 이미 폭탄일 텐데
        근데 난 이거를 제출하기 전까지는 원자폭탄이 되기를 원해

    RESPONSES::self
        알겠어...<+>END
`);

<<<<<<< HEAD
// === 엔티티 설명 후처리 === //
// entity descriptions 적용
if (cor_ru && cor_ru.entity_menu) {
    cor_ru.entity_menu['dendritic cyst'] = {
        name: '수상돌기 낭포',
        desc: env.localization.page.fbx.entityDescriptions['dendritic cyst']
    };
    cor_ru.entity_menu['fractalline cyst'] = {
        name: '분지 낭포',
        desc: env.localization.page.fbx.entityDescriptions['fractalline cyst']
    };
    cor_ru.entity_menu['cyst'] = {
        name: '낭포',
        desc: env.localization.page.fbx.entityDescriptions['cyst']
    };
}

// === READOUT 메시지 번역 후킹 === //
// readoutAdd()로 동적으로 추가되는 메시지를 번역 처리
if (window.readoutAdd) {
    const originalReadoutAdd = window.readoutAdd;
    window.readoutAdd = function(obj) {
        // 메시지를 소문자로 정규화하여 번역 사전에서 검색
        if (obj && obj.message) {
            const msgLower = obj.message.toLowerCase();
            const translation = env.localization.page.fbx?.strings?.[msgLower];
            if (translation) {
                obj.message = translation;
            }
        }
        // 원본 함수 호출
        originalReadoutAdd(obj);
        // DOM 업데이트 후 다시 한 번 번역
        setTimeout(() => {
            if (document.querySelector("#readout")) {
                processTranslation(document.querySelector("#readout"), true);
                if (cor_ru && cor_ru.processReadout) {
                    cor_ru.processReadout();
                }
            }
        }, 100);
    };
}

// === 지속적인 DOM 번역 감시 === //
getLocalizationForPage(true);

=======
>>>>>>> parent of 0c28fc6 (흠 될까)
console.log('%c[cor-KR] basement 로컬라이제이션 로드됨', 'color: #2196F3; font-weight: bold;');
