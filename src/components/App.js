import React, {useEffect, useState} from "react";

import styles from './app.module.scss';

import SlidesContainer from "./slides/SlidesContainer";
import Transition from "./transition/Transition";

function App() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [translate, setTranslate] = useState(0);

    const handleChangeSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setTranslate(translate => -((currentSlide - 1) * document.body.getBoundingClientRect().height));
    }, [currentSlide]);

    return (
        <div className={styles.slider}>
            <div className={styles.slides} style={{transform: `translateY(${translate}px)`}}>
                <SlidesContainer/>
                <SlidesContainer/>
                <SlidesContainer/>
            </div>
            <Transition handleChangeSlide={handleChangeSlide} currentSlide={currentSlide}/>
        </div>
    );
}

export default App;
