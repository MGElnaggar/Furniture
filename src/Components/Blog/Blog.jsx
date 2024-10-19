import React from 'react';

import styles from './Blog.module.css';

const Blog = ({ imgSrc, a, author, date }) => {
    return (
        <div className={styles.blog}>
            <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={imgSrc} />
            <div className={styles.blogContent}>
                <a href="/posts" target="_blank" rel="noopener noreferrer">{a}</a>
                <p>by <strong>{author}</strong> on <strong>{date}</strong></p>
            </div>
        </div>
    );
};

export default Blog;