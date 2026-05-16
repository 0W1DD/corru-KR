
cor_kr.fancy = {
    observed: 'color:rgb(33, 150, 243)',
    general: 'color:rgb(255, 87, 34)',
    setobserver: 'color:rgb(156, 39, 176)'
};

// 재진입 방지 락 (옵저버 → DOM 수정 → 옵저버 재발화 무한 루프 차단)
cor_kr._locks = { common: false, bodychildren: false, gad: false, dialogue: false, masks: false, page: false };
cor_kr._safeRun = function (name, fn) {
    if (cor_kr._locks[name]) return;
    cor_kr._locks[name] = true;
    try { fn(); } catch (e) { console.warn('[cor-KR] ' + name + ' func error', e); }
    // 마이크로태스크 후 해제 (현재 DOM 수정이 트리거한 옵저버 콜백은 무시됨)
    setTimeout(() => { cor_kr._locks[name] = false; }, 0);
};

// 폰트 CSS
cor_kr.css = `
@font-face {
    font-family: 'NanumSquareNeo';
    src: url('./fonts/NanumSquareNeoTTF-bRg.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'NanumSquareNeo';
    src: url('./fonts/NanumSquareNeoTTF-bBd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'NanumSquareNeo';
    src: url('./fonts/NanumSquareNeoTTF-bEb.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}
body, .main, .main * {
    font-family: 'NanumSquareNeo', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', '돋움', Dotum, Arial, sans-serif !important;
}
`;

cor_kr.observer = {
    common: {
        func: (consolething) => {
            if (consolething) console.log(...consolething);
            getLocalizationForCommon();
        }
    },
    bodychildren: {
        func: (consolething) => {
            if (consolething) console.log(...consolething);
            getLocalizationForBodyChildren();
        }
    },
    gad: {
        func: (consolething) => {
            if (consolething) console.log(...consolething);
            getLocalizationForGad();
        }
    },
    dialogue: {
        func: (consolething) => {
            if (consolething) console.log(...consolething);
            getLocalizationForDialogue();
        }
    },
    masks: {
        func: (consolething) => {
            if (consolething) console.log(...consolething);
            getLocalizationForMasks();
        }
    },
    page: {
        func: (consolething) => {
            cor_kr.observer.page.disconnectChildren && cor_kr.observer.page.disconnectChildren();
            new Promise((resolve) => {
                if (consolething) cor_kr.updateResources();
                resolve(getLocalizationForPage(true));
            }).then(() => {
                // ...existing code...
            });
        },
        observe: () => {
            cor_kr.observer.page.itself.observe(body, { attributes: true, attributeFilter: ['page'] });
            console.log("%cpage observer is set up! - @cor-KR", cor_kr.fancy.setobserver);
        },
        disconnectChildren: () => {
            // page 전환 시 자식 옵저버들을 모두 disconnect 후 재연결 (스테일 노드 누적 방지)
            try { cor_kr.observer.common.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.bodychildren.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.gad.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.dialogue.itself.disconnect(); } catch (e) {}
            try { cor_kr.observer.masks.itself.disconnect(); } catch (e) {}
        }
    }
};

cor_kr.updateResources = function (fresh = false) {
    // ...existing code...
};

// ============= 옵저버 인스턴스 생성 =============

cor_kr.observer.common.itself = new MutationObserver(() => cor_kr._safeRun('common', () => cor_kr.observer.common.func()));
cor_kr.observer.bodychildren.itself = new MutationObserver(() => cor_kr._safeRun('bodychildren', () => cor_kr.observer.bodychildren.func()));
cor_kr.observer.gad.itself = new MutationObserver(() => cor_kr._safeRun('gad', () => cor_kr.observer.gad.func()));
cor_kr.observer.dialogue.itself = new MutationObserver(() => cor_kr._safeRun('dialogue', () => cor_kr.observer.dialogue.func()));
cor_kr.observer.masks.itself = new MutationObserver(() => cor_kr._safeRun('masks', () => cor_kr.observer.masks.func()));
cor_kr.observer.page.itself = new MutationObserver(() => cor_kr._safeRun('page', () => cor_kr.observer.page.func(true)));

// ============= 부트 =============

page.formedDefinitionStrings = undefined;

// page observer 즉시 시작 (페이지 진입 감지)
cor_kr.observer.page.observe();

// 초기 리소스 로드 + 첫 페이지 처리 (한 번만)
cor_kr.updateResources(true);
setTimeout(() => {
    cor_kr._safeRun('page', () => cor_kr.observer.page.func(false));
}, 1500);

console.log("%c[cor-KR] 한국어 로컬라이제이션 로드됨 - cor-RU 구조 기반", cor_kr.fancy.general);
console.log("%c문의/버그: GitHub @0W1DD/corru-KR - @cor-KR", cor_kr.fancy.general);
