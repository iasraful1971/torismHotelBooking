import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import HotelServices from '../HoterServices/HotelServices';

const Allservice = () => {
    return (
        <><Header></Header> 
           <div>
           
            <HotelServices></HotelServices>
          
           </div>
           <Footer></Footer>
        </>
    );
};

export default Allservice;