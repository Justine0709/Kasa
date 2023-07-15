import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';


function Error404() {
  return (
    <div>
      <Header/>
      <div className='Page_error'>
      <img className='Page_error__logo'src='../404.png' alt='Logo erreur 404' />
      <p className='Page_error__comment'>Oups!La page que vous demandez n'existe plus</p>
      <NavLink className='Page_error__NavHome' to="/">
        <p>Retournez sur la page d'accueil</p>
      </NavLink>
      </div>

      <Footer />
    </div>
  );
}

export default Error404;
