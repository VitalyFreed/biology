import React from 'react';
import styles from './slide.module.scss';

const Slide = ({children}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <div className={styles['main-content']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Slide;