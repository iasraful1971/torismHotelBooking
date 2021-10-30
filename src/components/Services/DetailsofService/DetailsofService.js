import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';


const DetailsofService = () => {
    const {serviceId} = useParams();
    const [details , setDetails] =useState([]);
    useEffect(() => {
        const url = `https://dry-refuge-90398.herokuapp.com/hotel_services/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
}, [])
    return (
        <>
            <Header></Header>
            <div className="service-container py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 ">
                               <div className="service-details">
                               <img className="img-fluid" src={details.url} alt="" />
                               <h2>{details.name}</h2>
                               <p>{details.descrition}</p>
                               </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="cart">
                           
                            <h1>About This hotel</h1>
                            <p>licence: {details._id}</p>
                            <h5>Resort name:{details.name}</h5>
                            <h5>Location:{details.address}</h5>
                            <h5>Vacency seat:{details.quantity}</h5>
                            <h5>Cost:{details.price}</h5>
                            <Link to="/person-info">
                            <button className="order">Place Order</button>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer></Footer>
        </>
    );
};

export default DetailsofService;