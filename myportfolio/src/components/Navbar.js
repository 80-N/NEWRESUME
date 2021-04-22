import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {//To control responsivity
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

useEffect(() => {//To hide the contact button when shrink (minimize) the screen 
    showButton();
}, []);  

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Etienne NDOUR 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link 
                            to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                        >
                            ACCUEIL
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link
                            to='/web'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            WEB
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link
                            to='/logos'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            LOGOS
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link
                            to='/videos'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            VIDEOS
                        </Link>
                        </li>

                        <li>
                        <Link
                            to='/contact'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            CONTACT
                        </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
