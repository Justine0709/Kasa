import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import { AboutList } from '../datas/AboutList';

const About = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <div className='collapse-contenair2'>
            <Collapse title={'Fiabilité'} Description={AboutList[0].Fiability}/>
            <Collapse title={"Respect"} Description={AboutList[1].Respect}/> 
            <Collapse title={"Service"} Description={AboutList[2].Service}/> 
            <Collapse title={"Securité"} Description={AboutList[3].Security}/> 
            </div>
            <Footer/>   
            </div>
    );
};

export default About;