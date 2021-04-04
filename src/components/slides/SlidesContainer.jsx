import React, {useEffect, useRef, useState} from 'react';

import thumb from '../../assets/img/thumb.png';

import styles from './slides.module.scss';

import Slide from "../slide/Slide";
import Biology from "../biology/Biology";

const SlidesContainer = () => {
    const [thumbWidth, setThumbWidth] = useState(1080);
    const [thumbStyles, setThumbStyles] = useState({top: '-25px', left: '1050px'});
    const [translate, setTranslate] = useState(0);

    useEffect(() => {
        const ts = parseInt(thumbStyles.left);
        if (ts > 0 && ts < 350) setTranslate(0);
        if (ts >= 350 && ts < 700) setTranslate(-100);
        if (ts >= 700 && ts < 1080) setTranslate(-200);
    }, [thumbStyles]);

    const ref = useRef();

    const handleMouseDown = e => {
        e.preventDefault();

        const elem = e.target;

        const cb = e => {
            const rect = ref.current.getBoundingClientRect().x;
            const x = e.clientX - rect;
            const elemWidth = elem.getBoundingClientRect().width;
            setThumbStyles(thumbStyles => {
                if (x > 1080 || x < 0) return thumbStyles;
                return {
                    top: '-25px',
                    left: x - Math.round(elemWidth / 2) + 'px'
                };
            });
            setThumbWidth(thumbWidth => {
                if (x > 1080 || x < -20) return thumbWidth;
                return x;
            });
        };

        document.addEventListener('mousemove', cb);
        document.addEventListener('mouseup', e => {
            document.removeEventListener('mousemove', cb);
        });
    };

    return (
        <div className={styles.biology}>
            <div className={styles.slider} style={{transform: `translateX(${translate}%)`}}>
                <Slide>
                    <h1 style={{color: '#fff'}}>Какой-то слайд 3</h1>
                </Slide>
                <Slide>
                    <h1 style={{color: '#fff'}}>Какой-то слайд 2</h1>
                </Slide>
                <Slide>
                    <Biology/>
                </Slide>
            </div>
            <div className={styles.thumb}>
                <div className={styles['thumb__container']}>
                    <div className={styles['thumb__line']} style={{width: thumbWidth}} ref={ref}>
                        <img src={thumb} alt="thumb" onMouseDown={handleMouseDown} style={thumbStyles}/>
                    </div>
                </div>
                <div className={styles['thumb__years']}>
                    <span>1988</span>
                    <span>2009</span>
                    <span>2016</span>
                </div>
            </div>
        </div>
    );
};

export default SlidesContainer;