import React from 'react';
import TyreImage from '../assets/img_main.png';
import apolloImage from '../assets/apollo.png'; // Replace with actual image

const containerStyle = {
  padding: '20px',
  margin: '0 auto',
  width: '90vw',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const selectStyle = {
  marginLeft: '10px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const cardStyle = {
  position: 'relative',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '15px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  height: '350px', // Adjusted to accommodate content
};

const topLeftImageStyle = {
  position: 'absolute',
  top: '5px',
  left: '5px',
  width: '60px', // Adjust size as needed
  height: '60px',
};

const warrantyBadgeStyle = {
  position: 'absolute',
  top: '2px',
  right: '2px',
  width: '100px', // Adjust size as needed
  height: 'auto',
};

const bottomRightImageStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  width: '80px', // Adjust size as needed
  height: 'auto',
};

const cardContentStyle = {
  marginTop: '70px', // To push content below the top-left image
  textAlign: 'left',
};

const priceStyle = {
  color: '#28a745', // Green color for offer
};

function TyresSold() {
  // Dummy data for tyres (replace with actual data)
  const tyres = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    brand: `Amazor 4G Life ${index + 1}`,
    model: `145/80 R13 ${index + 1}`,
    price: `$${(index + 1) * 50}`,
    reviews: 321,
    rating: 4.5,
    offer: '10% Off',
  }));

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <h1>Tyres Sold By This Dealer</h1>
        <div>
          <select style={selectStyle}>
            <option value="">Filter By</option>
            <option value="">Apollo</option>
            <option value="">BEDROCK</option>
            <option value="">Birla</option>
            <option value="">Bridgestone</option>
            <option value="">CEAT</option>
          </select>
          <select style={selectStyle}>
            <option value="">Most Popular</option>
            <option value="">Price High To Low</option>
            <option value="">Price Low To High</option>
          </select>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="row">
        {tyres.map((tyre) => (
          <div key={tyre.id} className="col-md-3 mb-4">
            <div style={cardStyle}>
              {/* Top Left Image */}
              <img src={apolloImage} alt="Top Left" style={topLeftImageStyle} />

              {/* Warranty Badge */}
              <span className="badge text-bg-warning" style={warrantyBadgeStyle}>
                5 Year Warranty
              </span>

              {/* Card Content */}
              <div style={cardContentStyle}>
                <h5>{tyre.brand}</h5>
                <p>{tyre.model}</p>
                <p>Price: {tyre.price}</p>
                <button className="btn btn-success">{tyre.rating} ★</button>
                <p>{tyre.reviews} Reviews</p>
                <p style={priceStyle}>{tyre.offer}</p>
              </div>

              {/* Bottom Right Image */}
              <img src={TyreImage} alt="Tyre" style={bottomRightImageStyle} />
            </div>
          </div>
        ))}
      </div>
      <button type="button" class="btn btn-outline-light " style={{ color:'black'
      }}>View More</button>
    </div>
  );
}

export default TyresSold;
