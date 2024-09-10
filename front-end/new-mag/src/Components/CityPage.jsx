import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import PopularCityBoard from './PopularCityBoard';
import './Css/PopularCity.css';
import Navbar from "../Components/Navbar";
const CityPage = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();  
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoggedIn(true);
    } else {
      alert('Please login to access the City Page.');
      navigate('/login');  
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null; 
  }

  return (
    <div>
      <Navbar setCategory={setCategory} currentCategory={category} hideNavbar={true} />
      <div className='container'>
        <button className="btn btn-primary mb-3" onClick={() => window.history.back()}>Back to Home</button>
        <PopularCityBoard />
      </div>
    </div>
  );
};

export default CityPage;
