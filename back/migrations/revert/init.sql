-- Revert inkable:init from pg

BEGIN;

DROP TABLE
    "categorise",
    "city",
    "style",
    "message",
    "appointment",
    "tattoo",
    "project",
    "consumer",
    "pro";

DROP DOMAIN "zipcode", "email";

COMMIT;