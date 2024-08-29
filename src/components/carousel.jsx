// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lamboImage from '../assets/lamborghini-aventador-1598283187.jpg'

// Inline CSS for the carousel container, 3D shadow effect, and heading
const carouselContainerStyle = {
  position: 'relative',
  margin: '30px auto',
  padding: '20px',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
  borderRadius: '15px',
  background: '#fff',
  width: '90vw', // 90% of the viewport width
  height: '30vh', // 30% of the viewport height
  overflow: 'hidden', // Hide overflow to keep the carousel tidy
};

const carouselSlideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // Ensure the slide takes full height of the container
  padding: '0 10px', // Add padding to space out the images
};

const imageStyle = {
    marginLeft:'50px',
    marginTop:'40px',
  width: '100px', // Width of each image
  height: '70px', // Height of each image
  objectFit: 'cover', // Ensure the image covers the container
  borderRadius: '8px', // Optional: rounded corners for images
};

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

function Carousel() {
  // Settings for the carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Show navigation arrows
    dots: false, // Hide dots
    touchThreshold: 20, // Sensitivity for touch scroll
    swipe: true, // Enable swipe
    draggable: true, // Enable drag
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjust for very small screens
        },
      },
    ],
  };
 
 
  // Array of dummy image sources
  const images = Array.from({ length: 20 }, (_, index) => `https://via.placeholder.com/50?text=Img+${index + 1}`);

  return (
    <div style={carouselContainerStyle}>
      <div style={headingStyle}>Deals In</div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={carouselSlideStyle}>
            <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
