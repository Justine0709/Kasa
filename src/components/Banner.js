import React from 'react';



const Banner = ({image,texte}) => {
    

    return (
        <div className='Banner'>
            <div className='Banner__text'>{texte}</div>
            <img className="Banner__img" src={image} alt="paysage"></img>
        </div>

    );
};

export default Banner;