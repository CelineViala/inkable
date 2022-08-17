import { NavLink } from 'react-router-dom';
import FormPro from '../FormPro';
import './index.scss';

const SubscribePro = () => {
    return (
        <div className="subscribePro">
            <header className="subscribePro_header">
            
                {/* <img src="" alt="logo" /> */}
                <NavLink to="/" className="subscribePro_logo">
                    LOGO
                </NavLink>
            </header>

            <FormPro/>
            
        </div>
    )
};

export default SubscribePro;