/*/ cor-KR - corru.observer를 위한 한글 로컬라이제이션 모드 /*/

env.localization = {
   dialogues: {},
   definitions: {},
    strings: {},
    entityDescriptions: {},
   page: {}
}

cor_kr = {
    // 번역 처리
    processStringTranslation: function(text) {
        if (!text) return text;
        return env.localization.strings[text] || text;
    },
    
    // 리소스 로드
    list: {
        basement: "https://corru-kr.github.io/corru-KR/localization/basement.js",
        entityMenu: "https://corru-kr.github.io/corru-KR/localization/entity-menu.js",
        everystuff: "https://corru-kr.github.io/corru-KR/localization/everystuff.js",
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
cor_kr.updateResources();
