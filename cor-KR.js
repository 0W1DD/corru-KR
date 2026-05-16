/*/ cor-KR - corru.observer를 위한 한글 로컬라이제이션 모드 /*/

env.localization = {
   dialogues: {},
   definitions: {},
    strings: {},
    entityDescriptions: {},
   page: {}
}

cor_kr = {
    baseUrl: (() => {
        const currentSrc = document.currentScript && document.currentScript.src ? document.currentScript.src : "";
        if (currentSrc) {
            return currentSrc.replace(/[^/]*$/, "");
        }
        // Fallback: set your repository raw URL here if needed.
        return "https://raw.githubusercontent.com/OW1DD/corru-KR/main/";
    })(),

    // 번역 처리
    processStringTranslation: function(text) {
        if (!text) return text;
        return env.localization.strings[text] || text;
    },
    
    // 리소스 로드
    list: {
        basement: null,
        entityMenu: null,
        everystuff: null,
    },

    initList: function() {
        cor_kr.list.basement = cor_kr.baseUrl + "localization/basement.js";
        cor_kr.list.entityMenu = cor_kr.baseUrl + "localization/entity-menu.js";
        cor_kr.list.everystuff = cor_kr.baseUrl + "localization/everystuff.js";
    },
    
    updateResources: function () {
        let listArray = [
            cor_kr.list.everystuff,
            cor_kr.list.entityMenu,
            cor_kr.list.basement
        ];
        
        if (listArray.length > 0) {
            return addResources(listArray);
        }
    }
};

console.log("%c[cor-KR] 한글 로컬라이제이션 로드됨", "color: #4CAF50; font-weight: bold;");

// 리소스 업데이트 시작
cor_kr.initList();
cor_kr.updateResources();
