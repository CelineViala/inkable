-- Revert inkable:init from pg

BEGIN;

DROP TABLE "categorise", "city", "style", "message", "appointment", "tatoo", "project", "consumer", "pro";

DROP DOMAIN "zipcode", "email";

COMMIT;
