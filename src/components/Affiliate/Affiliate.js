import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import aff from '../../images/affiliate.jpeg';
import logo from '../../images/logo.png';
import aff1 from '../../images/undraw_hiring_re_yk5n.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Afficate.css';
const Affiliate = () => {

         const { register, handleSubmit , reset} = useForm();
         const onSubmit = data => {
            console.log(data);
            axios.post('https://dry-refuge-90398.herokuapp.com/hotel_services' ,data)
            .then(res =>{
                console.log(res);
                if(res.data.insertedId){
                    alert("Congratulations! Your Hotel information added in our community");
                    reset();
                }
            })
         }
    return (
        <>
        <Header></Header>
        <div className="affiliated my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h1>Affiliated with our team</h1>
                            <h5>Add your hotel services</h5>
                            <br />
                            <p>Securities markets around the world have rules that concern affiliates of the businesses they regulate. Here again, these are complex rules that need to be analyzed by local experts on a case-by-case basis. Examples of rules enforced by the SEC include:</p>
                            <ul>
                                <li>Rule 102 of Regulation M prohibits issuers, selling security holders, and their affiliated purchasers from bidding for, purchasing, or attempting to induce any person to bid for or purchase.</li>
                                <li>Before disclosing nonpublic personal information about a consumer to a nonaffiliated third party, a broker-dealer must first give a consumer an opt-out notice and a reasonable opportunity to opt out of the disclosure.</li>
                                <li>Broker-dealers must maintain and preserve certain information regarding those affiliates.</li>
                            </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img  src={aff} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row py-5 my-5 all-form">
                    <div className="col-md-6 col-12">
                    <img style={{width:'450px'}} src={aff1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="form-container">
                                <img style={{paddingBottom:'20px', width:'130px'}} src={logo} alt="" />
                                <h2>Add your hotel information</h2>
                             <form onSubmit={handleSubmit(onSubmit)}>
                             <input {...register("owner")} placeholder="host name" />
                             <input {...register("name")} placeholder="hotel name" />
                             <input {...register("address")} placeholder="hotel location" />
                             <input {...register("url")} placeholder="hotel image url" />
                             <textarea {...register("descrition")} placeholder="Hotel details"/>
                             <input type="number" {...register("quatity")} placeholder="vacancy rooms number?" />
                             <input type="number" {...register("price")} placeholder="booking price?" />
                             <div className="text-center">
                                 
                             <input type="submit" />
                             </div>
                             </form>
                        </div>
                    </div>
                </div>

                {/* react hook form  */}





            </div>
        </div>
        
         <Footer></Footer>   
        </>
    );
};

export default Affiliate;