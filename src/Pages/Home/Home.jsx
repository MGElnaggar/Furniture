import React , { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Items from '../../Components/Items/Items';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'; 
import TestimonialsSlider from '../../Components/TestimonialsSlider/TestimonialsSlider';
import Blog from '../../Components/Blog/Blog';
import Footer from '../../Components/Footer/Footer'

import style from './Home.module.css';


const Home = () => {

    const introHeader = "Modern Interior Design Studio";
    const introParagraph = "Discover the latest trends in fashion and home decor. Explore a curated selection of high-quality products, from stylish clothing to elegant furniture.";

    const [products, setProducts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/JSONs/Chairs.json`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching the products:', error));
    }, []);    

    // useEffect(() => {
    //     fetch('/JSONs/Posts.json')
    //         .then((response) => response.json())
    //         .then((data) => setPosts(data))
    //         .catch((error) => console.error('Error fetching the posts:' , error));
    // }, []);
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/JSONs/Posts.json`)
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching the posts:', error));
    }, []);
    

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/JSONs/Testimonials.json`)
            .then((response) => response.json())
            .then((data) => setTestimonialsData(data))
            .catch((error) => console.error('Error fetching the testimonials:', error));
    }, []);    

    return (
        <div>
            <Header />
            
            <div className={style.home}>

                <PageIntro 
                    introHeader={introHeader}
                    introParagraph={introParagraph}
                    showImage={true}
                    showButtons={true}
                />

                <div className={style.homeProducts}>
                    <div className={style.homeProductsContainer}>
                        <div className={style.homeProductsText}>
                            <h2>Crafted with excellent material.</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <button>Explore</button>
                        </div>

                        <div className={style.homeProductsItems}>
                            {products.length > 0 ? (
                                products.slice(0,3).map((product) => (
                                    <Items
                                        key={product.id}
                                        id={product.id}
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
                </div>

                <WhyChooseUs />

                <TestimonialsSlider testimonials={testimonialsData} />

                <div className={style.posts}>
                    <div className={style.postsContainer}>
                        <div className={style.postsHeader}>
                            <h2>Recent Blogs</h2>
                            <a href="/posts" target="_blank" rel="noopener noreferrer">View All Posts</a>
                        </div>
                        <div className={style.homePostsBlogs}>
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <Blog 
                                        key={post.id}
                                        imgSrc={post.imgSrc} 
                                        a={post.a} 
                                        author={post.author}
                                        date={post.date}
                                    />
                                ))
                            ) : (
                                <p>Loading posts...</p>
                            )}
                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        </div>
    );
};

export default Home;