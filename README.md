# cor-KR

`cor-KR`은 [corru.observer](https://corru.observer/)를 위한 한국어 로컬라이제이션 패치 모드입니다.

이 저장소는 [cor-RU](https://github.com/cor-RU/cor-RU)의 로더 구조와 `ENV.LOCALIZATION V1` 사용 방식을 참고해서 한국어 패치 작업을 이어갈 수 있도록 정리했습니다.

**중요: 이 한국어 패치는 러시아팀 번역(cor-RU)을 참고했습니다.**

## 설치

모드 리스트에 아래 URL을 추가하세요.

```text
https://0w1dd.github.io/corru-KR/cor-KR.js
```

## 구성

- `cor-KR.js`: 모드 진입점, CSS, 리소스 로더, 옵저버 설정
- `load.js`: 리소스 로드 후 후처리와 한국어 키보드 이동 보정
- `localization/`: 페이지별 번역 파일

폰트는 별도 파일을 포함하지 않고, 브라우저/운영체제의 기본 한글 폰트 스택을 사용합니다.

## 진행 상황

현재 `basement.js`, `everystuff.js`, `entity-menu.js`에는 기존 한국어 번역을 보존해 두었습니다. 나머지 페이지 파일은 러시아어가 노출되지 않도록 한국어 작업용 스텁으로 정리했으며, 각 페이지별 실제 번역을 계속 채워 넣으면 됩니다.

## 출처

- 원본 게임: [corru.observer](https://corru.observer/)
- 참고 구현 및 번역: [cor-RU](https://github.com/cor-RU/cor-RU)
