import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Button} from './button.js'


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="fas fa-shopping-basket"/>
                        Nittany Marketplace
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/account'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Account
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/cart'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-shopping-cart"/>
                                Cart
                            </Link>
                        </li>


                    </ul>
                    {
                        button && <Button to='/cart' buttonStyle='btn--outline'><i className="fas fa-shopping-cart"/>Cart</Button>
                    }
                </div>
            </nav>
        </>
    );
}

export default NavBar;