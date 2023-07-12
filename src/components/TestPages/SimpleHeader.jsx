import React from 'react';
import logo from '../../assets/logo.svg';

const SimpleHeader = () => {
    return (
        <>
            <header>
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
            </header>
        </>
    );
};

export default SimpleHeader;
