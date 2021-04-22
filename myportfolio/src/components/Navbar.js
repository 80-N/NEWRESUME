import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRAVEL <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                ACCUEIL
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/web' className='nav-links' onClick={closeMobileMenu}>
                                WEB
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/logos' className='nav-links' onClick={closeMobileMenu}>
                                LOGOS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/videos' className='nav-links' onClick={closeMobileMenu}>
                                VIDEOS
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
