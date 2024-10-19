import React from 'react';

import styles from './Blog.module.css';

const Blog = ({ imgSrc, a, author, date }) => {
    return (
        <div className={styles.blog}>
            <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={imgSrc} />
            <div className={styles.blogContent}>
                <h1>{a}</h1>
                <p>by <strong>{author}</strong> on <strong>{date}</strong></p>
            </div>
        </div>
    );
};

export default Blog;