import React from 'react';

import WhyChooseUsPoints from './WhyChooseUsPoints/WhyChooseUsPoints';

import whyChooseUsImg from '../../Assets/whyChooseUs.jpg';
import truck from '../../Assets/SVGs/truck.svg';
import bag from '../../Assets/SVGs/bag.svg';
import support from '../../Assets/SVGs/support.svg';
import turn from '../../Assets/SVGs/return.svg';

import style from './WhyChooseUs.module.css';


const whyChooseUsItems = [
    {
        image: truck,
        header: 'Fast & Free Shipping',
        paragraph: 'Enjoy swift delivery services with no extra charges on all orders. We ensure your products reach you in the shortest time possible.'
    },
    {
        image: bag,
        header: 'Easy to Shop',
        paragraph: 'Our user-friendly interface allows you to shop seamlessly. With easy navigation, find and purchase your desired products effortlessly.'
    },
    {
        image: support,
        header: '24/7 Support',
        paragraph: 'Our customer support team is available around the clock to assist you with any queries or issues you might have. We’re here to help, anytime!'
    },
    {
        image: turn,
        header: 'Hassle-Free Returns',
        paragraph: 'Not satisfied with your purchase? No worries. We offer an easy and stress-free return policy to ensure your complete satisfaction.'
    }
];


const WhyChooseUs = () => {
    return (
        <div className={style.whyChooseUsSection}>
            <div className={style.whyChooseUsContainer}>

                <div className={style.whyChooseUsContainerContent}>
                    <h2>Why Choose Us</h2>
                    <p>
                        We’re committed to making your shopping experience seamless and satisfying.
                    </p>
                    <div className={style.whyChooseUsPoints}>
                        <WhyChooseUsPoints items={whyChooseUsItems} itemPercentage={40} />
                    </div>
                </div>

                <div className={style.whyChooseUsContainerImage}>
                    <img src={whyChooseUsImg} alt="Why Choose Us" />
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;