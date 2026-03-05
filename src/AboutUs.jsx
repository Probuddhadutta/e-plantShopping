import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Paradise Nursery</h1>
      
      <p className="about-us-description">
        Welcome to Paradise Nursery, where green dreams come to life. We are dedicated to 
        bringing the beauty and serenity of nature into your home and workspace. Our 
        carefully curated collection features a wide variety of plants, from air-purifying 
        wonders to stunning decorative pieces, all grown with love and expert care.
      </p>

      <p className="about-us-content">
        Our mission is to provide high-quality, healthy plants that enhance your well-being 
        and elevate your surroundings. We believe that everyone should have access to the 
        therapeutic benefits of indoor gardening. Whether you are a seasoned "plant parent" 
        or just starting your journey, our team is here to support you with expert advice 
        and premium botanical selections.
      </p>

      <p className="about-us-content">
        At Paradise Nursery, we offer more than just plants; we offer a lifestyle. Our 
        services include personalized plant recommendations, care guides for every species 
        in our inventory, and a seamless shopping experience designed to deliver a slice 
        of paradise right to your doorstep. Join us in making the world a greener, 
        healthier place, one leaf at a time.
      </p>

      <div className="about-us-button-container">
        <button className="get-started-button" onClick={() => navigate("/products")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
