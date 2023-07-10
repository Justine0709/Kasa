import React from 'react';
import { useNavigate } from 'react-router-dom';


const CardAccomodation = ({ Accommodation }) => {
  const navigate = useNavigate();




  
  const handleClick = () => {
   
    navigate(`/Accommodation/${Accommodation.id}`);
  
   
    
  };
  
  


  return (
    <ul className='Card' onClick={handleClick}>
      <div>
        <img className='Card__img' src={Accommodation.cover} alt={Accommodation.title} />
        <p className="Card__title">{Accommodation.title}</p>
      </div>
    </ul>
  );
};

export default CardAccomodation;

