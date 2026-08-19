-- Public contact submissions. Inbox is signed-in; rows are not scoped to the visitor.
create table if not exists inquiries (
  id         serial primary key,
  name       text not null,
  email      text not null,
  context    text not null default '',
  message    text not null,
  created_at timestamptz not null default now(),
  read_at    timestamptz
);

create index if not exists inquiries_created_at_idx on inquiries (created_at desc);
