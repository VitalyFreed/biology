import React from 'react';

import styles from './transition.module.scss';

import classNames from "classnames";

const Transition = ({handleChangeSlide, currentSlide}) => {
    return (
        <div className={styles.transition}>
            {[1,2,3].map((_, i) => <div key={i} onClick={e => handleChangeSlide(i + 1)}
                                       className={classNames(styles['transition__circle'],
                                           currentSlide === i + 1 && styles['transition__circle-active'])}>
            </div>)}
        </div>
    );
};

export default Transition;