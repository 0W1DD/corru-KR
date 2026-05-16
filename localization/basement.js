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

console.log('%c[cor-KR] basement 로컬라이제이션 로드됨', 'color: #2196F3; font-weight: bold;');
