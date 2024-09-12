alter table "public"."grants" alter column "interacted_users_ids" drop not null;
ALTER TABLE "public"."grants" ALTER COLUMN "interacted_users_ids" drop default;
