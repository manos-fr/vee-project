alter table "business"."somes" add column "created_at" timestamptz
 null default now();
