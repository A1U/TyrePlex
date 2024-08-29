import React from 'react';
import logo from '../assets/TP-logo-mbl.png';
import facebookIcon from '../assets/facebook.png'; // Facebook icon
import instagramIcon from '../assets/instagram.png'; // Instagram icon

function Footer() {
  return (
    <>
      {/* Top section with light yellow background */}
      <div className="py-4" style={{ backgroundColor: '#fff9c4' }}>
        <div className="container text-center">
          <h2>Have a question about Tyres?</h2>
          <p>Get an answer in 24 hours from our experts</p>
          <input type="text" className="form-control mt-3" placeholder="Ask or search your question" />
        </div>
      </div>

      {/* Bottom section with three columns and white background */}
      <div className="py-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row text-center text-md-start">
            {/* First Column: Logo and Social Icons */}
            <div className="col-md-3 mb-4">
              <img src={logo} alt="Tyre Logo" style={{ maxWidth: '150px' }} className="mb-3" />
              <div>
                <img src={facebookIcon} alt="Facebook" style={{ width: '30px', marginRight: '10px' }} />
                <img src={instagramIcon} alt="Instagram" style={{ width: '30px' }} />
              </div>
            </div>

            {/* Second Column: Footer Links */}
            <div className="col-md-3 mb-4">
              <h5>About Us</h5>
              <p><a href="#" className="text-decoration-none text-primary">Who We Are</a></p>
              <p><a href="#" className="text-decoration-none text-primary">Are You A Tyre Dealer?</a></p>
            </div>

            {/* Third Column: Footer Links */}
            <div className="col-md-3 mb-4">
              <h5>Support</h5>
              <p><a href="#" className="text-decoration-none text-primary">Privacy Policy</a></p>
              <p><a href="#" className="text-decoration-none text-primary">Terms Of Use</a></p>
              <p><a href="#" className="text-decoration-none text-primary">Shipping & Return Policy</a></p>
            </div>

            {/* Fourth Column: Contact */}
            <div className="col-md-3 mb-4">
              <h5>Contact</h5>
              <p><a href="#" className="text-decoration-none text-primary">Contact Us</a></p>
              <p><a href="#" className="text-decoration-none text-primary">Careers</a></p>
            </div>
          </div>

          {/* Centered Copyright Section */}
          <div className="text-center mt-4">
            <p>&copy; 2024 Tyre Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
