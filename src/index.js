import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";

// pages for this kit
import Index from "views/Index.js";
import SignUp from "views/User/SignUp";
import Login from "views/User/Login";
import ProfilePage from "views/User/ProfilePage";
import DetailPage from "views/home/DetailPage";
import AdminLogin from "views/home/Admin/AdminLogin";
import Dashboard from "views/home/Admin/Dashboard/Dashboard";
import KandyMap from "views/home/Map/Map";
import Contact from "views/home/Contact";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/article/:articleId" element={<DetailPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/map" element={<KandyMap />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/profilePage/:id" element={<ProfilePage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      <Route path="/dashboard" element={<Dashboard />} />


      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
