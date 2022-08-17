import './index.scss';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
       
        <header className="AppHeader">
            <div className="AppHeader_logo">
                {/* <img src="" alt="logo" /> */}
                LOGO
            </div>
            <nav className="AppHeader_nav">
            <ul className="AppHeader_nav-ul">
                <li>
                <NavLink to="prosubscribe">
                    <button className="AppHeader_button">Vous êtes tatoueur ?</button>
                </NavLink>    
                </li>
                <li>
                    <CgProfile className="AppHeader_button AppHeader_button-profil"/>
                </li>
            </ul>
                
                
            </nav>
        </header>
       
    )
};

export default AppHeader;