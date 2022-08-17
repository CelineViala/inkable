const consumerController = require("./consumerController");
const proController=require("./proController");
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator')

const authController={
    signupPro(req,res){
        //!TODO
        //Vérification du formulaire d'inscription
        const errors = [];

        //Vérification de chaque champs
        if (!req.body.studio_name || !req.body.email || !req.body.password || !req.body.passwordConfirm || !req.body.couleur || !req.body.black_and_white) {
        errors.push('Vous devez remplir tous les champs !');
        }

        //Vérification si l'email n'est pas au bon format
         if (!emailValidator.validate(req.body.email)) {
          errors.push("L'email n'est pas valide !");
        }

        // Vérication que le mot de passe soit bon
        if (req.body.password !== req.body.passwordConfirm) {
            errors.push('Les deux mots de passes ne correspondent pas !');
        }

        // Vérifie si le pro existe déjà ou non dans la BDD
        const pro = await Pro.getOnePro({
            where: { 
                email: req.body.email,
            },
        });
        
        // si il trouve un pro déjà existant en BDD via l'email, alors c'est que le pro est déjà inscrit !
        if (user) {
            errors.push('Un utilisateur inscrit sur le site possède déjà cette adresse email !');
        }

         // S'il y a des erreurs, on renvoit le formulaire en montrant les erreurs
         if (errors.length > 0) return res.render('signup', { errors });
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