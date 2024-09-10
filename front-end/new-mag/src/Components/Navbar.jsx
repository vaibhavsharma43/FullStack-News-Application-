import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setCategory, currentCategory, hideNavbar, isLoggedIn }) => {
  const handleCategoryClick = (category) => {
    if (isLoggedIn) {
      setCategory(category);
    } else {
      alert("Please log in to view the news.");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${hideNavbar ? 'd-none' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <div
                className={`nav-link ${currentCategory === 'general' ? 'active' : ''}`}
                onClick={() => setCategory('general')}
              >
                General
              </div>
            </li>
            {['technology', 'business', 'health', 'science', 'sports', 'entertainment'].map((category) => (
              <li key={category} className="nav-item">
                <div
                  className={`nav-link ${currentCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
            <li className="nav-item">
              <Link to="/city-page" className="nav-link">City Page</Link>
            </li>
          </ul>
          {!isLoggedIn && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/signup" className="nav-link btn btn-outline-light">signup</Link>
              </li>
            </ul>
            
          )}
          {!isLoggedIn && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link btn btn-outline-light">Login</Link>
              </li>
            </ul>
            
          )}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
