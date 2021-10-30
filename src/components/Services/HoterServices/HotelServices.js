import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import SingleHotelServices from '../SingleHotelServices/SingleHotelServices';
import './Hotelservice.css';
const HotelServices = () => {
    const [services , setServices] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hotel_services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    if(services.length === 0){
       return <Spinner></Spinner> 
    }

    return (
        <div className="container whole-hotel-service my-5 py-5">
           
            <div className="services-container">
           
                {
                    services.map(service => <SingleHotelServices
                    key={service._id}
                    service={service}
                    ></SingleHotelServices>)
                }
            </div>
        </div>
    );
};

export default HotelServices;