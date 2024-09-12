alter table "public"."grants" alter column "interacted_users_ids" set default '[]';
alter table "public"."grants" alter column "interacted_users_ids" set not null;
