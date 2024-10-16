import React , { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import OurTeam from '../../Components/OurTeam/OurTeam';
import TestimonialsSlider from '../../Components/TestimonialsSlider/TestimonialsSlider';
import Footer from '../../Components/Footer/Footer';

import style from './AboutUs.module.css';


const AboutUs = () => {
    
    const introHeader = "About Us";
    const introParagraph = "Explore our story and see why customers love shopping with us. Join our community and elevate your lifestyle today!";

    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        fetch('/JSONs/Testimonials.json')
            .then((response) => response.json())
            .then((data) => setTestimonialsData(data))
            .catch((error) => console.error('Error fetching the testimonials:' , error));
    },[]);

    return (
        <div className={style.aboutUs}>
            <Header />
            <PageIntro 
                introHeader={introHeader}
                introParagraph={introParagraph}
                showImage={true}
                showButtons={true}
            />
            <WhyChooseUs />

            <OurTeam />

            <div className={style.testimonial}>
                <TestimonialsSlider testimonials={testimonialsData} />
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;