import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from "../logo1.svg";
import '../style/Navbar.css';

class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="Navbar navbar-expand-sm  navbar-dark px-sm-5" id="content">
               <div id="kiri">
               <Link to="/">
                   <img src={logo} alt="store" className="navbar-brand"/>
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">
                           Products
                       </Link>
                   </li>
               </ul>
               </div>
               <div id="kanan">
               <Link to="/cart" className="ml-auto">
                   <ButtonContainer>
                       <span className="ml-auto">
                            <i className="fas fa-cart-plus"/>
                       </span>
                       MY CART 
                   </ButtonContainer>
               </Link>
               </div>
           </NavWrapper>
        );
    }
}

export default Navbar;


const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-tranform:capitalize;
    }
`;



