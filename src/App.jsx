import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ForgotPassword from './pages/ForgotPassword';
import PricingPage from "./pages/PricingPage";
import Sidebar from "./pages/Sidebar";


function App() {
  const [user, setUser] = useState(null);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Load user from local storage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Save user to local storage whenever it changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleItemSelected = (item) => {
    console.log("App.js handleItemSelected called with:", item);
    setActiveItem(item);
    setShowSettings(item === 'settings'); // Show settings only when 'settings' is clicked
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setActiveItem('');  // Reset active item upon logout
  };

  return (
    <Router>
      <Navbar user={user} />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage setUser={setUser} />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                <div className="flex h-screen bg-gray-100">
                  <Sidebar
                    user={user}
                    onItemSelected={handleItemSelected}
                    onLogout={handleLogout}
                  />
                  <Dashboard
                    user={user}
                    setUser={setUser}
                    activeItem={activeItem}
                    handleItemSelected={handleItemSelected}
                  />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>Contact | Privacy Policy | Terms & Conditions</p>
      </footer>
    </Router>
  );
}

export default App;