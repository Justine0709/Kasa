import React from 'react';

function Tags({ tags }) {
  return (
    <div className='Contenair'>
      {tags.map((tag, index) => (
        <ul className='Contenair__tags' key={index}>{tag}</ul>
      ))}
    </div>
  );
}

export default Tags;