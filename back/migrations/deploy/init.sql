BEGIN;

DROP DOMAIN IF EXISTS "email", "zipcode";

CREATE DOMAIN "email" AS text CHECK (
    value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
);

CREATE DOMAIN "zipcode" AS text CHECK (
    value ~ '^0[1-9]\d{3}$' -- code postaux metropole de 01 a 09
    OR value ~ '^20[1-2]\d{2}$|^20300$' -- code postaux de la Corse
    OR value ~ '^[13-8]\d{4}$' -- code postaux les plus génériques
    OR value ~ '^9[0-6]\d{3}$' -- code postaux metropole commencant par 9
    OR value ~ '^97[1-6]\d{2}$' -- code postaux DOM
    OR value ~ '^98[4678]\d{2}$' -- code postaux TOM
    OR value ~ '^9{5}$' -- code postal de la poste
);

DROP TABLE IF EXISTS "pro", "consumer", "project", "tatoo", "appointment", "message", "style", "city", "categorise";

CREATE TABLE "pro" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "studio_name" TEXT NOT NULL,
    "email" EMAIL NOT NULL,
    "password" TEXT NOT NULL,
    "profile_picture_path_pro" TEXT,
    "description" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "color" BOOLEAN NOT NULL,
    "black_and_white" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "consumer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" EMAIL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_picture_path_consumer" TEXT,
    "date_of_birth" TEXT NOT NULL, 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "project" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "color" BOOLEAN NOT NULL,
    "area" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "tatoo" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "tatoo_picture_path" TEXT,
    "pro_id" INT NOT NULL REFERENCES "pro" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "appointment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "note" TEXT,
    "beginning_hour" TEXT NOT NULL,
    "ending_hour" TEXT NOT NULL,
    "pro_id" INT NOT NULL REFERENCES "pro" ("id"),
    "project_id" INT NOT NULL REFERENCES "project" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "message" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "project_id" INT NOT NULL REFERENCES "project" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "style" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "city" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "zipcode" ZIPCODE NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "categorise" (
    "pro_id" INT NOT NULL REFERENCES "pro" ("id") ON DELETE CASCADE,
    "style_id" INT NOT NULL REFERENCES "style" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("pro_id", "style_id") -- on crée une clé composite, une clé composée de plusieurs colonnes, ça garantit l'unicité de la combinaison

);

COMMIT;