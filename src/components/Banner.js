import React from 'react';


const Banner = () => {
    const url = window.location.pathname; 

    let bannerClass = 'Banner';
    if (url.includes('About')) {
        bannerClass += ' Banner-about';
    } else   {
        bannerClass += ' Banner-home';
    }
    return (
        <div className={`Banner ${bannerClass}`}>
            <h1 className="Banner__title">
            Chez vous, partout et ailleurs
            </h1>
        </div>
    );
};

export default Banner;