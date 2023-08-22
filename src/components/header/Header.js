
import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner shadow">
                    <div className='header__content'>
                        <h1 className='header__title title'>
                            RPG and Survival games in August Grab
                        </h1>
                        <p className='header__text'>
                            Navigate the labyrinth of the mind in Disco Elysium: The Final Cut.
                        </p>
                        <p className='header__text'>
                            Embrace the bloody, cinematic multiplayer chaos of Chivalry 2.
                        </p>
                        <p className='header__text'>
                            Own these and more PC games & get great perks for $11.99/month!
                        </p>
                        <NavLink to={"/choice"} className='header__btn button'>Grab Now</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;