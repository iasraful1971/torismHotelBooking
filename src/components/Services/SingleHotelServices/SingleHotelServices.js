import React from 'react';
import { Link } from 'react-router-dom';
import './SingleHotelServices.css';
const SingleHotelServices = ({service}) => {
    const {name,address,url,descrition,quatity ,price ,owner ,_id} =service;
    return (
        <div className="single-service">
           <img src={url} alt="" />
           <h2>{name}</h2>
           <h4>{address}</h4>
           <p>{descrition}</p>
           <div className="pricing">
               <div><h5><i class="fas fa-swatchbook"></i> {quatity}</h5></div>
            <div><h5> <i class="fab fa-pied-piper"></i>  {price}</h5></div>
            </div>
            <h6>Host by {owner}</h6>
            <Link to={`/service-details/${_id}`}>
                <button className="book-btn">Book now</button>
            </Link>
        </div>
    );
};

export default SingleHotelServices;