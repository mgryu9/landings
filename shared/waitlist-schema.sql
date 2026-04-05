-- 페이크도어 waitlist 공통 스키마
-- project 컬럼으로 각 랜딩 페이지 구분

create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  project text not null,  -- 'zzaktech', 'new-project', etc.
  source text,            -- 'organic', 'meta-ad', etc.
  created_at timestamptz default now()
);

create index on waitlist(project);
create index on waitlist(email);
