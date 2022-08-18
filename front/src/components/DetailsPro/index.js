import './index.scss';


import data from '../../data';
import { useParams } from 'react-router-dom';
import FilterSearch from '../FilterSearch';
import AppHeader from '../AppHearder';

const DetailsPro = () => {
    
    let { id } = useParams()
    
     
    const card = data.find(item => item.id === +id)

//    <div>{card.name}</div>
    
    
    return (
        <div>
            <AppHeader/>
            <FilterSearch/>
            <header className="headerPro">
            <div className="headerPro_profil">
                <img src={card.profil_img} alt="" />
            </div>
            <div className="headerPro_infos-content">    
                <div className="headerPro_infos">Nom: <span>{card.name}</span></div>
                <div className="headerPro_infos">Ville: <span>{card.city}</span></div>
            </div>
            </header>
            
            <section className="achievements">
                    <img className='achievements_img' src={card.tattoo_img} alt="" />
                <div className="content">
                    <div className='achievements_small-content'>
                        <img className='achievements_img-small' src={card.tattoo_img} alt="" />
                        <img className='achievements_img-small' src={card.tattoo_img} alt="" />
                    </div>
                    <div className='achievements_small-content'>
                        <img className='achievements_img-small' src={card.tattoo_img} alt="" />
                        <img className='achievements_img-small' src={card.tattoo_img} alt="" />
                    </div>
                </div>
            </section>

            <section className="speciality">
                <button className="speciality_tag">{card.speciality}</button>
                <button className="speciality_tag">{card.speciality}</button>
                <button className="speciality_tag">{card.speciality}</button>
                <button className="speciality_tag">{card.speciality}</button>    
            </section>
        </div>
    )
};

export default DetailsPro;