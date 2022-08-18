import './index.scss';
import {FaSignInAlt, FaUserPlus, FaKey} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const ModalConnect = () => {
    return (
        <div className="modalConnect">
        <div className="modalConnect_item">
            <FaUserPlus/>
            <NavLink className="modalConnect_link" to=''> Inscription client </NavLink>
        </div>
        
        <div className="modalConnect_item">
            <FaKey/>
            <NavLink className="modalConnect_link" to=''> Connexion client / pro</NavLink>
        </div>
        </div>
    )
};

export default ModalConnect;
