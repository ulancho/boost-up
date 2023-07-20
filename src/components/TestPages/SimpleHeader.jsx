import React from 'react';
import logo from '../../assets/logo.svg';
import styles from '../../styles/SimpleHeader.module.css';

const SimpleHeader = () => {
    return (
        <>
            <header>
                <div className={styles.headerLogo}>
                    <img src={logo} alt="" />
                </div>
            </header>
        </>
    );
};

export default SimpleHeader;
