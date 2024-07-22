import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function About() {
  return (
    <>
      <div className="section section-download" data-background-color="black" id="about">
        <Container>
          {/* <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>About</h2>
              <h5 className="description">
                Welcome to Kandy Explore, your portal to the undiscovered wonders of this captivating city nestled in the heart of Sri Lanka. Our website is dedicated to unveiling the hidden gems off the beaten path, beckoning adventurers to explore Kandy's secrets. From secluded waterfalls to ancient temples, we offer comprehensive guidance and insider knowledge to navigate these remote locales with confidence. Our mission is to showcase Kandy's natural beauty and cultural heritage while empowering local guides to share their expertise with visitors. 
                Join us on this journey of discovery as we uncover the hidden treasures of Kandy, one adventure at a time.
              </h5>
            </Col>
          </Row> */}
          <br />
          <br />
          <Row className="">
            <Col lg="4" md="12">
              <h3>About</h3>
              <h5 className="description">
                Our website is dedicated to unveiling the hidden gems off the beaten path, beckoning adventurers to explore Kandy's secrets. Our mission is to showcase Kandy's natural beauty and cultural heritage while empowering local guides to share their expertise with visitors. 
                Join us on this journey of discovery as we uncover the hidden treasures of Kandy, one adventure at a time.
              </h5>
            </Col>
            <Col lg="4" md="12">
              <h3>Follow Us</h3>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href=""
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href=""
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href=""
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
            </Col>
            <Col lg="4" md="12">
              <h3>Contact Us</h3>
              <h5 className="description">
                We value your feedback and are here to assist you in any way we can. Please feel free to reach out to us with any questions, suggestions, or inquiries you may have.
                <br />
                <br />
                <b>Email:</b> info@kandyexplore.com
                <br />
                <b>Phone:</b> +94 77 694 4998
                <br />
                <b>Address:</b> 5/1 Boraluwela, Kurukohogama, Udispattuwa, Kandy, Sri Lanka
                <br />
                <br />
                Thank you for exploring Kandy with us!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
