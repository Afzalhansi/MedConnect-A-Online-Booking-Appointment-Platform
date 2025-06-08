import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%] relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
      {/* Chatbot Icon */}
      <a
        href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/10/09/20241210091314-HOBU6KCO.json"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-500 rounded-full shadow-lg p-4 cursor-pointer hover:bg-blue-600"
      >
        <img
          src="chatbot.jpg"
          alt="Chatbot Icon"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default App;