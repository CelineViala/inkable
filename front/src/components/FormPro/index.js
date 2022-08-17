import './index.scss';

const FormPro = () => {
    return (
        <div className="formContent">
            <form action="" className="form">
                    <div className="formGroup">
                        <label htmlFor="">Nom</label>
                        <input type="text" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Prenom</label>
                        <input type="text" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Ville</label>
                        <input type="text" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Confirmation email</label>
                        <input type="text" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Mot de passe</label>
                        <input type="password" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Confirmation du mot de passe</label>
                        <input type="password" />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Compte Instagram</label>
                        <input type="text" />
                    </div>

                    <button className="btn-submit">S'inscrire</button>
                  
                </form>
                
        </div>    
    )
};

export default FormPro;