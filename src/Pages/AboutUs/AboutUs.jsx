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
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/JSONs/Testimonials.json`);
                const data = await response.json();
                setTestimonialsData(data);
            } catch (error) {
                console.error('Error fetching the testimonials:', error);
            }
        };
    
        fetchTestimonials();
    }, []); 

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