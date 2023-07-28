import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Image from './IMG.png';


const Home = () => {
    const texte ='Chez vous, partout et ailleurs'
    return (
        <div>
            <Header />
            <Banner image={Image} texte={texte} />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;