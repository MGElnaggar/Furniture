import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './TestimonialsSlider.module.css';

const NextArrow = (props) => {
    const { onClick } = props;
    return <div className={styles.nextArrow} onClick={onClick}>›</div>;
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className={styles.prevArrow} onClick={onClick}>‹</div>;
};

const TestimonialsSlider = ({ testimonials }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.testimonialSlider}>
                <h2>Testimonials</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonial}>
                            <p>"{testimonial.text}"</p>
                            <div className={styles.testimonialInfo}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className={styles.testimonialImage}
                                />
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
