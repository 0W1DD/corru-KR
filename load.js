// cor-KR 로더 - corru.observer 한글 로컬라이제이션 모드 로드 스크립트

(function() {
    console.log('%c[cor-KR] 한글 로컬라이제이션 모드 로더 시작...', 'color: #4CAF50; font-weight: bold;');
    
    const loadCorKR = () => {
        const script = document.createElement('script');
        script.src = 'https://corru-kr.github.io/corru-KR/cor-KR.js';
        script.type = 'text/javascript';
        script.async = true;
        
        script.onerror = () => {
            console.error('%c[cor-KR] 로드 실패 - 인터넷 연결을 확인하세요.', 'color: #FF5252; font-weight: bold;');
        };
        
        script.onload = () => {
            console.log('%c[cor-KR] 로드 성공!', 'color: #4CAF50; font-weight: bold;');
        };
        
        document.head.appendChild(script);
    };
    
    // DOM이 준비되면 로드
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCorKR);
    } else {
        loadCorKR();
    }
})();
