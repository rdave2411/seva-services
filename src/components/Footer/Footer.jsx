// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <nav className='footer'>
      <div className='footer-links'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/news'>News</Link></li>
        </ul>
      </div>
      <div className='footer-links'>
        <ul>
          <li><Link to='/jobs'>Jobs</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/terms-and-conditions'>Terms and Conditions</Link></li>
          <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
        </ul>
      </div>
      <div className='social-link'>
        <a href='https://your-social-media-link.com' target='_blank' rel='noopener noreferrer'>
          Social Media
        </a>
      </div>
    </nav>
  );
}

export default Footer;