-- Chạy toàn bộ file này trong Supabase → SQL Editor → Run
create extension if not exists pgcrypto;

create table classes(id uuid primary key default gen_random_uuid(), school text not null, name text not null,
  code text unique not null, created_at timestamptz default now(), unique(school,name));
create table students(id uuid primary key default gen_random_uuid(), class_id uuid not null references classes on delete cascade,
  name text not null, unique(class_id,name));
create table quizzes(id text primary key, title text not null, questions jsonb not null, created_at timestamptz default now());
create table attempts(id uuid primary key default gen_random_uuid(), quiz_id text references quizzes on delete cascade,
  class_id uuid references classes on delete set null, student_id uuid references students on delete set null,
  student_name text, score int, total int, answers jsonb, created_at timestamptz default now());

alter table classes enable row level security;
alter table students enable row level security;
alter table quizzes enable row level security;
alter table attempts enable row level security;

-- Giáo viên (đã đăng nhập) được làm mọi thứ
create policy t_classes on classes for all to authenticated using(true) with check(true);
create policy t_students on students for all to authenticated using(true) with check(true);
create policy t_quizzes on quizzes for all to authenticated using(true) with check(true);
create policy t_attempts on attempts for all to authenticated using(true) with check(true);
-- Học sinh (chưa đăng nhập) chỉ được ĐỌC câu hỏi
create policy s_quizzes on quizzes for select to anon using(true);

-- Học sinh nhập mã lớp → chỉ thấy lớp đó + tên học sinh của lớp đó
create or replace function get_class(p_code text) returns json language sql security definer set search_path=public as $$
  select json_build_object('id',c.id,'school',c.school,'name',c.name,
    'students',(select coalesce(json_agg(json_build_object('id',s.id,'name',s.name) order by s.name),'[]'::json)
                from students s where s.class_id=c.id))
  from classes c where c.code=upper(trim(p_code)) $$;

-- Học sinh chỉ được GỬI điểm (không đọc được điểm của ai)
create or replace function submit_attempt(p_class uuid,p_student uuid,p_quiz text,p_score int,p_total int,p_answers jsonb)
returns void language plpgsql security definer set search_path=public as $$
declare n text;
begin
  select name into n from students where id=p_student and class_id=p_class;
  if n is null then raise exception 'invalid student'; end if;
  insert into attempts(quiz_id,class_id,student_id,student_name,score,total,answers)
  values(p_quiz,p_class,p_student,n,p_score,p_total,p_answers);
end $$;

grant execute on function get_class(text) to anon, authenticated;
grant execute on function submit_attempt(uuid,uuid,text,int,int,jsonb) to anon, authenticated;
