import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner.jpg'
import '../styles/Home.css';

function Home() {
  return (
    <div className = "home" 
    style ={{backgroundImage: `url(${BannerImage})`}} >
      <div className = "headerContainer" >
        <h1>Millets</h1>
        <p>Healthy. Nutritious. Delicious.</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link> 
      </div>
    </div>
  )
}

export default Home
