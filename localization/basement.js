// cor-KR 로컬라이제이션 - 지하 (Basement)
// 페이지: fbx

if (!env.localization.page.fbx) env.localization.page.fbx = {
    dialogues: {},
    definitions: {},
    strings: {},
    entityDescriptions: {}
};

Object.assign(env.localization.page.fbx.strings, {
    "hey buddy": "야, 친구",
    "welcome": "어서 와",
    "what is this": "이거 뭐야",
    "sit down": "앉을게",
    "activate mindspike": "마인드스파이크 작동"
});

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

// 추가 모스 대화 - 재사용 응답 객체
env.localization.page['fbx'].dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::
   
RESPONSES::self
        어디서 이 낭포들을 찾아왔어?<+>where
        저 권총으로 뭘 할 거야?<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        상관없어<+>CHANGE::++moth
           
FAKEEND::(뒤로)
`);

// 모스와의 추가 대화
env.localization.page['fbx'].dialogues["mth++fbx"] = generateDialogueObject(`
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

// 추가 UI 문자열 업데이트
Object.assign(env.localization.page.fbx.strings, {
    "about this job": "이 일에 대해서",
    "you ready to feed this thing?": "이것 좀 먹일 준비 됐어?",
    "haven't heard back on the request yet": "아직 요청에 대한 답변이 없어",
    "so, still killing time here": "그래서 여기서 시간을 때우고 있어"
});

console.log('%c[cor-KR] basement 로컬라이제이션 로드됨', 'color: #2196F3; font-weight: bold;');
