import './index.scss';
import profil from "../../assets/images/profil.png";

const TattooCard = () => {
    return (
        <div className="tattooCard">
            
                <div className="tattooCard_profil">
                    <img src={profil} alt="profil" className=""/>
                </div>
                <div className="tattooCard_content">
                    <p>Nom :</p>
                    <p>Spécialitées :</p>
                </div>
           
            
        </div>
    )
}
  
  export default TattooCard;