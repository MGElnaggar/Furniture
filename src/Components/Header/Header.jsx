import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import style from './Header.module.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {       
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cartClick = () => {
        navigate("/cart");
    }

    return (
        <div className={style.header}>
            <div className={style.nav}>
                <div className={style.logo}>
                    <a href="/">Furniture</a>
                </div>

                {!isMobile && (
                    <div className={style.navBar}>
                        <div className={style.navTags}>
                            <ul>
                                <li>
                                    <Link to="/" className={location.pathname === '/' ? style.navTagsSelected : ''}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop" className={location.pathname === '/shop' ? style.navTagsSelected : ''}>Shop</Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className={location.pathname === '/about-us' ? style.navTagsSelected : ''}>About us</Link>
                                </li>
                                <li>
                                    <Link to="/services" className={location.pathname === '/services' ? style.navTagsSelected : ''}>Services</Link>
                                </li>
                                <li>
                                    <Link to="/posts" className={location.pathname === '/posts' ? style.navTagsSelected : ''}>Posts</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className={location.pathname === '/contact-us' ? style.navTagsSelected : ''}>Contact us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={style.navProfileCart}>
                            <ul>
                                <li>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </li>
                                <li onClick={cartClick}>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                
                {isMobile && (
                    <div className={style.mobileNav} onClick={toggleDropdown}>
                        <span className={isDropdownOpen ? style.closeIcon : style.openIcon}>
                            {isDropdownOpen ? '✕' : '≡'}
                        </span>
                    </div>
                )}

                {isMobile && isDropdownOpen && (
                    <div className={style.mobileNavBar}>
                        <div className={style.mobileNavTags}>
                            <ul>
                                <li>
                                    <Link to="/" className={location.pathname === '/' ? style.navTagsSelected : ''}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop" className={location.pathname === '/shop' ? style.navTagsSelected : ''}>Shop</Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className={location.pathname === '/about-us' ? style.navTagsSelected : ''}>About us</Link>
                                </li>
                                <li>
                                    <Link to="/services" className={location.pathname === '/services' ? style.navTagsSelected : ''}>Services</Link>
                                </li>
                                <li>
                                    <Link to="/posts" className={location.pathname === '/posts' ? style.navTagsSelected : ''}>Posts</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className={location.pathname === '/contact-us' ? style.navTagsSelected : ''}>Contact us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={style.mobileNavProfileCart}>
                            <ul>
                                <li>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </li>
                                <li onClick={cartClick}>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;