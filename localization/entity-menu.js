// cor-KR 엔티티 메뉴 번역 - entity-menu.js
// 게임의 객체/엔티티 설명

env.localization.entityDescriptions = {
    // 기본 엔티티 예제
    'default_entity': {
        'name': '알려지지 않은 존재물',
        'desc': '무엇인지 알 수 없는 것입니다.'
    },
    'observation': {
        'name': '관찰',
        'desc': '주변을 둘러봅니다.'
    },
    'examine': {
        'name': '조사',
        'desc': '자세히 살펴봅니다.'
    },
};

if (typeof cor_kr !== 'undefined') {
    cor_kr.entity_menu = env.localization.entityDescriptions;
}

console.log('%c[cor-KR] 엔티티 메뉴 번역 로드됨', 'color: #2196F3; font-weight: bold;');