/*
    cor-KR - a Korean localization mod for corru.observer;
    see https://github.com/0W1DD/corru-KR for more info

    > load.js
    patches up UI after the localization resources are loaded.
    also lets movement keys work while the keyboard is in Korean input mode.
*/



cor_kr.observer.page.func()
cor_kr.processReadout()
cor_kr.observer.page.observe()

document.addEventListener('corru_resources_added', ()=>{cor_kr.updateResources()})


function stepKey(key) {
    // 대화, 전투, 컷신, 입력 중에는 이동을 막습니다.
    if(
        env.stage.freemove ||
        env.stage.justStepped || 
        body.classList.contains('stage-transition') || 
        body.classList.contains('cull-stage') || 
        body.classList.contains('in-dialogue') || 
        body.classList.contains('in-combat') ||
        body.classList.contains('in-melee') ||
        document.documentElement.classList.contains('cutscene') || 
        document.activeElement.tagName == 'INPUT' ||
        document.activeElement.tagName == 'TEXTAREA'
    ) {
        return
    } else {
        env.stage.justStepped = true
        setTimeout(() => {env.stage.justStepped = false}, 100)
    }

    let homeBox = stageCoordinatesFromId('creature')
    let homePlate = elementAtStageCoordinates(homeBox.x, homeBox.y)
    var targetSquare
    var moving = false
    let closeMenu = true

    // 두벌식 한글 자판에서 W/A/S/D/Q/E/Z 위치에 해당하는 키입니다.
    if (key.toLowerCase() == 'ㅈ') key = 'w'
    else if (key.toLowerCase() == 'ㅁ') key = 'a'
    else if (key.toLowerCase() == 'ㄴ') key = 's'
    else if (key.toLowerCase() == 'ㅇ') key = 'd'
    else if (key.toLowerCase() == 'ㅂ') key = 'q'
    else if (key.toLowerCase() == 'ㄷ') key = 'e'
    else if (key.toLowerCase() == 'ㅋ') key = 'z'

    switch(key.toLowerCase()) {
        // 이동
        case "arrowup":
        case "w":
            moving = "forward"
        break;

        case "arrowleft":
        case "a":
            if(env.pressedKeys.shift) moving = "strafeleft"
            else playerTurn({clockwise: false})
        break;

        case "arrowdown":
        case "s":
            moving = "back"
        break;

        case "arrowright":
        case "d":
            if(env.pressedKeys.shift) moving = "straferight"
            else playerTurn()
        break;	

        case "e":
            // 시점 전환이 허용된 구간에서만 동작합니다.
            if(document.querySelector('#stage-navigator .swap') || check("TEMP!!allowswap")) toggleSwapCam()
        break

        case "q":
            switch(body.getAttribute('quality')) {
                case "regular":
                    setQualityPreference('low')
                break

                case "low":
                    setQualityPreference('regular')
                break
            }
        break;

        case "z":
            if(page.partyMenuEnabled) togglePartyMenu()
            closeMenu = false;
        break;

        default:
            closeMenu = false;
        break;
    }

    // 이동할 때 열려 있는 메뉴를 닫습니다.
    if(body.classList.contains('in-menu') && closeMenu) exitMenu(false)

    if(moving) {
        var modifier = 1;
        if(moving == "back") modifier = -1;

        switch(env.stage.lastMoved) {
            case "up":
                if (moving === "strafeleft") targetSquare = elementAtStageCoordinates(homeBox.x + 1, homeBox.y)
                else if (moving === "straferight") targetSquare = elementAtStageCoordinates(homeBox.x - 1, homeBox.y)
                else targetSquare = elementAtStageCoordinates(homeBox.x, homeBox.y + modifier);
            break

            case "right":
                if (moving === "strafeleft") targetSquare = elementAtStageCoordinates(homeBox.x, homeBox.y - 1);
                else if (moving === "straferight") targetSquare = elementAtStageCoordinates(homeBox.x, homeBox.y + 1);
                else targetSquare = elementAtStageCoordinates(homeBox.x + modifier, homeBox.y);
            break

            case "down":
                if (moving === "strafeleft") targetSquare = elementAtStageCoordinates(homeBox.x - 1, homeBox.y);
                else if (moving === "straferight") targetSquare = elementAtStageCoordinates(homeBox.x + 1, homeBox.y);
                else targetSquare = elementAtStageCoordinates(homeBox.x, homeBox.y - modifier);
            break

            case "left":
                if (moving === "strafeleft") targetSquare = elementAtStageCoordinates(homeBox.x, homeBox.y + 1);
                else if (moving === "straferight") targetSquare = elementAtStageCoordinates(homeBox.x, homeBox.y - 1);
                else targetSquare = elementAtStageCoordinates(homeBox.x - modifier, homeBox.y);
            break
        }
    }
    
    if(targetSquare != undefined) {
        gridMoveTo(homePlate, targetSquare);
        step()
        if(!env.stage.enemyPause) enemyStep()
    }
}

page.formedDefinitionStrings = undefined

