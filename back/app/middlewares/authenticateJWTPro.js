const jwt=require('jsonwebtoken');
const authenticateJWTPro = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const accessTokenSecretPro = 'phraseSuperSecrete';
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",authHeader)
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecretPro, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        console.log("crash",req.headers);
        res.sendStatus(401);
    }
}


module.exports=authenticateJWTPro;