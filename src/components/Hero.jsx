// Hero.js
import React from 'react';
import ceatImage from '../assets/CEAT.jpg';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

function Hero() {
  // Inline styles for the 3D shadow effect
  const heroContainerStyle = {
    position: 'relative',
    margin: '30px 50px', 
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
    borderRadius: '15px',
    background: '#fff',
    zIndex: 1,
  };

  // Dark yellow color for stars
  const starColor = '#F4B400'; 

  // Small user profile image size
  const userProfileImageStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover', // Ensure the image covers the space properly
  };

  return (
    <>
      <div style={heroContainerStyle} className="hero-container">
        {/* Top Section */}
        <section className="row align-items-center py-5">
          {/* Left Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="h3 d-flex align-items-center">
              SHREE HEMKUNT TYRES AND SERVICES
              {/* Verified Badge */}
              <span className="ms-3 badge bg-success d-flex align-items-center">
              <i class="ri-verified-badge-fill">Verified</i>
              </span>
            </h2>
            {/* Rating Button and Stars */}
            <div className="mt-3 d-flex align-items-center">
              <button className="btn btn-success d-flex align-items-center me-3">
                4.5
              </button>
              <div>
                <i className="ri-star-fill" style={{ color: starColor }}></i>
                <i className="ri-star-fill" style={{ color: starColor }}></i>
                <i className="ri-star-fill" style={{ color: starColor }}></i>
                <i className="ri-star-fill" style={{ color: starColor }}></i>
                <i className="ri-star-line"></i>
              </div>
            </div>
            <p className="mt-3">
              <i className="ri-map-pin-line"></i> PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM. Ghaziabad, Uttar Pradesh, 201014
            </p>
            <p className="mt-2">
              <i className="ri-time-line"></i> Open - Monday to Sunday - 10:00 AM to 8:00 PM
            </p>
            <button type="button" className="btn btn-outline-danger">Get Directions</button>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 d-flex justify-content-around">
            <img
              src={ceatImage}
              alt="Project 1"
              className="img-fluid shadow-sm rounded"
              style={{ width: '250px', height: 'auto', marginRight: '15px' }}
            />
            <img
              src={ceatImage}
              alt="Project 2"
              className="img-fluid shadow-sm rounded"
              style={{ width: '250px', height: 'auto', marginLeft: '15px' }}
            />
          </div>
        </section>

        {/* Bottom Section */}
        <section>
          <h6 className="text-center mb-4">2278 Google Reviews</h6>
          <div className="row">
            {/* Review Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex">
                  <img
                    src={user1}
                    alt="User Profile"
                    className="rounded-circle me-3"
                    style={userProfileImageStyle}
                  />
                  <div>
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">
                      "The team did an excellent job on our project. Their creativity and professionalism exceeded our expectations!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex">
                  <img
                    src={user2}
                    alt="User Profile"
                    className="rounded-circle me-3"
                    style={userProfileImageStyle}
                  />
                  <div>
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text">
                      "Amazing experience working with this team! They delivered on time and provided great communication throughout the process."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex">
                  <img
                    src={user3}
                    alt="User Profile"
                    className="rounded-circle me-3"
                    style={userProfileImageStyle}
                  />
                  <div>
                    <h5 className="card-title">Alex Johnson</h5>
                    <p className="card-text">
                      "Great team to work with! They delivered high-quality work and were very responsive to our needs."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
