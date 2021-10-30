import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const PersonDetails = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <>
         <Header></Header>

         <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src='' alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                    <div className="form-container">
                                <img style={{paddingBottom:'20px', width:'130px'}} src='/' alt="" />
                                <h2>Your Basic information</h2>
                             <form onSubmit={handleSubmit(onSubmit)}>
                             <input {...register("name")} placeholder="Your name?" />
                             <input {...register("email")} placeholder="Your email?" />
                             <input {...register("address")} placeholder="current location" />
                             <input {...register("city")} placeholder="city" />
                             <input type="number" {...register("zip")} placeholder="zip" />
                             <input type="number" {...register("phone")} placeholder="Cell phone number" />

                             <div className="text-center">
                                 
                             <input type="submit" value="continue for book" />
                             </div>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
         <Footer></Footer>
        </>
    );
};

export default PersonDetails;