const consumerController = require("./consumerController");
const proController=require("./proController");
const jwt = require('jsonwebtoken');

const authController={
    signup(req,res){
        //traitement du formulaire d'inscription lors de la soumission
    },
    testConsumer(req,res){
        res.json("Page autorisée seulement aux consumers");
    },
    testPro(req, res){
        res.json("Page autorisée seulement aux pros");
    },
    async login(req,res){
       
        const { email, password } = req.body;
        console.log(email);
        // Verifier si c'est un pro
        let pro = await proController.getOnePro({
            where: {
                email: req.body.email
            }
        });
        //Vérifier si c'est un utilisateur
        let consumer=await consumerController.getOneConsumer({
            where: {
                email: req.body.email
            }
        });


        //!TODO
        //Vérification du formulaire d'inscription
        // const errors = [];

        //vérification de chaque champs
        // if (!req.body.studio_name || !req.body.email || !req.body.password || !req.body.passwordConfirm || !req.body.couleur || !req.body.black_and_white) {
        // errors.push('Vous devez remplir tous les champs !');
        // }

        
        consumer={email:"a@a.com",password:123};
        const accessTokenSecretConsumer = 'accessConsumer';
        const accessTokenSecretPro = 'accessPro';
        let accessToken;
        if(pro)
        {
            accessToken = jwt.sign({email: pro.email,  role: 'pro'}, accessTokenSecretPro);
        }
        else if(consumer)
        {
            accessToken = jwt.sign({email: consumer.email,  role: 'consumer'}, accessTokenSecretConsumer);     
        }else{
            return res.send('Username or password incorrect');
        }
        return res.json({accessToken});
    },
    logout(req,res){
        //déconnexion
    }

}

module.exports=authController;