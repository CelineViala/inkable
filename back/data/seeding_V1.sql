BEGIN;

INSERT INTO "pro" ("studio_name", "email", "password", "profile_picture_path_pro", "description", "instagram", "color", "black_and_white")
    VALUES
        ('le studio cool', 'lestudicool@gmail.com', 'jesuiscool', 'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:F8F3F0,e_outline:10/b_rgb:DBE0EA/happy_people', 'je suis super cool', 'coolMan', 'true', 'false'),
        ('le studio super', 'lestudiosuper@gmail.com', 'jesuissuper', 'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:96614D,e_outline:10/b_rgb:F1E4E0/pro1', 'je suis super super', 'superGirl', 'false', 'true');

INSERT INTO "consumer" ("email", "first_name", "last_name", "password", "profile_picture_path_consumer", "date_of_birth")
    VALUES
        ('swag@hotmail.fr', 'chris', 'tofleur', 'jesuisdrole', 'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:E2C09C,e_outline:10/b_rgb:EADFD3/pro2', '12-12-12'),
        ('petitchat@laposte.fr', 'juliette', 'lavoiture', 'viveleschats', 'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:C3C9D9,e_outline:10/b_rgb:CEB5B1/consumer2', '10-10-10');

COMMIT;