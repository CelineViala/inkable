-- Deploy inkable:seedingStylesNotifs to pg

BEGIN;

INSERT INTO "style" ("name")
VALUES ('floral'), ('tribal'), ('aquarelle'),('lettrage'),('japonais');
INSERT INTO "notif" ("name")
VALUES ('Nouveau(x) message(s) tatoueur'), ('Nouveau(x) message(s) client'), ('New RDV'),('Modification RDV'), ('Modification projet');

COMMIT;
