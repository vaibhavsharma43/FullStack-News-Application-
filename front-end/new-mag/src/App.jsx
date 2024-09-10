import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import CityPage from "./Components/CityPage";
import Login from "./Components/Form/Login";
import Signup from "./Components/Form/Signup";

const App = () => {
  const [category, setCategory] = useState("general");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("jwt get strored in the console")
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="FrontPage">
        <Navbar setCategory={setCategory} currentCategory={category} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<NewsBoard category={category} isLoggedIn={isLoggedIn} />} />
          <Route path="/city-page" element={<CityPage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/:category" element={<NewsBoard category={category} isLoggedIn={isLoggedIn} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
