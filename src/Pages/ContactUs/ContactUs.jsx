import React from 'react';

import { useNavigate } from "react-router-dom";

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Footer from '../../Components/Footer/Footer';

import style from './ContactUs.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const contactDetails = [
    {
      iconClass: 'fas fa-map-marker-alt',
      text: '43 Raymouth Rd. \nBaltemoer, London 3910',
    },
    {
      iconClass: 'fas fa-envelope',
      text: 'info@yourdomain.com',
    },
    {
      iconClass: 'fas fa-phone-alt',
      text: '+1 294 3925 3939',
    },
];

const ContactUs = () => {
    
    const introHeader = "Contact Us";
    const introParagraph = "Got questions or need assistance? We're here to help! Reach out to our friendly customer support team for any inquiries or feedback. Contact us today and let us know how we can assist you.";

    const navigate = useNavigate();

    const sendMessageBtn = () => {
        navigate("/");
    }

    return (
        <div className={style.contactUs}>
            <Header />
            <PageIntro 
                introHeader={introHeader}
                introParagraph={introParagraph}
                showImage={true}
                showButtons={true}
            />

            <div className={style.contactContainer}>
                <div className={style.contactInfo}>
                    {contactDetails.map((detail, index) => (
                        <div className={style.contactItem} key={index}>
                            <div className={style.iconContainer}>
                                <i className={`${detail.iconClass} ${style.icon}`}></i>
                            </div>
                            <p>
                                {detail.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
                <form className={style.contactForm}>
                    <div className={style.formRow}>
                        <div className={style.formRowFirstName}>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" name="firstName" placeholder="First name" className={style.inputField} />
                        </div>
                        <div className={style.formRowLastName}>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name="lastName" placeholder="Last name" className={style.inputField} />
                        </div>
                    </div>
                    <div className={style.formRow}>
                        <input type="email" name="email" placeholder="Email address" className={style.inputField} />
                    </div>
                    <div className={style.formRow}>
                        <textarea name="message" placeholder="Message" className={style.textArea}></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className={style.submitButton} 
                        onClick={sendMessageBtn}
                    >Send Message</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;