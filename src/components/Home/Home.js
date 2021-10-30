import React from 'react';
import world from '../../images/world-img.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HotelServices from '../Services/HoterServices/HotelServices';
import './Home.css';

const Home = () => {
    return (
        <div>
            <>
            <Header></Header>
                <div className="banner">
                    <h1>TRAVEL</h1>
                    <h3>Book Fights , Hotel and Holidays pakages</h3>
                        <div className="book-btn">
                            <button><i class="fas fa-key"></i> Hotel</button>
                            <button className="btn-2"><i class="fas fa-shopping-bag"></i>Pakages</button>
                        </div>
                </div>
                <div className="agency-about py-5 my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <h4>Them Best Great Tourism is Right Here</h4>
                                <h5>Better Travel Packages like any other</h5>
                                <br />
                                <p>Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Dummy text ever since the 1500s, when an unknown printer took. A galley of type.</p>
                                <button className="adventure">Join Adventures</button>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <img className="img-fluid" src={world} alt="" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <h4>Our Awards</h4>
                                <br />
                                <p>Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Dummy text ever since the 1500s, when an unknown printer took. A galley of type. Scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-services">
                    <h2 style={{textAlign:'center' , color:'purple' ,textTransform:'uppercase' , fontSize:'25px'}}>Our Services</h2>
                    <HotelServices></HotelServices>
                </div>
            <Footer></Footer></>
        </div>
    );
};

export default Home;