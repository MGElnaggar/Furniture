import React , { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import WhyChooseUsPoints from '../../Components/WhyChooseUs/WhyChooseUsPoints/WhyChooseUsPoints';
import Items from '../../Components/Items/Items';
import Footer from '../../Components/Footer/Footer';
import TestimonialsSlider from '../../Components/TestimonialsSlider/TestimonialsSlider';


import truck from '../../Assets/SVGs/truck.svg';
import bag from '../../Assets/SVGs/bag.svg';
import support from '../../Assets/SVGs/support.svg';
import turn from '../../Assets/SVGs/return.svg';


import style from './Services.module.css';

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
    },
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


const Services = () => {

    const introHeader = "Services";
    const introParagraph = "Discover our wide range of services designed to enhance your shopping experience. From personalized styling advice to fast and reliable delivery, ";

    const [products, setProducts] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/JSONs/Chairs.json`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        };
    
        fetchProducts();
    }, []);  

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
        <div className={style.services}>
            <Header />
            <PageIntro 
                introHeader={introHeader}
                introParagraph={introParagraph}
                showImage={true}
                showButtons={true}
            />

            <div className={style.whyChooseUs}>
                <WhyChooseUsPoints items={whyChooseUsItems} itemPercentage={20} />
            </div>  

            <div className={style.products}>

                <div className={style.productsText}>
                    <h2>Crafted with excellent material.</h2>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <button>Explore</button>
                </div>

                <div className={style.productsItems}>
                    {products.length > 0 ? (
                        products.slice(0, 3).map((product) => (
                            <Items
                                key={product.id}
                                imgSrc={product.imgSrc} 
                                name={product.title} 
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>

            </div>

            <div className={style.testimonial}>
                <TestimonialsSlider testimonials={testimonialsData} />
            </div>

            <Footer />
        </div>
    );
};

export default Services;