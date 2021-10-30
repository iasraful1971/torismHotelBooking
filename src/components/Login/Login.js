import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.webp';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './login.css';

const Login = () => {
    const {handleGoogleSign,handleEmail ,handlePassword ,handleForm ,error,success ,user}= useAuth();
    const location =useLocation();
    const histry = useHistory();
    const redireact = location.state?.from || '/home';
    console.log(location.state?.from);
    
    const handleGoogle = () => {
        handleGoogleSign()
        .then(result => {
                histry.push(redireact)
        })
    }

    return (
        <>
        <Header></Header>
        <div className="login pt-5 my-5">
            <div className="logged">
                <div className="text-center pb-3"><img className="log-logo" src={logo} alt="" /></div>
            <h2 className="log-h2">Sign In please</h2>
                <form onSubmit={handleForm} className="log-form">
                    
                    <input onBlur={handleEmail} placeholder="your email?" type="email" name="" id="" />
                    <input onBlur={handlePassword} placeholder="your password?" type="password" name="" id="" />
                   <div className="sub"> 
                   <input type="submit" value="continue" />
                      
                   </div>
                   {user.email? <p style={{color:'green'}}>{success}</p>:<p style={{color:'red'}}>{error}</p>}
               
                </form>
                <hr />
            <button className="google-btn" onClick={handleGoogle}><i class="fab fa-google"></i> google signin</button>
            </div>
        </div>
        <Footer></Footer></>
    );
};

export default Login;