// const jwt=require('jsonwebtoken');

// const authenticateJWTConsumer = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     const accessTokenSecretConsumer = 'accessConsumer';
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecretConsumer, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// }

// module.exports=authenticateJWTConsumer;