/*
    cor-KR - corru.observer 한국어 로컬라이제이션
    러시아팀 번역(cor-RU)을 참고했습니다.

    > localization/everystuff.js
    모든 페이지에서 쓰이는 공통 정의, 문자열, 대사를 모아 둡니다.
*/

env.localization['definitions'] = Object.assign(env.localization['definitions'] || {}, {
    "자트": { "type": "상속된 맥락", "text": "'기술자';'카스트'" },
    "벨": { "type": "상속된 맥락", "text": "'카스트';'손상된 맥락으로 의미 일부 손실'" },
    "티르": { "type": "상속된 맥락", "text": "'카스트';'손상된 맥락으로 의미 일부 손실'" },
    "키브": { "type": "상속된 맥락", "text": "'카스트';'손상된 맥락으로 의미 일부 손실'" },
    "쿠우": { "type": "상속된 맥락", "text": "'카스트';'손상된 맥락으로 의미 일부 손실'" },

    "벨지": { "type": "상속된 맥락", "text": "'신격'" },
    "베일크": { "type": "상속된 맥락", "text": "'지상 생물';'전체 생태계의 기반';'거대하고 끝없음'" },

    "골렘": { "type": "주석", "text": "'부분 번역';'가장 가까운 문화적 등가 표현'" },
    "글라지카": { "type": "번역 실패", "text": "사유:'동등한 내부 의미 없음';'적절한 상속 맥락 없음'::음차 성공" },

    "θ죽음": { "type": "주석", "text": "'변형된 거주 상태를 암시함'" },
    "θ세눈": { "type": "상속된 맥락", "text": "'시간 단위';'벨지의 눈을 도는 회전';'종교적 함의'" },
    "θ눈": { "type": "상속된 맥락", "text": "'시간 단위';'벨지의 눈을 도는 회전';'종교적 함의'" },
    "θ시선": { "type": "상속된 맥락", "text": "'시간 단위';'눈 안에 다수 존재'" },
    "θ깜빡임": { "type": "상속된 맥락", "text": "'시간 단위';'시선 안에 다수 존재'" },
    "θ순간": { "type": "상속된 맥락", "text": "'시간 단위';'깜빡임 안에 다수 존재'" },
});

getLocalizationForPage(true);

env.localization['strings'] = Object.assign(env.localization['strings'] || {}, {
    "akizet": "아키제트",

    "what's up buddy?": "무슨 일이야, 친구?",
    "anything else?": "또 다른 건?",
    "what's up?": "무슨 일이야?",
    "anything else on your mind?": "또 생각나는 거 있어?",

    "it looks like you found an incoherence loop... seen this one before. not gonna get anything useful out of this area": "불일치 루프를 찾은 것 같아... 이런 건 전에도 봤어. 이 구역에서는 쓸 만한 걸 얻기 힘들 거야",
    "about this thoughtform": "이 사고형상에 대해서",

    "'has no unutilized responses'": `'사용하지 않은 응답 없음'`,
    "'has unutilized responses'": `'사용하지 않은 응답 있음'`,
    "'previously utilized response'": `'이미 사용한 응답'`,
    "'response not yet utilized'": `'아직 사용하지 않은 응답'`,
    "'response leads to unused responses'": `'사용하지 않은 응답으로 이어짐'`,
    "'dynamic response'": `'동적 응답'`,
    "end chat": "대화 끝내기",
    "back": "뒤로",

    "greet": "인사하기",
    "enter": "들어가기",

    "'clearing mindspike buffer'; 'no progress will be lost'": "'마인드스파이크 버퍼 정리 중';'진행 상황은 사라지지 않습니다'",
    "NOTICE::'loading resources';'please wait'": "알림::'리소스 불러오는 중';'잠시만 기다려 주세요'",
    "SPATIAL NAVIGATION": "공간 탐색",
    "'additional ACT enabled';'rescan": "'추가 행동 사용 가능';'다시 스캔",

    "attention": "주의",
    "NOTE": "주석",
    "NOTICE": "알림",
    "WARNING": "경고",
    "ALERT": "주의",
    "EXECUTING": "실행 중",
    "ERROR": "오류",
    "ANALYSIS": "분석",
    "NAVIGATING::": "탐색::",

    "confirm": "확인",
    "retract": "취소",
    "proceed": "진행",
    "return": "돌아가기",
    "refresh": "새로고침",
    "reloading": "다시 불러오는 중",
    "skipping ahead...": "앞으로 건너뛰는 중...",

    "internal log buffer cleared after reaching limit (80) due to attached external record device": "연결된 외부 기록 장치 때문에 내부 로그 버퍼가 한도(80)에 도달하여 정리되었습니다",
    "'no coherent data'::SUGGEST::'return to hub'": "'일관된 데이터 없음'::제안::'허브로 돌아가기'",
    "ERROR::'invalid destination';'no coherency';'locating closest coherent position'": "오류::'유효하지 않은 목적지';'응집도 없음';'가장 가까운 일관 위치 탐색 중'",
    "'aborted'": "'중단됨'",
    "'eject'": "'이탈'",
    "'restored partial recent log'": "'최근 로그 일부 복구됨'",
    "'retrace';": "'되짚기';",
    "'refresh';": "'새로고침';",
    "'data overload';'retracing';'last coherent position'": "'데이터 과부하';'되짚는 중';'마지막 일관 위치'",
    "'unprocessable data';'retracing';'last coherent position'": "'처리 불가능한 데이터';'되짚는 중';'마지막 일관 위치'",
    "RECONNECTING__": "재연결__",
    "'clearing mindspike cache';'15 seconds';'refresh to cancel'": "'마인드스파이크 캐시 정리';'15초';'새로고침하면 취소'",
    "'clearing mindspike cache';'in ": "'마인드스파이크 캐시 정리';'",
    " seconds';'refresh to cancel'": "초 후';'새로고침하면 취소'",
    "'clearing mindspike cache';'now'": "'마인드스파이크 캐시 정리';'지금'",
    "'data imported';'packed data format'": "'데이터 가져옴';'압축 데이터 형식'",
    "'data imported';'string data format'": "'데이터 가져옴';'문자열 데이터 형식'",
    "'data exported as file'": "'데이터를 파일로 내보냄'",
    "'data format invalid';'unable to process'": "'잘못된 데이터 형식';'처리 불가'",

    "'default quality';'set to low'": "'기본 품질';'낮음으로 설정'",
    "'default quality';'set to regular'": "'기본 품질';'보통으로 설정'",
    "'interface size';'set to large'": "'인터페이스 크기';'크게 설정'",
    "'interface size';'set to normal'": "'인터페이스 크기';'보통으로 설정'",
    "'reduced intensity alternatives active'": "'저강도 대체 효과 활성화'",
    "'reduced intensity alternatives inactive'": "'저강도 대체 효과 비활성화'",
    "'gameplay disabled'": "'게임플레이 비활성화'",
    "'gameplay enabled'": "'게임플레이 활성화'",

    "1 mod(s) initialized:": "모드 1개 초기화됨:",
    "2 mod(s) initialized:": "모드 2개 초기화됨:",
    "3 mod(s) initialized:": "모드 3개 초기화됨:",
    "4 mod(s) initialized:": "모드 4개 초기화됨:",
    "mod(s) initialized:": "개의 모드 초기화됨:",
    "11 mod(s) initialized:": "모드 11개 초기화됨:",
    "12 mod(s) initialized:": "모드 12개 초기화됨:",
    "13 mod(s) initialized:": "모드 13개 초기화됨:",
    "14 mod(s) initialized:": "모드 14개 초기화됨:",
    "'mods removed';'refresh for clean reinitialization'": "'모드 제거됨';'깨끗하게 다시 초기화하려면 새로고침'",
    "'no mods active';'no change rendered": "'활성 모드 없음';'변경 사항 없음'",

    "1 mod(s) automatically initialized:": "모드 1개 자동 초기화됨:",
    "2 mod(s) automatically initialized:": "모드 2개 자동 초기화됨:",
    "3 mod(s) automatically initialized:": "모드 3개 자동 초기화됨:",
    "4 mod(s) automatically initialized:": "모드 4개 자동 초기화됨:",
    "mod(s) automatically initialized:": "개의 모드 자동 초기화됨:",
    "11 mod(s) automatically initialized:": "모드 11개 자동 초기화됨:",
    "12 mod(s) automatically initialized:": "모드 12개 자동 초기화됨:",
    "13 mod(s) automatically initialized:": "모드 13개 자동 초기화됨:",
    "14 mod(s) automatically initialized:": "모드 14개 자동 초기화됨:",

    "'unsaved changes';'attempt again to forfeit current changes'": "'저장되지 않은 변경 사항';'현재 변경 사항을 포기하려면 다시 시도'",
    "::'prohibitive incoherence'": "::'금지 수준의 불일치'",
    "actual_site_error": "실제_사이트_오류",
    "something actually fucked up (not a part of the story) details are in the log and console": "실제 오류가 발생했습니다(스토리 일부가 아님). 자세한 내용은 로그와 콘솔을 확인하세요",

    "master": "전체",
    "MASTER": "전체",
    "music": "음악",
    "MUSIC": "음악",
    "sfx": "효과음",
    "SFX": "효과음",
    "mindspike data management": "마인드스파이크 데이터 관리",
    "MINDSPIKE DATA MANAGEMENT": "마인드스파이크 데이터 관리",
    "import file": "파일 가져오기",
    "IMPORT FILE": "파일 가져오기",
    "export file": "파일 내보내기",
    "EXPORT FILE": "파일 내보내기",
    "select": "선택",
    "SELECT": "선택",
    "delete": "삭제",
    "DELETE": "삭제",
    "advanced operations": "고급 작업",
    "ADVANCED OPERATIONS": "고급 작업",
    "load neural string": "신경 문자열 불러오기",
    "LOAD NEURAL STRING": "신경 문자열 불러오기",
    "import string": "문자열 가져오기",
    "IMPORT STRING": "문자열 가져오기",
    "modification url list": "모드 URL 목록",
    "MODIFICATION URL LIST": "모드 URL 목록",
    "save list": "목록 저장",
    "SAVE LIST": "목록 저장",
    "Visual Preferences": "시각 설정",
    "General Quality": "전체 품질",
    "low": "낮음",
    "Regular": "보통",
    "Interface Size": "인터페이스 크기",
    "large": "큼",
    "normal": "보통",
    "widescreen adapter": "와이드스크린 어댑터",
    "control preferences": "조작 설정",
    "intensity": "강도",
    "Reduced Intensity": "낮은 강도",
    "Regular Intensity": "기본 강도",
    "Gameplay": "게임플레이",
    "Disable Gameplay": "게임플레이 끄기",
    "Enable Gameplay": "게임플레이 켜기",
    "System Information": "시스템 정보",
    "Mindspike Specifications": "마인드스파이크 사양",
    "Version:": "버전:",
    "Device ID:": "장치 ID:",
    "Installed on:": "설치일:"
});

env.localization.dialogues.mthglobalresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        누구...<+>who
        뭐...<+>what
        왜...<+>why
        이게 다야<+>CHANGE::++moth
            FAKEEND::(뒤로)
`)

env.localization.dialogues["++moth"] = {
    end: mothHasUnreadCheck,
    start: {
        name: "start",
        body: [
            {
                actor: "moth",
                text: "무슨 일이야, 친구?",
                texec: ()=> {return env.pageHasMothComment()}
            },
        ],
        responses: [
            {
                name: "self",
                replies: [
                    {
                        name: ()=>{return processStringTranslation(page.mothChat.startName)},
                        destination: 'EXEC::changeDialogue(page.mothChat.getDest())',
                        showIf: [["EXEC::env.pageHasMothChat()"]],
                        unreadCheck: ()=> checkUnread({destination: "start", arbitrary: true}, page.mothChat.getDest()),
                        class: "changeread",
                    },
                    {
                        name: '물어볼 게 있어',
                        destination: 'CHANGE::++mothglobal',
                        class: "changeread"
                    },
                    {
                        name: "다음엔 뭘 해야 해?",
                        destination: 'whatnext',
                        hideRead: true
                    },
                    {
                        name: '몸이 좀 이상해',
                        showIf: [["netstat|<", 0]],
                        destination: 'CHANGE::++mothfj'
                    },
                    {
                        name: `일로 돌아가자`,
                        destination: 'END',
                        exec: mothHasUnreadCheck
                    }
                ]
            }
        ]
    },
    whatnext: {
        name: "whatnext",
        body: [
            {
                actor: "moth",
                texec: ()=> {return processStringTranslation(env.dialogues.mthglobalresp.whatnext())}
            },
        ],
        responses: [
            {
                name: "self",
                replies: [
                    {
                        name: "알겠어",
                        destination: 'CHANGE::++moth',
                        fakeEnd: "(뒤로)"
                    }
                ]
            }
        ]
    }
}

env.localization.dialogues["++mothglobal"] = generateDialogueObject(`
start
    self
        몇 가지 물어볼 게 있어

    moth
        좋아, 아는 만큼 대답해 볼게

    RESPOBJ::mthglobalresp

loop
    RESPOBJ::mthglobalresp

who
    RESPONSES::self
        너<+>who_you
        아키제테셰<+>who_akizetesche
            SHOWIF::"hub__funfriend-purposeq"
        고든<+>who_gordon
            SHOWIF::[['citystreet__envoy-end']]
        벨지<+>who_velzie
            SHOWIF::[['dullvessel__fixed-how']]
        아무것도 아니야<+>loop
            FAKEEND::(뒤로)

who_you
    self
        너는 누구야?

    moth
        ㅋㅋ
        그래, 근데 진짜로 궁금한 게 있는 거야?

    RESPONSES::self
        아마도<+>loop
            FAKEEND::(뒤로)

who_akizetesche
    self
        아키제테셰가 누구야?

    moth
        초기 접촉기의 오베스크 중에서는 아마 가장 기록이 잘 남은 인물일 거야
        기록에 따르면 그녀는 오베스크를 이곳으로 이끈 물건, 그러니까 "부름"을 조사하는 팀을 이끌었어
        그 주제로 길고 자세한 인터뷰를 계속 남겼고
        첫 접촉 후 몇 년 지나서 그들은 전부 사라졌어
        꽤 섬뜩하지
        이 코러시스트가 이렇게 오래 버틴 것도 말이 안 될 정도고

    RESPONSES::self
        알겠어<+>loop
            FAKEEND::(뒤로)

who_gordon
    self
        고든은 누구야?

    moth
        아키제트에게 배정된 인간 측 연락 담당자였던 것 같아
        아직 로그를 더 확인해야 하지만, 이 기억 안에서는 꽤 중요한 사람처럼 보여

    RESPONSES::self
        알겠어<+>loop
            FAKEEND::(뒤로)

who_velzie
    self
        벨지는 뭐야?

    moth
        오베스크 쪽 신앙과 관련된 이름이야
        정확한 의미는 아직 엉켜 있지만, 이 기억들 곳곳에서 반복해서 나타나

    RESPONSES::self
        알겠어<+>loop
            FAKEEND::(뒤로)

what
    RESPONSES::self
        코러시스트<+>what_corrucyst
        마인드스파이크<+>what_mindspike
        아무것도 아니야<+>loop
            FAKEEND::(뒤로)

what_corrucyst
    self
        코러시스트가 정확히 뭐야?

    moth
        오베스크 기술의 핵심 같은 거야
        금속처럼 보이지만 살아 있는 것처럼 행동하고, 생각과 기억을 담을 수 있어
        솔직히 말하면 우리도 아직 모르는 게 훨씬 많아

    RESPONSES::self
        알겠어<+>loop
            FAKEEND::(뒤로)

what_mindspike
    self
        마인드스파이크는 뭐야?

    moth
        네가 이 사고공간에 접속할 수 있게 해 주는 장치야
        안전장치가 많긴 한데, 지금 보고 있듯이 완벽하진 않아

    RESPONSES::self
        알겠어<+>loop
            FAKEEND::(뒤로)

why
    self
        왜 우리가 이걸 하는 거야?

    moth
        이런 기회는 거의 없어
        작동하는 코러시스트에서 이렇게 많은 데이터를 뽑아낼 수 있다면, 우리가 배울 수 있는 게 엄청날 거야

    RESPONSES::self
        알겠어<+>loop
            FAKEEND::(뒤로)
`)

env.localization.dialogues["++mothfj"] = generateDialogueObject(`
start
    self
        몸이 좀 이상해

    moth
        그래, 네 신경 상태가 좀 흔들리고 있어
        잠깐 쉬어도 돼. 무리해서 밀어붙일 필요는 없어

    RESPONSES::self
        알겠어<+>END
`)

env.localization.dialogues["++epselect"] = generateDialogueObject(`
start
    sys
        알림::'에피소드 선택'

    RESPONSES::self
        돌아가기<+>END
`)

env.localization.dialogues["firstvisit"] = generateDialogueObject(`
start
    moth
        좋아, 지금 로그를 훑어보고 있어...
        네가 그 인증기를 어떻게 통과했는지 전혀 모르겠어.
        아니면... 왜 그게 사람처럼 너한테 말을 걸었는지도
        이게 얼마나 이상한 일인지는 굳이 말 안 해도 알겠지 ㅋㅋ

    RESPONSES::self
        뭔가가 날 도와줬어<+>something
        나중에 얘기하자<+>END
            EXEC::setTimeout(()=> readoutAdd({message: "좋아, 난 로그를 좀 더 뒤져볼게", name:"moth"}), 1000)

something
    self
        거기에 뭔가가 나타났어

    moth
        응, 너랑 인증기가 반응한 건 보여
        하지만 그 "뭔가"가 뭔지는 안 보여. 진짜로, 로그를 봐
        뭐라고 생각해야 할지 모르겠어. 코러시스트에도 바이러스가 있나?
        그래도 솔직히 말하면 그냥 불일치 현상일 가능성이 커. 너한테 옮는 것도 아니니까 너무 겁먹진 마
        중요한 건 네가 안으로 들어왔다는 거야
        이게 정말 네트워크 연결기라면, 오베스크 전자레인지 같은 게 아니라면...
        우리가 이런 종류 안으로 들어온 건 <em>정말로</em> 처음이 될 거야.
        그러니까 지금은 입 다물고 네가 할 일을 하게 둘게. 질문이 있으면 편하게 <span definition="주의::'새 바로가기 추가됨';'메뉴에서 빠른 접근 가능'">말해</span>

    RESPONSES::self
        일로 돌아가자<+>END

END::env.hub.firstVisitEnd()
`)

env.localization.dialogues["depthrecovery"] = generateDialogueObject(`
start
    sourceless quiet
        날카로운 통증이 네 두개골을 꿰뚫는다. 마인드스파이크가 코러시스트에서 튕겨 나온다.
            WAIT::3000

    sys
        주의::'긴급 이탈 완료'
        분석::'연결부 손상 최소';'신경 영향 최소'
            EXEC::document.querySelector('#connection-overlay').classList.add('fade');setTimeout(()=>document.querySelector('#connection-overlay').classList.remove('show'),3000)

    moth
        괜찮아?
        아, 젠장

    sourceless
        모스가 연기 나는 프로세서에서 다급하게 전선을 뽑아낸다. 방 안에 탄 전자장비 냄새가 퍼진다.

    moth
        세상에
        친구, 네 마인드스파이크가 방금 네 목숨을 구했어
        그게 널 죽이려던 것 같진 않은데, 그래도 이것 좀 봐
        이런 일이 또 생길 때를 대비해서 신호 분배기를 제한해야겠어

    RESPONSES::self
        이제 뭐 하지?<+>whatnow_lk
            SHOWIF::[["hub__funfriend-fuelthanks", false],["exm|dullvessel|container", false]]
        이제 뭐 하지?<+>whatnow_lk
            SHOWIF::[["hub__funfriend-fuelthanks", false],["exm|dullvessel|container", true]]
        이제 뭐 하지?<+>whatnow_mk
            SHOWIF::[["hub__funfriend-fuelthanks", true],["exm|dullvessel|container", false]]
        이제 뭐 하지?<+>whatnow_hk
            SHOWIF::[["hub__funfriend-fuelthanks"],["exm|dullvessel|container"]]

whatnow_lk
    self
        이제 뭐 해야 해?

    moth
        글쎄...
        이걸 고쳐야 해. 여기서 뭘 배울 수 있을지 생각해 봐, 진짜로
        문제는 하나야...
        여기로 들어오는 건 결국 다 죽어. 우리가 코러를 어떻게 살려 둬야 하는지 모르거든
        그렇다고 오베스크에게 방법을 물어볼 수도 없고
        지금으로서는 다시 연결해서 이 낭포를 살려 둘 방법을 찾는 게 최선 같아...
        이게 바다 밑에서 얼마나 오래 버텼는지 잊지 마. 분명 쓸 만한 게 있을 거야
        그러니까 다시 들어가서 더 자세히 둘러봐... 최악이어도 데이터는 더 얻겠지
        괜찮지?

    RESPONSES::self
        날 쫓아낸 그 개체는?<+>entity
        좋아<+>END

whatnow_mk
    self
        이제 뭐 해야 해?

    moth
        글쎄...
        그 시스템 관리자 같은 것, 펀프렌드가 이 낭포를 유지하고 복구하는 열쇠야
        그리고 우린 이걸 고쳐야 해. 정말 많은 걸 배울 수 있을 거야
        우리는 코러시스트 기술을 유지해 본 적도 없어. 고치는 건 말할 것도 없고
        너랑 내가 코러를 살려 두는 비밀을 밝혀낸다고 상상해 봐. 어쩌면 드디어 날 지하실에서 빼 줄지도 몰라
        아무튼, 내가 주문한 구리 관 같은 건 접수됐어
        믿기 어렵겠지만 우리 부서 주문 중 제일 이상한 것도 아니야
        그러니 배송될 때까지 조금 기다리면 돼
        괜찮지?

    RESPONSES::self
        날 쫓아낸 그 개체는?<+>entity
        좋아<+>END

whatnow_hk
    self
        이제 뭐 해야 해?

    moth
        글쎄...
        당연히 이걸 고쳐야 해. 정말 많은 걸 배울 수 있을 거야
        우리는 코러시스트 기술을 유지해 본 적도 없어. 고치는 건 말할 것도 없고
        이런 발견으로 뭘 할 수 있을지 생각해 봐. 어쩌면 드디어 날 지하실에서 빼 줄지도 몰라
        그런데 펀프렌드 말로는 기둥에 금속을 줘야 하고, 그게 코러시스트에 영양을 공급할 거래
        ...그리고 우리 컨테이너는 아키제트의 함선에 있던 것들 중 하나인 것 같아. 안에 쓸 만한 게 있을 거야
        문제는 부수지 않고 어떻게 여는지 잘 모르겠다는 거지
        부탁 하나만 하자. 다시 연결해서 펀프렌드에게 물어봐. 뭔가 방법을 제안할지도 몰라

    RESPONSES::self
        날 쫓아낸 그 개체는?<+>entity
        좋아<+>END

entity
    self
        날 쫓아낸 그 개체는 어떻게 되는 거야?

    moth
        아, 어
        내가 좀 무신경하게 말했네. 미안
        이번에는 직접 스트림 접근으로 그 말까지 추적할 수 있었어
        우리도 들었잖아. 널 죽이고 싶어 하진 않아
        사실 그건 살아남기 위해 우리에게 의존하고 있고, 정말로 <em>살아남고</em> 싶어 하는 것 같아
        널 그 사고공간에서 내보낼 다른 방법이 없었을 수도 있어
        그리고 그 공간은 지금 당분간 협상 카드처럼 쥐고 있으려는 거겠지
        그래도 걱정하지 마. 내가 이 작업 전체를 지켜보고 있어
        비슷한 일이 다시 생기면, 네가 괜찮도록 내가 조치할게

    RESPONSES::self
        알겠어<+>END

END::flash(true);setTimeout(()=>{content.classList.remove('ep0-epi');change('ep0_epilogue', 'started');flash(false)}, 1000)
`)

getLocalizationForPage(true)

