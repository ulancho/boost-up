import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './HeaderTest.module.css';

const HeaderTest = () => {
    return (
        <header>
            <div className={styles.headerLogo}>
                <img src={logo} alt="" />
            </div>
        </header>
    );
};

export default HeaderTest;
