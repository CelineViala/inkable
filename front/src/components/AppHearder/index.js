import './index.scss';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import ModalConnect from '../ModalConnect';

import React, { useState } from 'react';

const AppHeader = () => {

    const [ open, setOpen ] = useState(false);

    const tooggleModal = (e) => {
        setOpen(!open)
    }

    return (
       <>
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
                    <CgProfile className="AppHeader_button AppHeader_button-profil" onClick={(e) => tooggleModal(e)}/>
                </li>
                
            </ul>
                
               
            </nav>
            {open && <ModalConnect/>  }
            
        </header>
        
       </>
    )
};

export default AppHeader;