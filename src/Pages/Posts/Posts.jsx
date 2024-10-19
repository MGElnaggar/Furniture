import React , { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Blog from '../../Components/Blog/Blog';
import TestimonialsSlider from '../../Components/TestimonialsSlider/TestimonialsSlider';
import Footer from '../../Components/Footer/Footer';

import style from './Posts.module.css';


const Posts = () => {
    
    const introHeader = "Posts";
    const introParagraph = "Dive into the world of fashion, home decor, and lifestyle inspiration. Discover expert tips, the latest trends, and behind-the-scenes stories. Stay updated and get inspired with every post.";

    const [posts, setPosts] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/JSONs/Posts.json`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching the posts:', error);
            }
        };
    
        fetchPosts();
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
        <div className={style.posts}>
            <Header />
            <PageIntro 
                introHeader={introHeader}
                introParagraph={introParagraph}
                showImage={true}
                showButtons={true}
            />

            <div className={style.postsContainer}>
                <div className={style.postsBlogs}>
                    {posts.length > 0 ? (
                        [...posts, ...posts, ...posts].map((post, index) => (
                            <Blog 
                                key={index}
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

            <div className={style.testimonial}>
                <TestimonialsSlider testimonials={testimonialsData} />
            </div>

            <Footer />
        </div>
    );
};

export default Posts;