import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';    
import './Navbar.css';
import { Button } from './Button'

function Navbar() {
    const [click,setClick]=useState(false);
    const [button, setButton]=useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);    
        }else {
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton);

    useEffect(() => {
        showButton()
    }, [])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>  
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>}
                </div>    
            </nav>  
        </>
    )
}

export  default Navbar
