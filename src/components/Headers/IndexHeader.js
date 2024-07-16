import React from "react";
import { Container } from "reactstrap";
import videoFile from "assets/video/v1.mp4";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header clear-filter"
        id="home"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              zIndex: -1,
              transform: "translate(-50%, -50%)",
            }}
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Container>
          <div
            className="content-center brand"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
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
