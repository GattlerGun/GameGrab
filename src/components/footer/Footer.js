import { NavLink } from 'react-router-dom';

import logo from './../../images/svg/logo.svg'
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__cell'>
                        <NavLink className='footer__link'>
                            <img className='footer__logo logo' src={logo} alt='logo' />
                        </NavLink>
                        <p className='footer__text'>
                            Get up to $15 Wallet Credit to spend on your next store purchase!
                        </p>
                        <a className='footer__link' href="https://youtube.com/" rel='noreferrer'>
                            INVITE A FRIEND
                        </a>
                    </div>
                    <div className='footer__cell'>
                        <p className='footer__copy'>
                        © 2011-2022 GrabGame. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;