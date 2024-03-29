import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";

import Maligawa from "views/places/maligawa";
import Garden from "views/places/garden";
import Bahiravakanda from "views/places/bahirawakanda";
import ViewPoint from "views/places/viewPoint";
import RoyalPark from "views/places/royalPark";
import GaradiElla from "views/places/garadiElla";
import Yahangala from "views/places/Yahangala";
import Hanthana from "views/places/hanthana";
import Ambuluwawa from "views/places/ambuluwawa";
import SignUp from "views/index-sections/SignUp";
import Udawaththakale from "views/places/udawaththaKale";
import Peradeniyacampus from "views/places/peradeniyaCampus";
import Bellwood from "views/places/BellWood";
import Login from "views/index-sections/Login";
import ProfilePage from "views/examples/ProfilePage";
// import ProfilePage from "views/examples/ProfilePage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route exact path="/maligawa" element={<Maligawa />} />
      <Route exact path="/garden" element={<Garden />} />
      <Route exact path="/bahiravakanda" element={<Bahiravakanda />} />
      <Route exact path="/viewPoint" element={<ViewPoint />} />
      <Route exact path="/royalPark" element={<RoyalPark />} />
      <Route exact path="/garadiElla" element={<GaradiElla />} />
      <Route exact path="/yahangala" element={<Yahangala />} />
      <Route exact path="/hanthana" element={<Hanthana />} />
      <Route exact path="/ambuluwawa" element={<Ambuluwawa />} />
      <Route exact path="/udawaththakale" element={<Udawaththakale />} />
      <Route exact path="/peradeniyacampus" element={<Peradeniyacampus />} />
      <Route exact path="/Bellwood" element={<Bellwood />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      {/* <Route path="/nucleo-icons" element={<NucleoIcons />} /> */}
      {/* <Route path="/landing-page" element={<LandingPage />} /> */}
      {/* <Route path="/profile-page" element={<ProfilePage />} /> */}

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
