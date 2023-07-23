import React from 'react';
import { useState } from 'react';

function Carousel({ images, title }) {

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((count + 1) % images.length);
  };
  const decrementCount = () => {
    setCount((count - 1 + images.length) % images.length);
  };
  const Image = images[count];
  return (
    <div className='Carousel'>
      <img className='Carousel__img' src={Image} alt={title} />
      {images.length > 1 && (
        <>
          <i
            onClick={decrementCount}
            className={`Carousel__chevron Carousel__chevron-left fa-solid fa-chevron-left`}
          ></i>
          <i
            onClick={incrementCount}
            className={`Carousel__chevron Carousel__chevron-right fa-solid fa-chevron-right`}
          ></i>
          <div className='Carousel__counter'>
          {count + 1}/{images.length}
        
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel