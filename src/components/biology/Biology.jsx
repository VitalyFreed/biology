import React from 'react';
import classNames from "classnames";

import styles from './biology.module.scss';

import {organs} from "../organsData";

import intestines from "../../assets/img/organs/intestines.png";
import infection from "../../assets/img/organs/infection.png";
import stomach from "../../assets/img/organs/stomach.png";
import beta from "../../assets/img/organs/beta.png";
import kidneys from "../../assets/img/organs/kidneys.png";
import brain from "../../assets/img/organs/brain.png";
import capa from "../../assets/img/organs/capa.png";
import musle from "../../assets/img/organs/musle.png";
import lipid from "../../assets/img/organs/lipid.png";

import Arrows from "../arrow/Arrows";

const Biology = () => {
    return (
        <div className={styles.organs}>
            <h1 className={styles.title}>Звенья патогенеза СД2</h1>
            <div className={styles.columns}>
                <div className={classNames(styles.column, styles.first)}>
                    <div className={styles.container}>
                        <div className={styles.intestines}>
                            <div className={styles.circle}>
                                <img src={intestines} alt='intestines'/>
                            </div>
                            <div className={styles['title-group']}>
                                <span className={styles['title-group__number']}>{organs[7].number}</span>
                                <span className={styles['title-group__title']}>{organs[7].title}</span>
                            </div>
                        </div>
                        <div className={styles.infection}>
                            <div className={styles.circle}>
                                <img src={infection} alt='infection'/>
                            </div>
                            <div className={styles['title-group']}>
                                <span className={styles['title-group__number']}>{organs[8].number}</span>
                                <span className={styles['title-group__title']}>{organs[8].title}</span>
                            </div>
                        </div>
                        <p className={classNames(styles['title-group__title'], styles.amelyn)}>↓ амилин</p>
                        <div className={styles.stomach}>
                            <div className={styles.circle}>
                                <img src={stomach} alt='stomach'/>
                            </div>
                            <div className={styles['title-group']}>
                                <span className={styles['title-group__number']}>{organs[9].number}</span>
                                <span className={styles['title-group__title']}>{organs[9].title}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.column, styles.second)}>
                    <div className={styles.container}>
                        <div className={styles.beta}>
                            <div className={styles.circle}>
                                <img src={beta} alt='beta'/>
                            </div>
                            <Arrows/>
                            <div className={styles['title-group']}>
                                <span className={styles['title-group__number']}>{organs[0].number}</span>
                                <span className={styles['title-group__title']}>{organs[0].title}</span>
                            </div>
                        </div>
                        <div className={styles['incret-row']}>
                            <div className={styles.incret}>
                                <div className={styles['title-group']}>
                                    <span className={styles['title-group__number']}>{organs[1].number}</span>
                                    <span className={styles['title-group__title']}>{organs[1].title}</span>
                                </div>
                            </div>
                            <div className={styles.defect}>
                                <div className={styles['title-group']}>
                                    <span className={styles['title-group__number']}>{organs[2].number}</span>
                                    <span className={styles['title-group__title']}>{organs[2].title}</span>
                                </div>
                            </div>
                        </div>
                        <p className={classNames(styles['title-group__title'], styles['glukagon'])}>↑ глюкагон</p>
                        <p className={classNames(styles['title-group__title'], styles['giperglikemiya'])}>Гипергликемия</p>
                        <div className={styles.kidneys}>
                            <div className={styles.circle}>
                                <img src={kidneys} alt='kidneys'/>
                            </div>
                            <div className={styles['title-group']}>
                                <span className={styles['title-group__number']}>{organs[10].number}</span>
                                <span className={styles['title-group__title']}>{organs[10].title}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.column, styles.third)}>
                    <div className={styles.container}>
                        <div className={styles.brain}>
                            <div className={styles.circle}>
                                <img src={brain} alt='brain'/>
                            </div>
                            <div className={styles['title-group']}>
                                <span className={styles['title-group__number']}>{organs[6].number}</span>
                                <span className={styles['title-group__title']}>{organs[6].title}</span>
                            </div>
                        </div>
                        <div className={styles['insuline-block']}>
                            <p className={classNames(styles['title-group__title'], styles['insuline'])}>Инсулинорезистентность</p>
                            <div className={styles.capa}>
                                <div className={styles.circle}>
                                    <img src={capa} alt='capa'/>
                                </div>
                                <div className={styles['title-group']}>
                                    <span className={styles['title-group__number']}>{organs[5].number}</span>
                                    <span className={styles['title-group__title']}>{organs[5].title}</span>
                                </div>
                            </div>
                            <div className={styles.musle}>
                                <div className={styles.circle}>
                                    <img src={musle} alt='musle'/>
                                </div>
                                <div className={styles['title-group']}>
                                    <span className={styles['title-group__number']}>{organs[4].number}</span>
                                    <span className={styles['title-group__title']}>{organs[4].title}</span>
                                </div>
                            </div>
                            <div className={styles.lipid}>
                                <div className={styles.circle}>
                                    <img src={lipid} alt='lipid'/>
                                </div>
                                <div className={styles['title-group']}>
                                    <span className={styles['title-group__number']}>{organs[3].number}</span>
                                    <span className={styles['title-group__title']}>{organs[3].title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biology;