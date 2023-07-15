import React from 'react';
import { useState } from 'react';

const Collapse = ({ Description, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const url = window.location.pathname;

  let collapseClass = 'collapse';
    if (url.includes('Accommodation')) {
      collapseClass += '--accommodation';
    } else   {
      collapseClass += '';
    }


  return (
    <div className={collapseClass}>
      <div className="collapse__title">
        <h5>{title}</h5>
        <i
          onClick={toggleOpen}
          className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
        ></i>
      </div>
      {isOpen && (
        <div className="collapse__text">
          {typeof Description === 'string' ? (
            <p>{Description}</p>
          ) : (
            <ul>
              {Description.map((item, index) => (
                <ul key={index}>{item}</ul>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
