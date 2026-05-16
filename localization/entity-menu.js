/*
    cor-KR - entity menu localization
    cor-RU structure adapted for Korean.
*/

if (typeof cor_kr === "undefined") {
    window.cor_kr = {};
}

cor_kr.entity_menu = {
    "funfriend": {
        name: "펀프렌드",
        desc: "::반응형 사고형태<br>::명시 기능::'시스템 관리';'보조 장치'"
    },
    "dendritic cyst": {
        name: "수지상 낭포",
        desc: "::코러시스트 개체<br>::기능 서명: 컨테이너<br>::노출된 연결 조직 없음"
    },
    "fractalline cyst": {
        name: "프랙탈 낭포",
        desc: "::코러시스트 개체<br>::손상된 기능 서명<br>::노출된 연결 조직 없음"
    },
    "cyst": {
        name: "낭포",
        desc: "::코러시스트 개체<br>::기능 서명 없음<br>::노출된 연결 막 확인됨"
    },
    "cystic column": {
        name: "낭포 기둥",
        desc: "::코러시스트 개체<br>::기능 서명: 낭포 유지 관리<br>::노출된 연결 조직 없음"
    },
    "connection point": {
        name: "연결 지점",
        desc: "::코러시스트 구성 요소<br>::유효한 연결 지점"
    },
    "plastic box": {
        name: "플라스틱 상자",
        desc: "::합성 컨테이너<br>::불활성 금속 포함"
    },
    "empty plastic box": {
        name: "빈 플라스틱 상자",
        desc: "::합성 컨테이너<br>::비어 있음"
    },
    "pistol": {
        name: "권총",
        desc: "::공압식 권총<br>::불법 개조 흔적 확인"
    }
};

cor_kr.getEntityMenuNames = function () {
    const entries = [];
    const keys = Object.keys(cor_kr.entity_menu || {});

    for (let i = 0; i < keys.length; i += 1) {
        const original = keys[i];
        const localized = cor_kr.entity_menu[original].name;
        entries.push([`ENTITY::'${original}'`, `ENTITY::'${localized}'`]);
    }

    const nameMap = Object.fromEntries(entries);
    env.localization.strings = Object.assign(env.localization.strings || {}, nameMap);
    return env.localization.strings;
};

// Keep compatibility with systems that look at entityDescriptions directly.
env.localization.entityDescriptions = Object.assign(
    env.localization.entityDescriptions || {},
    Object.fromEntries(
        Object.keys(cor_kr.entity_menu).map((k) => [k, cor_kr.entity_menu[k].desc])
    )
);

cor_kr.getEntityMenuNames();

console.log("%c[cor-KR] entity menu localization loaded", "color: #2196F3; font-weight: bold;");