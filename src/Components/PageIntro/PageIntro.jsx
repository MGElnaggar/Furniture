import React from 'react';

import { useNavigate } from "react-router-dom";

import couch from "../../Assets/Furniture/couch.png";
import style from './PageIntro.module.css';

const PageIntro = ({introHeader, introParagraph ,showButtons , showImage}) => {

    const navigate = useNavigate();

    const shopNowBtn = () => {
        navigate("/shop");
    }

    return (
        <div className={style.pageIntro}>
            <div className={style.intro}>
                <div className={style.container}>

                    <div className={style.introTexts}>
                        <h1>{introHeader}</h1>
                        <p>{introParagraph}</p>

                        {showButtons && (
                            <div className={style.introTextsBtns}>
                                <button onClick={shopNowBtn}>Shop Now</button>
                                <button>Explore</button>
                            </div>
                        )}
                    </div>

                    {showImage && (
                        <div className={style.introPhotos}>
                            <img src={couch} alt="Couch" />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default PageIntro;