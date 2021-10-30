import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
   const {user ,logOUt} = useAuth();
    return (
       <>
       {/* tobar  */}

       <div className="top-bar">
            <div><i class="far fa-envelope"></i> <span>oratravel@yahoo.com</span></div>
            <div><i class="fas fa-map-marker-alt"></i><span>78 5th Ave, New York, NY 10011, USA</span></div>
            <div>{user.email ?<i class="fas fa-user-tie"></i>: <i class="fas fa-sign-in-alt"></i> }{user.email? <span style={{color:'#f2f2f2'}}>welcome, {user.displayName}</span>: <Link to="/login"><span>Sign-in</span></Link>}
            <div>{user.email &&<button style={{border:'none' ,padding:'5px 40px' , background:'pink' ,borderRadius:'10px'}} onClick={logOUt}>log out</button>}</div></div>
            
       </div>
       
       {/* navbar  */}
        <div>
            <Navbar className="navbar-container" expand="lg" sticky="top">
   <Container>
      <img className="logo" src={logo} alt="" />  
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <NavLink to="/home">Home</NavLink>
       <NavLink to="/allservices">Our Services</NavLink>
       <NavLink to="/affiliate">Affiliated with us</NavLink>
       {!user.email && <NavLink to="/login">Log in</NavLink>}
       <NavLink to="/home">Your Order</NavLink>
       <NavLink to="/home">Manage Inventory</NavLink>
    
      
        
      </Nav>
      <div className="nav-social2 text-right">
                        <i class="fab fa-quora"></i>
                        <i class="fab fa-staylinked"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>  
                        </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div></>
    );
};

export default Header;