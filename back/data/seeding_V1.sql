BEGIN;

INSERT INTO "pro" ("studio_name", "email", "password", "profile_picture_path_pro", "description", "instagram", "color", "black_and_white")
    VALUES
        ('le studio cool', 'lestudicool@gmail.com', 'jesuiscool', 'photocool.png', 'je suis super cool', 'coolMan', 'true', 'false'),
        ('le studio super', 'lestudiosuper@gmail.com', 'jesuissuper', 'photosuper.png', 'je suis super super', 'superGirl', 'false', 'true');

INSERT INTO "consumer" ("email", "first_name", "last_name", "password", "profile_picture_path_consumer", "date_of_birth")
    VALUES
        ('swag@hotmail.fr', 'chris', 'tofleur', 'jesuisdrole', 'photodrole.png', '12-12-12'),
        ('petitchat@laposte.fr', 'juliette', 'lavoiture', 'viveleschats', 'photodechat.png', '10-10-10');

COMMIT;