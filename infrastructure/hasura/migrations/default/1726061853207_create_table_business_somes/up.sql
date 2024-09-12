CREATE TABLE "business"."somes" ("id" serial NOT NULL, "amount" numeric NOT NULL, "areas" jsonb NOT NULL, "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "business"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_business_somes_updated_at"
BEFORE UPDATE ON "business"."somes"
FOR EACH ROW
EXECUTE PROCEDURE "business"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_business_somes_updated_at" ON "business"."somes"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
