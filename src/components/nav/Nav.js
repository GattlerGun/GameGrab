import { NavLink, useLocation } from 'react-router-dom'

import logo from './../../images/svg/logo.svg';
import { ReactComponent as HomeIco } from './../../images/svg/home-ico.svg';
import { ReactComponent as ChoiceIco } from './../../images/svg/catalog-ico.svg';
import { ReactComponent as MarketIco} from './../../images/svg/busket-ico.svg';
import { ReactComponent as BundlesIco} from './../../images/svg/bundles-ico.svg';
import { ReactComponent as WalletIco } from './../../images/svg/wallet-ico.svg';
import { ReactComponent as SettingsIco } from './../../images/svg/settings-ico.svg';
import { ReactComponent as SupportIco } from './../../images/svg/support-ico.svg';
import './nav.scss';
import { useEffect, useRef, useState } from 'react';
import pathnames from '../../helpers/offsetEnum';


const Nav = () => {
    const activeLink = 'nav__link nav__link--active';
    const normalLink = 'nav__link';
    const [offset, setOffset] = useState(0);
    const [startOffset, setStartOffset] = useState(0)
    const { pathname } = useLocation();
    const ref = useRef('');

    useEffect(() => {
        setStartOffset(
            (ref.current !== null) ? ref.current.offsetWidth : 0
        )
        window.onresize = () => {
            setStartOffset(ref.current.offsetWidth)
        }
    }, [startOffset]);
    const setActive = ({ isActive }) => {
        if (isActive) {
            setTimeout(() => {
                switch (pathname) {
                    case pathnames.HOME:
                        return setOffset(startOffset * 0);
                    case pathnames.MARKET:
                        return setOffset(startOffset * 1);
                    case pathnames.BUNDLES:
                        return setOffset(startOffset * 2);
                    case pathnames.CHOICE:
                        return setOffset(startOffset * 3);
                    case pathnames.WALLET:
                        return setOffset(startOffset * 4);
                    case pathnames.SETTINGS:
                        return setOffset(startOffset * 5);
                    case pathnames.SUPPORT:
                        return setOffset(startOffset * 6);
                    default: ;
                }
            }, 100)
            return activeLink
        }
        return normalLink
    }
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav__inner'>
                    <NavLink to={'/'} className='logo'>
                        <img src={logo} alt='logo' />
                    </NavLink>
                    <ul className='nav__list'>
                        <li ref={ref} className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab'}>
                                <HomeIco className='nav__icon' alt='Home icon' />
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab/market'}>
                                <MarketIco className='nav__icon' alt='Market icon' />
                                <p>Market</p>
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab/bundles'}>
                                <BundlesIco className='nav__icon' alt='Bundles icon' />
                                <p>Bundles</p>
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab/choice'}>
                                <ChoiceIco className='nav__icon' alt='Choice icon' />
                                <p>Choice</p>
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab/wallet'}>
                                <WalletIco className='nav__icon' alt='Wallet icon' />
                                <p>Wallet</p>
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab/settings'}>
                                <SettingsIco className='nav__icon' alt='Settings icon' />
                                <p>Settings</p>
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className={setActive} to={'/GameGrab/support'}>
                                <SupportIco className='nav__icon' alt='Support icon' />
                                <p>Support</p>
                            </NavLink>
                        </li>
                        <div className='nav__indicator'
                            style={{
                                width: `${startOffset}px`,
                                transform: `translateX(${offset}px)`
                            }}>
                            <span></span>
                        </div>
                    </ul>
                </div>
            </div >
        </nav >
    );
}

export default Nav;