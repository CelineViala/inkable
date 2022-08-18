import './index.scss';

import { Link, useParams } from 'react-router-dom';


const TattooCard = ({infos}) => {
    console.log(infos);

    return (
        
        <Link className='tattooCardLink' to={`/pro-details/${infos.id}`}>
        <div className="tattooCard">
            
                <div className="tattooCard_profil">
                    <img src={infos.profil_img} alt="profil" className=""/>
                </div>
                <div className="tattooCard_content">
                    <p className='tattooCard_text'>Nom : {infos.name}</p>
                    <p className='tattooCard_text'>Spécialitées : {infos.speciality}</p>
                </div>
           
            
        </div>
       </Link>
    )
}
  
  export default TattooCard;