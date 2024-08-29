// Services.js
import React from 'react';
import serviceImage1 from '../assets/wheel-alignment-bal.png'; // Replace with your actual image path
import serviceImage2 from '../assets/wheel-alignment.png'; // Replace with your actual image path

const servicesContainerStyle = {
  position: 'relative',
  margin: '30px auto',
  padding: '20px',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
  borderRadius: '15px',
  background: '#fff',
  width: '90vw', // 90% of the viewport width
  height: '60vh', // Adjusted to fit content
};

const cardStyle = {
  height: '50%', // Full height of the card container
  borderRadius: '15px',
  marginTop: '30px', // Margin between the cards
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for each card
};

const cardBodyStyle = {
  height: '40%', // Card body height distribution
};

const buttonStyle = {
  marginTop: '15px',
  padding: '10px 20px',
  backgroundColor: '#dc3545', 
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',

};
const cardHeading ={
    marginTop:'30px'
}
const headingStyle = {
    position: 'absolute',
    top: '10px',
    left: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
    padding: '5px 10px',
    borderRadius: '3px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333', // Dark text color
  };

function Services() {
  return (
    <div style={servicesContainerStyle} className="container">
        <h6 style={headingStyle}>Services offered by this dealer</h6>
      <div className="row h-100 justify-content-center">

        {/* Service Card 1 */}
        <div className="col-md-5 d-flex align-items-stretch mb-4 mb-md-0">
          <div className="card shadow-sm" style={cardStyle}>
            <img
              src={serviceImage1}
              className="card-img-top"
              alt="Service 1"
              
            />
            <div className="card-body d-flex flex-column justify-content-between" style={cardBodyStyle}>
              <h5 className="card-title" style={cardHeading}>Wheel Balancing</h5>
              <button
                className="btn btn-danger"
                style={buttonStyle}

              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="col-md-5 d-flex align-items-stretch">
          <div className="card shadow-sm" style={cardStyle}>
            <img
              src={serviceImage2}
              className="card-img-top"
              alt="Service 2"
            />
            <div className="card-body d-flex flex-column justify-content-between" style={cardBodyStyle}>
              <h5 className="card-title" style={cardHeading}>Wheel Alignment</h5>
              <button
                className="btn btn-danger"
                style={buttonStyle}
                
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
