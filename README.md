# landings - 페이크도어 테스트 허브

여러 아이디어의 수요를 검증하기 위한 랜딩 페이지 모음.
개발 전에 반드시 여기서 waitlist 전환율을 확인한다.

---

## 목적

- 새 아이디어는 풀 개발 전에 페이크도어 랜딩으로 수요 검증 먼저
- waitlist 전환율 5% 이상 확인 후 다음 단계 진행
- 빠른 런칭, 빠른 검증, 빠른 폐기 또는 진행

---

## 구조

각 아이템을 독립 Next.js 앱으로 운영할지, 단일 앱 내 라우트로 운영할지는 규모에 따라 결정.
현재는 **단일 앱 + 라우트 방식** 우선 고려.

```
landings/
├── README.md
├── .env.local              ← Supabase 키 등 환경변수
├── shared/
│   └── waitlist-schema.sql ← 공통 DB 스키마
└── (향후 Next.js 앱 파일들)
```

---

## Supabase 전략

- **하나의 Supabase 프로젝트**에 waitlist 테이블 하나
- `project` 컬럼으로 각 랜딩 구분 ('zzaktech', 'researchpool', 등)
- kindergarten Supabase 프로젝트와 분리된 별도 프로젝트 사용

---

## 인프라 템플릿

`apptech-community` 코드베이스를 템플릿으로 사용.
- Next.js + Tailwind CSS + Supabase 구성
- waitlist 폼 패턴 재사용

---

## Meta Pixel 전략

- `content_name` 파라미터로 프로젝트 구분
- 예: `fbq('track', 'Lead', { content_name: 'zzaktech' })`
- 캠페인별 성과 분리 측정 가능

---

## 현재 테스트 예정 목록

| 프로젝트 | 폴더 | 상태 |
|---|---|---|
| 짝테크 (앱테크 커뮤니티) | `apptech-community/` | 코드 완성, 배포 대기 |

---

## 기준: 다음 단계로 넘어가는 조건

- waitlist 전환율 5% 이상 (방문자 대비 이메일 등록)
- 또는 유료 의향 명시적 신호 확인
- 2주 이내 기준 달성 실패 시 아이디어 재검토
