import React from "react";
import { Container } from "reactstrap";


function IndexHeader() {

  return (
    <>
      <div className="page-header clear-filter" id="home">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}

        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/redmark.png")}
            ></img> */}
            <h1 className="h1-seo">Discover story-worthy travel moments</h1>
            <h3>Make memories on your next trip</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
