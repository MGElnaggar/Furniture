import React from 'react';
import style from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import mail from '../../Assets/SVGs/mail.svg';
import sofa from '../../Assets/Furniture/sofa.png';

const footerLinks = [
    {
        links: ["About us" , "Services" , "Blog" , "Contact us" ]
    },
    {
        links: ["Support" , "Knowledge base" , "Live chat" ]
    },
    {
        links: ["Jobs" , "Our team" , "Leadership" , "Privacy Policy" ]
    },
    {
        links: ["Nordic Chair" , "Kruzo Aero" , "Ergonomic Chair" ]
    },
]

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>

                <div className={style.subscribeAndImg}>
                    <div className={style.subscribeAndImgInputs}>

                        <p>
                            <img src={mail} alt="mail icon" />
                            <span>Subscribe to Newsletter</span>
                        </p>

                        <form className={style.subscribeAndImgInputsForm}>
                            <input type="text" placeholder='Enter you name'/>
                            <input type="email" placeholder='Enter your email'/>
                            <button>
                                {/* <img src={paperPlane} alt="paper plane" /> */}
                                <span className="fa fa-paper-plane"></span>
                            </button>
                        </form>
                        {/* <form action=""></form> */}

                    </div>

                    <div className={style.subscribeAndImgPhoto}>
                        <img src={sofa} alt="sofa" /> 
                    </div>
                </div>

                <div className={style.footerMidContent}>
                    <div className={style.footerMidContentHeader}>
                        <h1><a href="/">E-Commerce</a></h1>
                        <p>
                            Discover the latest trends in fashion and home decor. 
                            Explore a curated selection of high-quality products, 
                            from stylish clothing to elegant furniture.
                        </p>
                        <ul>
                            <li><a href="http://www.facebook.com"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                            <li><a href="https://x.com"><span className="fa fa-brands fa-twitter"></span></a></li>
                            <li><a href="http://www.instagram.com"><span className="fa fa-brands fa-instagram"></span></a></li>
                            <li><a href="http://www.linkedin.com"><span className="fa fa-brands fa-linkedin"></span></a></li>
                        </ul>
                    </div>
                    <div className={style.footerMidContentLinks}>
                        {footerLinks.map((section, index) => (
                            <div key={index} className={style.footerColumn}>
                                <ul>
                                    {section.links.map((link,linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="/">{link}</a>
                                        </li>
                                    ))}
                                </ul>   
                            </div>
                        ))}
                    </div>
                </div>

                <hr />

                <div className={style.copyRights}>
                    <p>Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</p>
                    <ul>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;