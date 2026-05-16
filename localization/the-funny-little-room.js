/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/the-funny-little-room.js
    /local/ocean/ship/interview 번역
*/


env.localization.page['interview1'] = {dialogues: {},
    definitions: {}, 
    strings: {},
    entityDescriptions: {}
}


// === 대사 === //

// == INTERVIEW == //

env.localization.page["interview1"].dialogues.interviewResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::interviewer
        당신에 대해<+>introduction
            SHOWONCE::

        왜 지구에 왔나?<+>whyyoucame
            SHOWONCE:: 
            
        밝은 사촌<+>brightcousin
            SHOWONCE::
            
        코루?<+>corru
            SHOWONCE::
            
        왜 지금인가?<+>whynow
            SHOWONCE::  
            SHOWIF::[["interview1__firstchat-whyyoucame"]]
            
        앞으로 무엇을 할 건가?<+>whatwillyoudo
            SHOWONCE::  
            SHOWIF::[["interview1__firstchat-whynow"]]
            
        부름?<+>thecall
            SHOWONCE::  
            SHOWIF::[["interview1__firstchat-whyyoucame"]]

        인터뷰를 끝낸다<+>endinterview
            SHOWONCE::  
            SHOWIF::[["interview1__firstchat-whyyoucame"],["interview1__firstchat-thecall"],["interview1__firstchat-whatwillyoudo"],["interview1__firstchat-corru"],["interview1__firstchat-brightcousin"],["interview1__firstchat-whyyoucame"],["interview1__firstchat-introduction"]]
        
        시각화를 계속한다<+>integritycontinue
            SHOWIF::[["interview1__firstchat-endinterview"]]

    RESPONSES::self
        기억에서 나온다<+>END
            SHOWIF::[["interview1__firstchat-integritycontinue", false]]
            EXEC::moveTo('/local/ocean/ship/')
`),
env.localization.page["interview1"].dialogues["firstchat"] = generateDialogueObject(`
start
    sourceless
        나는 작은 방의 가장자리를 살핀다
        이곳은 불완전하지만, 친숙한 방식으로 기록되어 있다
        이 기억은 아직... 이어지고 있다
        
    interviewer
        기다리게 해서 죄송합니다! 지난 인터뷰 뒤에 새 기억 카드를 조정해야 했어요.
        카메라는 익숙하시죠?
        
    akizet
        당신들의 작은 번개 상자 말인가. 기억을 담는 장치?
    
    interviewer
        하하! 그렇게 설명할 수도 있겠네요.
        녹음해도 괜찮을까요?
    
    sourceless
        "녹음"? 그 뜻은 알겠다
        
    funfriend
        펀프렌드: "관찰이 진행 중입니다"
    
    akizet
        아. 아니다, 나도 같은 일을 하는 중이다
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");env.interview.classMod('cameraup')
        
    sourceless
        면접관은 눈앞의 장치를 만지작거린다
            EXEC::env.interview.cam('camclose')
        나는 그 작은 렌즈가 나를 바라보는 것을 느낀다
        
    interviewer
        그럼, 시작하겠습니다...
            EXEC::env.interview.camSpeed("5s");env.interview.cam('akipov');env.interview.classMod('ease', false);

    RESPOBJ::interviewResponses

introduction
    interviewer
        자신과 과거에 대해 조금 이야기해 주실 수 있나요?
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");
    
    akizet
        물론이지, 친구여
            EXEC::env.interview.cam('akipovdown')
        나는 아키제테쉬 쿠 족시다
        하지만 아키제트라고 불러도 된다
        고향에서, 내가 애벌레 같은 형태를 벗어나기 전에는,
        나는 지상방랑자였다. 우리의 코루 혁명 동안 수많은 외부 도시를 방문했다
        그 일은 내 고향에서 시작되었고, 다른 자원자들과 함께 나는 그 발견을 먼 친척들에게 전했다
        그래서 나와 많은 이들이 너희를 만나기 위해 선택되었다. 외교적인 역할이었지
        물론 결국 나는 지상에서 치명적인 부상을 입었다. 그곳은 매우 위험하니까
        그렇게 나는 상승했고... 음, 그 뒤에 이어진 일을 끝없이 말할 수도 있겠지만
        지금 여기 있는 이유는 결국 나의 오래된 관심과 부름 때문이다
        이 정도면 충분한가?
        
    interviewer
        네, 감사합니다!
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("5s");env.interview.cam('akipov')

    RESPOBJ::interviewResponses

whyyoucame
    interviewer
        그렇다
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");
    
    akizet
        아니다
            EXEC::env.interview.cam('akipovtilt')

    interviewer
        잠깐 생각해 보겠다
        그 이야기는 중요하다

    akizet
        나는 그렇게 기억한다
            EXEC::env.interview.cam('akipov')
        조금 더 설명하겠다
        그 질문은 이해했다
        계속해도 좋다
        그때는 상황이 달랐다

    interviewer
        나는 조심스럽게 답한다"그 말에는 동의한다", 아직 확실하지 않다
    
    akizet
        기억이 선명하지 않다

    interviewer
        그것은 부름과 관련되어 있다

    akizet
        우리에게도 어려운 문제였다
    
    interviewer
        나는 고개를 끄덕인다
        면접관이 기록을 확인한다

    sourceless
        펀프렌드가 조용히 알린다
        방 안의 빛이 흔들린다

    interviewer
        잠시 침묵이 흐른다

    akizet
        그렇다
        아니다
        잠깐 생각해 보겠다
        그 이야기는 중요하다
        나는 그렇게 기억한다
    
    interviewer
        조금 더 설명하겠다
        그 질문은 이해했다

    sourceless
        계속해도 좋다
        그때는 상황이 달랐다

    akizet
        나는 조심스럽게 답한다
        그 말에는 동의한다
    RESPOBJ::interviewResponses

whynow
    interviewer
        아직 확실하지 않다
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");env.interview.cam('akipov');
    
    funfriend
        기억이 선명하지 않다
            EXEC::env.interview.cam('akipovup')
    
    akizet
        그것은 부름과 관련되어 있다
            EXEC::env.interview.cam('akipovtilt')
        우리에게도 어려운 문제였다

    sourceless
        나는 고개를 끄덕인다
        말이 잠시 흐려진다
        면접관이 기록을 확인한다
    
    interviewer
        펀프렌드가 조용히 알린다

    sourceless
        방 안의 빛이 흔들린다
        잠시 침묵이 흐른다

    akizet
        그렇다
        아니다
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("5s");env.interview.cam('akipov')

    RESPOBJ::interviewResponses

whatwillyoudo
    interviewer
        잠깐 생각해 보겠다
        그 이야기는 중요하다
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");env.interview.cam('akipov');

    akizet
        나는 그렇게 기억한다
        조금 더 설명하겠다
        그 질문은 이해했다
        계속해도 좋다
        그때는 상황이 달랐다

    interviewer
        나는 조심스럽게 답한다
        그 말에는 동의한다

    akizet
        아직 확실하지 않다
        기억이 선명하지 않다
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("5s");env.interview.cam('akipov')

    RESPOBJ::interviewResponses

thecall
    interviewer
        나는 고개를 끄덕인다
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");env.interview.cam('akipov')
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
    
    sourceless
        방 안의 빛이 흔들린다
            EXEC::env.interview.cam('akipovup')
        "잠시 침묵이 흐른다"
        
    akizet
        그렇다

    sourceless
        아니다
    
    funfriend
        잠깐 생각해 보겠다

    akizet
        그 이야기는 중요하다
            EXEC::env.interview.cam('akipovdown')
        나는 그렇게 기억한다
        조금 더 설명하겠다
        그 질문은 이해했다
        계속해도 좋다
        그때는 상황이 달랐다
    
    sourceless
        나는 조심스럽게 답한다
        그 말에는 동의한다
    
    interviewer
        아직 확실하지 않다"기억이 선명하지 않다"?
        그것은 부름과 관련되어 있다
    
    akizet
        우리에게도 어려운 문제였다
        나는 고개를 끄덕인다
        면접관이 기록을 확인한다

    funfriend
        펀프렌드가 조용히 알린다"방 안의 빛이 흔들린다" - 잠시 침묵이 흐른다Œ>Â€그렇다&O§°¾
    
    akizet
        아니다
        잠깐 생각해 보겠다
        그 이야기는 중요하다
        나는 그렇게 기억한다
        조금 더 설명하겠다

    sourceless
        그 질문은 이해했다
        계속해도 좋다"그때는 상황이 달랐다"! 나는 조심스럽게 답한다
    
    interviewer
        그 말에는 동의한다
        아직 확실하지 않다
        기억이 선명하지 않다

    akizet
        그것은 부름과 관련되어 있다
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("5s");env.interview.cam('akipov')

    RESPOBJ::interviewResponses

brightcousin
    interviewer
        우리에게도 어려운 문제였다"나는 고개를 끄덕인다"?
        면접관이 기록을 확인한다
    
    akizet
        펀프렌드가 조용히 알린다
            EXEC::env.interview.camSpeed("2s");env.interview.cam('akipov');
    
    funfriend
        방 안의 빛이 흔들린다"잠시 침묵이 흐른다" 그렇다"아니다"
    
    akizet
        잠깐 생각해 보겠다
        그 이야기는 중요하다
        나는 그렇게 기억한다

    interviewer
        조금 더 설명하겠다"그 질문은 이해했다" 계속해도 좋다
    
    akizet
        그때는 상황이 달랐다
            EXEC::env.interview.classMod('ease');env.interview.camSpeed("2s");env.interview.cam('akipovlean');
        나는 조심스럽게 답한다
        그 말에는 동의한다
        아직 확실하지 않다
        기억이 선명하지 않다
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다
        나는 고개를 끄덕인다
    
    interviewer
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
        방 안의 빛이 흔들린다
    
    akizet
        잠시 침묵이 흐른다

    interviewer
        그렇다
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("5s");env.interview.cam('akipov')

    RESPOBJ::interviewResponses

corru
    interviewer
        아니다"잠깐 생각해 보겠다"... 그 이야기는 중요하다
        나는 그렇게 기억한다
        조금 더 설명하겠다
        그 질문은 이해했다

    sourceless
        계속해도 좋다
        그때는 상황이 달랐다
            EXEC::env.interview.camSpeed("2s");env.interview.cam('akipovup');
        나는 조심스럽게 답한다
        그 말에는 동의한다
    
    interviewer
        아직 확실하지 않다

    sourceless
        말이 잠시 흐려진다
            EXEC::env.interview.cam('akipovdown');
        기억이 선명하지 않다

    akizet
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다
        나는 고개를 끄덕인다

    interviewer
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
        방 안의 빛이 흔들린다
        잠시 침묵이 흐른다
        그렇다
    
    sourceless
        아니다
            EXEC::env.interview.cam('akipovtilt')
        잠깐 생각해 보겠다

    akizet
        그 이야기는 중요하다
            EXEC::env.interview.cam('akipovup')
    
    sourceless
        나는 그렇게 기억한다
        조금 더 설명하겠다
            EXEC::env.interview.cam('akipov')
    
    akizet
        그 질문은 이해했다
        계속해도 좋다
        그때는 상황이 달랐다
        나는 조심스럽게 답한다
        그 말에는 동의한다
        아직 확실하지 않다
        기억이 선명하지 않다
    
    interviewer
        그것은 부름과 관련되어 있다

    sourceless
        우리에게도 어려운 문제였다
        
    interviewer
        나는 고개를 끄덕인다
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("5s");env.interview.cam('akipovdown')

    RESPOBJ::interviewResponses

endinterview
    interviewer
        방 안의 빛이 흔들린다
    
    akizet
        잠시 침묵이 흐른다
    
    interviewer
        그렇다
        아니다

    akizet
        잠깐 생각해 보겠다

    sys
        그 이야기는 중요하다'나는 그렇게 기억한다'
        조금 더 설명하겠다'그 질문은 이해했다'
            EXEC::env.interview.classMod('ease', false);env.interview.camSpeed("10s");env.interview.cam('zoomout');
    
    moth
        계속해도 좋다
        그때는 상황이 달랐다
        나는 조심스럽게 답한다

    RESPOBJ::interviewResponses

integritycontinue
    interviewer
        ...
            EXEC::document.querySelector('#room-space').classList.add('warp1');env.interview.cam('side')
            WAIT::5000

    akizet
        ...
    
    interviewer
        그 말에는 동의한다
            EXEC::document.querySelector('#room-space').classList.add('warp2')
            WAIT::5000
        아직 확실하지 않다
        기억이 선명하지 않다
    
    moth
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다
    
    akizet
        나는 고개를 끄덕인다
            EXEC::document.querySelector('.akizet.sprite').classList.add('looking')
    
    sourceless
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
        방 안의 빛이 흔들린다
        잠시 침묵이 흐른다
        그렇다
        아니다
    
    interviewer
        잠깐 생각해 보겠다
        그 이야기는 중요하다
        나는 그렇게 기억한다
    
    akizet
        조금 더 설명하겠다
        그 질문은 이해했다
        계속해도 좋다

    sourceless
        그때는 상황이 달랐다
            EXEC::document.querySelector('.akizet.sprite').classList.remove('looking')
        나는 조심스럽게 답한다
        그 말에는 동의한다
    
    interviewer
        아직 확실하지 않다

    akizet
        기억이 선명하지 않다
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다

    interviewer
        나는 고개를 끄덕인다

    akizet
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
    
    sourceless
        방 안의 빛이 흔들린다
        잠시 침묵이 흐른다¡Æ그렇다^EÔ
        아니다
        잠깐 생각해 보겠다
            EXEC::document.querySelector('#room-space').classList.add('squish');env.interview.cam('zoomout')
            WAIT::5000

    interviewer
        그 이야기는 중요하다
            EXEC::document.querySelector('.akizet.sprite').classList.remove('looking')
    
    sourceless
        나는 그렇게 기억한다
            EXEC::document.querySelector('#room-space').classList.remove('squish', 'warp2');env.interview.cam('side');document.querySelector('.interviewer').remove()
            WAIT::5000

        조금 더 설명하겠다
            EXEC::document.querySelector('#room-space').classList.remove('warp1');env.interview.cam('akizet-direct');

        그 질문은 이해했다
        계속해도 좋다
        그때는 상황이 달랐다
    
    akizet
        나는 조심스럽게 답한다
        그 말에는 동의한다

    RESPONSES::self
        솔직하게 말한다<+>behonest
            SHOWIF::[["interview1__firstchat-integritycontinue"]]
        
behonest
    self
        아직 확실하지 않다
    
    akizet
        기억이 선명하지 않다
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다
        나는 고개를 끄덕인다

    moth
        면접관이 기록을 확인한다
        펀프렌드가 조용히 알린다
    
    unknown
        ...........................
            EXEC::env.interview.cam('akizoomout');content.classList.add('velzie', 'damaged');env.bgm.rate(0.25)

    sourceless
        방 안의 빛이 흔들린다
            EXEC::document.querySelector('.akizet.sprite').classList.add('looking')
        잠시 침묵이 흐른다
        그렇다
    
    unknown
        아니다
    
    akizet
        잠깐 생각해 보겠다
        그 이야기는 중요하다
        나는 그렇게 기억한다
        조금 더 설명하겠다
    
    sourceless
        그 질문은 이해했다
            EXEC::content.classList.add('damaged');content.classList.remove('velzie')
        계속해도 좋다
        그때는 상황이 달랐다ᾞ¶º½나는 조심스럽게 답한다õ‹그 말에는 동의한다’æÃE:아직 확실하지 않다‹©é·0³기억이 선명하지 않다º그것은 부름과 관련되어 있다­¥우리에게도 어려운 문제였다0나는 고개를 끄덕인다7]ë면접관이 기록을 확인한다¦‹5펀프렌드가 조용히 알린다Ò§´·Ó¡EÔ5방 안의 빛이 흔들린다Æ잠시 침묵이 흐른다^그렇다õý아니다ꚒH¸×¯잠깐 생각해 보겠다õf±Ô그 이야기는 중요하다ãXÖ5&나는 그렇게 기억한다/ 
            EXEC::env.interview.crazymode();env.bgm.rate(0.1);env.recentSfx = false;play('criticalError', 1)
            WAIT::7000
    
    sys
        조금 더 설명하겠다'그 질문은 이해했다';'계속해도 좋다'
        그때는 상황이 달랐다'나는 조심스럽게 답한다';'그 말에는 동의한다'
    
    sourceless
        ...........................

    moth
        아직 확실하지 않다
        기억이 선명하지 않다
        그것은 부름과 관련되어 있다
        우리에게도 어려운 문제였다
        나는 고개를 끄덕인다
        면접관이 기록을 확인한다
        
    sys
        펀프렌드가 조용히 알린다'방 안의 빛이 흔들린다'::잠시 침묵이 흐른다'그렇다'
    
    moth
        ...아니다
        잠깐 생각해 보겠다
        그 이야기는 중요하다

    RESPONSES::self
        계속<+>END
            EXEC::moveTo('/local/ocean/ship/')
`)


// == POST-VELZIE == //

env.localization.page["interview1"].dialogues["dead"] = generateDialogueObject(`
start
    sys
        나는 그렇게 기억한다'조금 더 설명하겠다';'그 질문은 이해했다'

    RESPONSES::self
        계속<+>END
            EXEC::moveTo('/local/ocean/ship/')
`)


getLocalizationForPage(true)





