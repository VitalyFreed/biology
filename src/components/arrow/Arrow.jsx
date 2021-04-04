import React from 'react';

import styles from './arrow.module.scss';

const Arrow = ({width, translateX, translateY, rotate}) => {
    return (
        <div
            className={styles.arrow}
            style={{width: width + 'px', transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`}}>
        </div>
    );
};

export default Arrow;