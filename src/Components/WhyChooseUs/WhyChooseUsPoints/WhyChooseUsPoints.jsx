import React from 'react';

import style from './WhyChooseUsPoints.module.css';

const WhyChooseUsPoints = ({ items , itemPercentage }) => {
    
    const itemCount = items.length;

    return (
        <div className={style.whyChooseUsPoints}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={style.whyChooseUsPointsContainer}
                    style={{ '--item-percentage': `${itemPercentage}%` }}
                    data-item-count={itemCount}
                >
                    <div className={style.icon}>
                        <img src={item.image} alt={item.header} />
                    </div>
                    <h3>{item.header}</h3>
                    <p>{item.paragraph}</p>
                </div>
            ))}
        </div>
    );
};

export default WhyChooseUsPoints;
