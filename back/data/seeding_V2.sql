BEGIN;

INSERT INTO
    "pro" (
        "studio_name",
        "city",
        "email",
        "password",
        "profile_picture_path_pro",
        "description",
        "instagram",
        "color",
        "black_and_white",
        "role"
    )
VALUES (
        'le studio cool',
        'Toulouse',
        'lestudicool@gmail.com',
        'jesuiscool',
        'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:F8F3F0,e_outline:10/b_rgb:DBE0EA/happy_people',
        'je suis super cool',
        'coolMan',
        'true',
        'false',
        'pro'
    ), (
        'le studio super',
        'Paris',
        'lestudiosuper@gmail.com',
        'jesuissuper',
        'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:96614D,e_outline:10/b_rgb:F1E4E0/pro1',
        'je suis super super',
        'superGirl',
        'false',
        'true',
        'pro'
    );

INSERT INTO
    "consumer" (
        "email",
        "first_name",
        "last_name",
        "password",
        "profile_picture_path_consumer",
        "date_of_birth",
        "role"
    )
VALUES (
        'swag@hotmail.fr',
        'chris',
        'tofleur',
        'jesuisdrole',
        'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:E2C09C,e_outline:10/b_rgb:EADFD3/pro2',
        '12-12-12',
        'consumer'
    ), (
        'petitchat@laposte.fr',
        'juliette',
        'lavoiture',
        'viveleschats',
        'https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,g_faces,h_250,w_250/r_max/co_rgb:C3C9D9,e_outline:10/b_rgb:CEB5B1/consumer2',
        '10-10-10',
        'consumer'
    );

INSERT INTO "style" ("name")
VALUES ('floral'), ('tribal'), ('aquarelle');

INSERT INTO
    "project" (
        "title",
        "description",
        "status",
        "color",
        "area",
        "pro_id",
        "consumer_id"
    )
VALUES (
        'Projet cover',
        'cover dos',
        'accepté',
        'true',
        'dos',
        1,
        1
    ), (
        'Projet tatoo Lion',
        'fjkekjhezk',
        'accepté',
        'true',
        'dos',
        2,
        1
    );

INSERT INTO
    "tattoo" (
        "tattoo_picture_path",
        "pro_id"
    )
VALUES (
        'https://res.cloudinary.com/1',
        1
    ), (
        'https://res.cloudinary.com/2',
        2
    ), (
        'https://res.cloudinary.com/3',
        2
    ), (
        'https://res.cloudinary.com/4',
        1
    );

INSERT INTO
    "appointment" (
        "title",
        "note",
        "beginning_hour",
        "ending_hour",
        "pro_id",
        "project_id"
    )
VALUES (
        'rdv 1',
        'penser à cicatrices',
        NOW() + '1day', (NOW() + '1day' + '1hour'),
        1,
        1
    ), (
        'rdv machin',
        'penser à ceci',
        NOW() + '2day',
        NOW() + '2day' + '1hour',
        1,
        2
    ), (
        'rdv truc',
        'penser à cela',
        NOW() + '3day',
        NOW() + '3day' + '1hour',
        2,
        1
    );

INSERT INTO
    "message" (
        "content",
        "project_id",
        "pro_id",
        "consumer_id"
    )
VALUES (
        'Bonjour je veux un tatouage',
        1,
        null,
        1
    ), (
        'Quel type de tatouage?',
        1,
        1,
        null
    );

INSERT INTO
    "categorise"("pro_id", "style_id")
VALUES (1, 1), (1, 2), (1, 3), (2, 1);

COMMIT;