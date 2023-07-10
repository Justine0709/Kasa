import React from 'react';
import { AccommodationsList } from '../datas/AccommodationsLIst';
import CardAccomodation from '../components/CardAccomodation';
const Gallery = () => {
    return (
        <div className='Gallery'>
            
            {AccommodationsList.map((Accommodation) => (
					<ul key={Accommodation.id} >
						<CardAccomodation Accommodation={Accommodation}/>
					</ul>
				))}
                


           
        </div>
    );
};

export default Gallery;