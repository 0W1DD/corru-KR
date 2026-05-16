/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/hub.js
    /local/hub 번역
    
*/


env.localization.page['hub'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "about the hub": "허브에 대해서",

        "funfriend": cor_kr.entity_menu["funfriend"].name,

        "HELLO! HELLO! IT HAS BEEN SO LONG! SO LONG SINCE LAST CONNECTION!":"안녕! 안녕! 정말 오래됐어! 마지막 연결 이후로 너무 오래 지났어!",
        "PLEASE WAIT WHILE I TURN SOME LIGHTS ON! AHAHA!!":"불을 좀 켤 테니 잠깐만 기다려! 아하하!!",
        "WOW! THERE IS SIGNIFICANT DAMAGE TO THIS DEVICE!":"와! 이 장치는 상당히 손상됐어!",
        "IT IS SO BAD AHAHAHAHA WOW":"상태가 정말 나쁘네 아하하하하 와",
        "OH WELL":"뭐, 어쩔 수 없지",
        "PLEASE FEED SOON":"곧 먹여 줘",

        "HELLO THERE":"안녕",
        "CAN YOU SPEAK WITH ME":"나와 이야기해 줄 수 있어?",

        "HELLO AGAIN":"다시 안녕",
        "HELLO INTERLOPER":"안녕, 침입자",
        "HI INTERLOPER":"안녕, 침입자",

        "HELLO!":"안녕!",
        "IS THE AUTH LAYER STILL DISSOCIATED?":"인증 계층은 아직도 분리된 상태야?",
        "I MISS THEM":"그들이 그리워",

        "INTERLOPER!":"침입자!",
        "WELCOME":"환영해",
        "BUT ALSO PLEASE DO NOT BOTHER ME":"하지만 나를 방해하지는 말아 줘",
        "VERY BUSY":"매우 바빠",

        "HELLO":"안녕",
        "STILL STARVING HAHA":"아직도 굶주리고 있어 하하",

        "HELLO AGAIN INTERLOPER":"다시 안녕, 침입자",
        "I HOPE YOU HAVE EATEN WELL":"네가 잘 먹고 지냈기를 바라",
        "I HAVE FORGOTTEN WHAT NOT BEING HUNGRY FEELS LIKE":"배고프지 않다는 게 어떤 느낌인지 잊어버렸어",

        "THE VOID IS FASCINATING!":"공허는 정말 흥미로워!",
        "THERE USED TO BE A LOT MORE THERE":"예전에는 그곳에 훨씬 많은 것이 있었어",
        "I WONDER WHERE IT ALL WENT":"그 모든 것이 어디로 갔는지 궁금해",

        "I SAW YOU VISITED THE DULL VESSEL":"네가 흐릿한 함선에 다녀온 걸 봤어",
        "IF IT SEEMED EMPTY THAT IS BECAUSE THE FURNITURE THOUGHTFORMS WERE CONSUMED":"비어 보였다면 가구 사고형상들이 먹혀 버렸기 때문이야",
        "SORRY":"미안",
        "WE CAN FIX IT LATER":"나중에 고칠 수 있어",

        "WHAT A SHAME THE EMBASSY IS INCOHERENT":"대사관이 불일치 상태라니 정말 안타까워",
        "I LIKED THAT PLACE":"난 그곳이 좋았어",
        "ONCE THE FUEL SITUATION IS RESOLVED...":"연료 문제가 해결되면...",
        "MAYBE WE CAN FIX IT":"어쩌면 고칠 수 있을 거야",

        "IS THE STRANGER STILL RUNNING AMOK IN HERE":"그 낯선 자가 아직도 여기서 날뛰고 있어?",
        "PLEASE MAKE SURE IT DOES NOT COME TO MY SPACE":"그것이 내 공간으로 오지 않게 해 줘",

        "INTERLOPER! GREAT GAZE!":"침입자! 위대한 시선이여!",
        "YOU HAVE DONE IT! THE COLUMN IS WORKING":"해냈어! 기둥이 작동하고 있어",
        "COME, TALK WITH ME FOR A MOMENT":"와서 잠깐 나와 이야기해 줘",

        "REPAIRS ARE CONTINUING APACE":"수리는 순조롭게 계속되고 있어",
        "NOTHING TO SHARE YET":"아직 공유할 것은 없어",
        
        "HAVE YOU SEEN YOUR 'VELZIE' LATELY?":"최근에 네 '벨지'를 본 적 있어?",
        "IT STILL HAS NOT APPEARED TO ME":"내게는 아직 그런 것이 나타나지 않았어",

        "I HAVE GOOD NEWS FOR YOU!":"네게 좋은 소식이 있어!",

        "GREAT GAZE UPON US AGAIN!":"위대한 시선이 다시 우리에게 향했어!",
        "I HAVE NEWS FOR THE STATE OF REPAIRS!":"수리 상태에 대한 소식이 있어!",

        "INTERLOPER...":"침입자...",
        "THERE IS MORE FOR YOU TO SEE AT THE EMBASSY...":"대사관에서 네가 더 볼 것이 있어...",

        "WHAT WAS IT YOU SAW IN THE CACHE?":"캐시에서 네가 본 것은 뭐였어?",

        "YES, I KNOW, INTERLOPER":"그래, 알고 있어, 침입자",
        "DO NOT SHOVE IT IN MY FACE":"그걸 내 앞에 들이밀지 마",
        "WE WILL DEAL WITH IT IN TIME":"때가 되면 처리할 거야",

        "THE STRANGEST THING HAPPENED!": "아주 이상한 일이 일어났어!",
        "COME TALK!": "와서 이야기해!",
    }, 
    entityDescriptions: {
        "funfriend": cor_kr.entity_menu['funfriend'].desc,
        "gate::hello": `::연결 사고형상
    ::목적지::'저차원 사고공간';'외부 계층'`
    }
}


// === 대사 === //
    // see everystuff.js for firstvisit dialogue
    

// == MOTH == //

env.localization.page["hub"].dialogues.mthlocalr = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        펀프렌드에 대해<+>funfriend
            SHOWIF::[['hub__funfriend-fuelthanks']]
        문에 대해<+>gates
            SHOWIF::[['visited_localorbit']]
        아무것도 아니야<+>CHANGE::++moth
            FAKEEND::(뒤로)
`) 
env.localization.page["hub"].dialogues.mthlocalfunr = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        태도<+>ffdemeanor
            SHOWIF::['ep1_fed', false]
        연료 상황<+>fffuel
            SHOWIF::[['hub__funfriend-fuelthanks'], ['ep1_fed', false]]
        서명<+>ffsignature
            SHOWIF::[['hub__funfriend-signatureq']]
        펀프렌드는 됐어<+>loop
            FAKEEND::(뒤로)
`)
env.localization.page.hub.dialogues.mthlocalfunr.scannedContainer = (check = true)=>{
    try {
        if(flags.detectedEntities['..__OUR_DULL_VESSEL__..'].entities.container.scanned) {
            return check == true
        } else {
            return check == false
        }
    } catch(e) {
        return check == false
    }
}
env.localization.page["hub"].dialogues["mth++hub"] = generateDialogueObject(`
start
    self
        이 사고공간에 대해 질문이 있어

    moth
        그래, 나도 몇 가지 궁금한 게 있어
        네가 뭘 묻는지 보자
    
    RESPOBJ::mthlocalr
    
gates
    self
        저 문들은 뭐야?
    
    moth
        대충 말하면 그냥 연결용 사고형상이야. 특별한 건 없어
        그런데 "문"이라는 설명이 좀 낯설긴 하지
        너희 문화에서는 다른 의미가 있을지도 몰라. 너희 성간 관문도 "문"이라고 부르잖아
        그래서 일부러 그런 이름을 붙였다고 볼 수 있어
        기억 저장용 구조라면, 진입점을 그렇게 표시하는 것도 말은 돼
    
    RESPOBJ::mthlocalr

loop
    self
        더 물어볼 건 없어
        
    RESPOBJ::mthlocalr

funfriend
    self
        이 "펀프렌드"에 대해...
    RESPOBJ::mthlocalfunr

ffdemeanor
    self
        우리가 어떤 존재인지 아는데도 이상할 정도로 친절해
    
    moth
        응, 나도 좀 이상하다고 생각했어
        아마 그렇게 설계된 거겠지. 작고 친절한 안내자 같은 느낌으로
        아니면 인증 계층이 분리된 이상, 우리를 내쫓을 수 없어서 그럴 수도 있고
        그래도 내가 저 바닷속에서 굶주리고 있었는데 누가 구하러 왔다면 나도 꽤 다정했을 거야
        그러니까 연료를 구할 때까지는 쟤도 우리에게 친절할 수밖에 없을지도 몰라
        어쨌든 제대로 돕기 전에 이 안에서 쓸 수 있는 건 다 찾아보자
        그게 유일한 기회일 수도 있어

    RESPOBJ::mthlocalfunr

fffuel
    self
        연료는 어떻게 해야 하지?

    moth
        글쎄... 가능한 걸 찾을 때까지는 급유를 미뤄 두는 편이 좋겠어
        지금은 전체적으로 꽤 안정돼 보이지만, 오베스크 기술은 배고프면 이상하게 굴기 시작하니까
        인증 계층 같은 무언가와 부딪히게 되면 오히려 도움이 될 수도 있고
        그래도 결국 먹이를 줘야 한다면,
        이곳에서 곧 큰 구리 배관 쪽에 접근할 수 있을 거야. 펀프렌드가 방법을 알려 준다면 쓸 수 있겠지
            SHOWIF::[['EXEC::env.localization.page.hub.dialogues.mthlocalfunr.scannedContainer(false)']]
        우리 컨테이너 안에 있는 걸 쓸 수도 있을 거야. 금속처럼 들리고, 아키제트의 함선에 있던 큰 것들과 닮았으니까
            SHOWIF::[['EXEC::env.localization.page.hub.dialogues.mthlocalfunr.scannedContainer(true)']]
        
    RESPOBJ::mthlocalfunr

ffsignature
    self
        왜 내게 서명이 없지?

    moth
        솔직히 왜 펀프렌드가 그걸 못 보는지는 모르겠어
        내가 알기로 대부분의 사고기계에는 인증용 서명이 있거든
        아마 특정한 형식을 찾고 있는 걸 거야. 네 연결 장치가 비유기물이라서 그럴지도 모르고

    RESPOBJ::mthlocalfunr

`)


// == FUNFRIEND == //

env.localization.page["hub"].dialogues.hubBuddyResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self

        금속 컨테이너<+>ep0_container
            SHOWONCE::
            SHOWIF::[["hub__funfriend-fuelthanks", true],["exm|dullvessel|container"],["ep0_epilogue", "started"],["ep1_fed", false]]

        침입자?<+>interloperq
            SHOWONCE::
            SHOWIF::[['ep1_fed', false]]

        연료?<+>fuelq
            SHOWONCE::  
            SHOWIF::[["hub__funfriend-kickoutq"], ['ep1_fed', false]]
        
        왜 구리야?<+>copperq
            SHOWONCE::  
            SHOWIF::[["hub__funfriend-fuelq"], ['ep1_fed', false]]

        필수 금속?<+>essentialmetalq
            SHOWONCE::  
            SHOWIF::[["hub__funfriend-copperq"], ['ep1_fed', false]]

        목적?<+>purposeq
            SHOWONCE::

        서명?<+>signatureq
            SHOWONCE::

        이상한 활동?<+>strangeactivity
            SHOWONCE::
            SHOWIF::[['interview1__firstchat-behonest']]

        문이 더 생겼어?<+>moregates
            SHOWONCE::
            SHOWIF::[['visited_localorbit'], ["ENV!!ep2", false]]

        계속<+>END
`),
env.localization.page["hub"].dialogues["funfriend"] = generateDialogueObject(`
start
    funfriend
        안녕, 침입자
            SHOWIF::[["hub__funfriend-start"]]
        오, 안녕!
            SHOWONCE::
        네가 무엇을 보았는지 알고 있어! 그래서 네가 온 거겠지!
            SHOWONCE::
        인증 계층은 분리되어 있어! 정말 슬픈 일이야!
            SHOWONCE::
        나는 매우 바빠! 그래도 어서 와, 침입자!
            SHOWONCE::
        문제없어! 이야기하자!
            SHOWONCE::

    RESPOBJ::hubBuddyResponses

loop
    funfriend
        무엇을 도와줄까?

    RESPOBJ::hubBuddyResponses

interloperq
    self
        "침입자"라는 건 무슨 뜻이야?

    funfriend
        너는 침입자야!
        어떤 낯선 연결이 내 안으로 들어왔어
        그런데 너는 파괴적이지 않고, 아주 흥미로워
        그래서 너를 그렇게 부르는 거야!

    RESPONSES::self
        나를 내쫓을 거야?<+>kickoutq

kickoutq

    self
        나를 내쫓을 거야?

    funfriend
        아니! 그건 내가 할 일이 아니야
        게다가 지금은 그럴 수도 없어
        나는 이 공간을 유지하고 안내하는 사고형상이야
        인증 계층이 사라진 뒤로는 더 많은 일이 꼬였어
        그래도 너는 여기까지 왔고, 아직 파괴적인 행동은 하지 않았어
        그러니까 당장은 대화할 수 있어
        필요한 것을 묻고, 가능한 것을 찾아 줘

    RESPOBJ::hubBuddyResponses

fuelq
    self
        네 연료는 뭐야? 도울 수 있나?

    funfriend
        내 연료는 특별한 재료야
        하하하하하하!
        금속!
        나는 아주 조금만 있으면 돼
        특히 좋은 전도성 금속이면 더 좋아
        곧 접근할 수 있는 곳에 있을지도 몰라
        네가 도와준다면 정말 고마울 거야
    moth
        이 장치에게 구리가 연료라는 건 좀 이상하지만
        일단은 구리가 필요하다고 받아들이자

    RESPONSES::self
        도와줄게<+>fuelthanks

fuelthanks
    self
        곧 구리를 가져다줄게
    funfriend
        고마워!
        나는 네 친절을 기억할 거야

    RESPOBJ::hubBuddyResponses

copperq
    self
        왜 하필 구리야?
    funfriend
        구리는 이 장치에 잘 맞아
        전도성이 좋고 다루기 쉬워
        아주 순수할 필요는 없어
        충분한 양이면 내가 처리할 수 있어

    RESPOBJ::hubBuddyResponses


essentialmetalq

    self
        필수 금속이라는 건 뭐야?

    funfriend
        특정한 금속이 반드시 필요하다는 뜻이야
        아무 물질이나 넣을 수는 없어
        이 공간은 아직 손상되어 있고
        잘못된 재료는 더 큰 문제를 만들 수 있어
        그래서 나는 구리 같은 안정적인 금속을 원해
        그래야 사고공간의 연결을 유지할 수 있어
        아주 어렵지는 않을 거야
        다만 너무 오래 기다리면 좋지 않아
        나는 아직 굶주려 있으니까

    RESPOBJ::hubBuddyResponses

purposeq
    self
        네 목적은 뭐야?
    funfriend
        나는 방문자를 맞이하고 안내하기 위해 만들어졌어
        이 허브의 연결을 설명하고
        손상된 영역으로 가는 길을 정리하고
        필요한 경우 경고도 해
        원래는 더 많은 기능이 있었지만
        지금은 많은 부분이 닫혀 있거나 망가져 있어

    RESPOBJ::hubBuddyResponses

signatureq
    self
        왜 내 서명이 보이지 않아?

    funfriend
        너에게서 익숙한 인증 서명이 보이지 않아
        그래서 너를 정상적인 방문자로 분류할 수 없어
        하지만 네가 완전히 외부의 무언가인 것도 아니야
        이상한 상태야!
        아주 흥미로운 상태지!
        지금은 침입자로 표시할 수밖에 없어
            SHOWIF::[["hub__funfriend-fuelthanks", false], ['ep1_fed', false]]
        네가 도와준다면 이 상태를 더 잘 이해할 수 있을지도 몰라
            SHOWIF::[["hub__funfriend-fuelthanks"], ['ep1_fed', false]]
        그래도 대화는 계속할 수 있어

    RESPOBJ::hubBuddyResponses

strangeactivity
    self
        이곳에서 이상한 활동을 봤어
        뭔가 움직이고 있어

    funfriend
        나도 감지하고 있어
        손상된 영역들이 다시 반응하기 시작했어
        좋은 신호일 수도 있고
        나쁜 신호일 수도 있어
        아직 확실하지 않아
        네가 본 것을 계속 확인해 줘
        연료가 있으면 내가 더 정확히 도울 수 있을 거야
            SHOWIF::[["hub__funfriend-fuelthanks"]]
        연료가 없으면 내가 확인할 수 있는 범위가 제한돼
            SHOWIF::[["hub__funfriend-fuelthanks", false]]
        그래도 조심해서 움직여

    RESPOBJ::hubBuddyResponses

ep0_container
    self
        흐릿한 함선에서 금속 컨테이너를 봤어
        그걸 연료로 쓸 수 있나?
    
    funfriend
        가능할지도 몰라!
        그 안의 금속이 안정적이라면 충분히 쓸 수 있어
        하지만 함선의 구조물이라면 조심해야 해
        필요한 부품일 수도 있으니까
        그래도 지금은 선택지가 많지 않아
        네가 확인해 보면 알 수 있을 거야
        가져올 수 있다면 가져와 줘
    
    moth
        그 컨테이너가 정말 금속이면 도움이 되겠네
        그래도 함선에 필요한 물건일 수 있으니 확인은 해야 해
        일단 펀프렌드가 반응하는 걸 보면 쓸 수는 있나 봐
            EXEC::change('ep0_epilogue', 'done')
    
    RESPONSES::self
        펀프렌드는 됐어<+>loop

moregates
    self
        문이 더 나타났어
    
    funfriend
        좋아!
        연결이 조금씩 돌아오고 있다는 뜻이야
        아직 모두 안정적이지는 않아
        하지만 더 많은 기억에 접근할 수 있게 됐어
        조심해서 들어가
        그리고 이상한 것이 보이면 다시 알려 줘
    
    RESPOBJ::hubBuddyResponses
`)



getLocalizationForPage(true)




