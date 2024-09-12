alter table "public"."grants" alter column "interacted_users_ids" drop not null;
alter table "public"."grants" add column "interacted_users_ids" int2vector;
