import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Places from "./home/Places.js";
import Carousel from "./home/Carousel.js";
import Information from "./home/Information.js";
// import SignUp from "./index-sections/SignUp.js";
import About from "./home/About.js";
import Map from "./home/Map/Map.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Map />
          <Places />

          <Carousel />
          <Information />
          {/* <SignUp /> */}
          <About />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
