import React from 'react';
import { useParams } from 'react-router-dom';
import { AccommodationsList } from '../datas/AccommodationsLIst';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Error404 from './Error404';



const Accommodation = () => {

    const { id } = useParams();
    


    const accommodationData = AccommodationsList.find(
        (accommodation) => accommodation.id === id
    );





    if (!accommodationData) {
      
        return <Error404 />;
    }

    return (

        <div className='Accommodation'>
            <Header />
            <Carousel images={accommodationData.pictures} title={accommodationData.title} />
            <div className='Accommodation__informations'>
                <div>
                    <h3 className='Accommodation__informations__title'>{accommodationData.title}</h3>
                    <h4 className='Accommodation__informations__subtitle'>{accommodationData.location}</h4>
                    <Tags tags={accommodationData.tags} />
                </div>
                <div className='contenairHostandRating'>
                    <div className='Accommodation__informations__host'>
                        <p className='Accommodation__informations__host__name'>{accommodationData.host.name}</p>
                        <img className='Accommodation__informations__host__picture' src={accommodationData.host.picture} alt={accommodationData.host.name} />
                    </div>
                    <Rating rating={accommodationData.rating} />
                </div>
            </div>
            <div className='collapse-contenair'>
            <Collapse  title={'Description'} Description ={accommodationData.description}/>
            <Collapse  title={'Equipements'} Description ={accommodationData.equipments}/>

            </div>
            <Footer />
        </div>
    );
};



export default Accommodation;




