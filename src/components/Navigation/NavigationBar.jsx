// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/logo.png';

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Seva Services</h2>
      </div>
      <ul>
        <li><Link to='/seva-services
        '>Home</Link></li>
        <li className="dropdown">
          <Link to='/services'>Services</Link>
          <ul className="dropdown-content">
            <li><Link to='/service1'>Domestic Assistance</Link></li>
            <li><Link to='/service2'>Personal Care </Link></li>
            <li><Link to='/service3'>Meal Preparation </Link></li>
            <li><Link to='/service4'>In-Home Respite </Link></li>
            <li><Link to='/service5'>Group and Centre-Based Activities </Link></li>
            <li><Link to='/service6'>Transport Assistance </Link></li>
            <li><Link to='/service7'>Nursing Services </Link></li>
          </ul>
        </li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/referral'>Referral</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
