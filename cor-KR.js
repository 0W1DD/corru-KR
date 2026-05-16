/*
    cor-KR - corru.observer 한국어 로컬라이제이션 모드 (공식 API V1 기반 최적화)
    
    > cor-KR.js
    메인 로더. 복잡한 커스텀 옵저버를 제거하고 공식 env.localization 시스템을 사용합니다.
*/

// EP1 이후는 미지원...
if ((page && page.path == '/' && !check('TEMP!!sat') && check('ep0_epilogue') && !check('ep1_showmaterials')) || env.ep1 == true) {
    try {
        chatter({
            actor: 'actual_site_error',
            text: "hi! cor-KR is availiable only for ep0<br>안녕하세요! cor-KR은 ep0에서만 사용 가능합니다",
            readout: true
        });
    } catch (e) {}
    throw new Error("hi! cor-KR is availiable only for ep0");
}

// 1. 공식 가이드에 맞춘 로컬라이제이션 스토리지 초기화
env.localization = {
    dialogues: {},
    definitions: {},
    strings: {},
    entityDescriptions: {},
    page: {}
};

let cor_kr = window.cor_kr || {};
cor_kr.baseUrl = "https://cdn.jsdelivr.net/gh/0W1DD/corru-KR@main/";

// 2. 폰트 및 UI 기본 CSS 설정 (기존 유지)
cor_kr.css = `
@font-face {
    font-family: 'cor-kr-font';
    src: url('${cor_kr.baseUrl}fonts/Ycomputer.otf') format('opentype'),
         url('${cor_kr.baseUrl}fonts/Ycomputer.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body,
#dialogue-box .dialogue-text,
#readout .message,
#minireadout .message {
    font-family: 'cor-kr-font', monospace !important;
}
`;

if (!document.querySelector("#cor-kr-css")) {
    const styleEl = document.createElement('style');
    styleEl.id = "cor-kr-css";
    styleEl.appendChild(document.createTextNode(cor_kr.css));
    document.head.appendChild(styleEl);
}

// 3. 리소스 목록 및 업데이트 (기존 로직 유지)
cor_kr.list = {
    everything: cor_kr.baseUrl + "localization/everystuff.js",
    entityMenu: cor_kr.baseUrl + "localization/entity-menu.js",
    page: {
        fbx: cor_kr.baseUrl + "localization/basement.js"
    }
};

cor_kr.updateResources = function (fresh = false) {
    let listArray = [];

    if (fresh == true) {
        listArray.push(cor_kr.list.everything);
        listArray.push(cor_kr.list.entityMenu);
        if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
            listArray.push(cor_kr.list.page[page.dialoguePrefix]);
        }
    } else {
        if (Object.hasOwn(cor_kr.list.page, page.dialoguePrefix)) {
            const url = cor_kr.list.page[page.dialoguePrefix];
            const already = document.querySelectorAll(`script[src="${url}?v=${page.cacheval}"]`).length > 0;
            if (!already) listArray.push(url);
        }
    }

    if (listArray.length != 0) {
        console.log("%c[cor-KR] 번역 리소스 로드 중...", 'color:rgb(76, 175, 80)', listArray);
        return addResources(listArray);
    }
    return Promise.resolve();
};

// 4. 시스템 부트스트랩 및 공식 Observer 적용
cor_kr.initLocalization = function() {
    // 게임 내부 정의 캐시 무효화로 재번역 유도
    page.formedDefinitionStrings = undefined;

    // 현재 페이지 로컬라이제이션 설정 강제 병합
    if (typeof getLocalizationForPage === 'function') {
        getLocalizationForPage(true);
    }

    // 하드코딩된 UI 요소들 수동 초기 번역 (가이드 권장사항 적용)
    const staticUIs = ['#system-menu', '#meta-menu', '#entity-menu', '#advance-notice'];
    staticUIs.forEach(selector => {
        const el = document.querySelector(selector);
        if (el && typeof processTranslation === 'function') {
            processTranslation(el);
        }
    });

    // 화면 전체 즉시 번역 적용
    if (typeof processTranslation === 'function') {
        processTranslation();
    }

    // 5. 가이드에서 제시한 단일 전역 MutationObserver 설정
    if (!env.mutateObserver) {
        env.mutateConfig = { childList: true, subtree: true };
        env.mutateObserver = new MutationObserver(() => {
            if (typeof processTranslation === 'function') {
                processTranslation(); 
            }
        });
        env.mutateObserver.observe(document.body, env.mutateConfig);
        console.log("%c[cor-KR] 공식 MutationObserver 기반 번역 활성화", 'color:rgb(156, 39, 176)');
    }
    
    console.log("%c[cor-KR] 한국어 로컬라이제이션 로드 완료", 'color:rgb(76, 175, 80)');
};

// ============= 실행 =============
let loadPromise = cor_kr.updateResources(true);

if (loadPromise && typeof loadPromise.then === 'function') {
    loadPromise.then(() => {
        cor_kr.initLocalization();
    });
} else {
    setTimeout(() => {
        cor_kr.initLocalization();
    }, 500);
}