import React from 'react';
import { Card, Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from "assets/img/bg4.jpg";

const Contact = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar color="dark" light expand="md" style={{ backgroundColor: 'green' }}>
        <Container>
          <NavbarBrand href="/" style={{ color: "gold", fontFamily: "fantasy" }}>
            Kandy Travel Guider
          </NavbarBrand>
        </Container>
      </Navbar>

      {/* Main Content Section */}
      <Container style={{ marginTop: '20px' }}>
      <h3>Contact Us</h3>
      <img src={contactImage} alt="Contact Us" style={{ width: '100%', maxWidth: '100%', marginBottom: '20px' }} />
<Card style={{margin:"10px", padding:"10px"}}>
      <h4>  We value your feedback and are here to assist you in any way we can. Please feel free to reach out to us with any questions, suggestions, or inquiries you may have.</h4>
        <Row>
          <Col lg="4" md="12" style={{ marginBottom: '20px' }}>
           
            <h5 style={{ marginBottom: '20px' }}>
            
              <br /><br />
              <b><FaEnvelope /> Email:</b> info@kandyexplore.com
              <br />
              <b><FaPhone /> Phone:</b> +94 77 694 4998
              <br />
              <b><FaMapMarkerAlt /> Address:</b> 5/1 Boraluwela, Kurukohogama, Udispattuwa, Kandy, Sri Lanka
              <br /><br />
              Thank you for exploring Kandy with us!
            </h5>
          </Col>
          
          <Col lg="8" md="12">
            <form action="https://public.herotofu.com/v1/78cfa2e0-4828-11ef-a0b7-6772a76ef8ef" method="post" accept-charset="UTF-8" style={{ width: '100%' }}>
              <Row>
                <Col md="6" style={{ marginBottom: '15px' }}>
                  <label htmlFor="name">Your Name</label>
                  <input name="Name" id="name" type="text" required style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
                </Col>
                <Col md="6" style={{ marginBottom: '15px' }}>
                  <label htmlFor="email">Your Email</label>
                  <input name="Email" id="email" type="email" required style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
                </Col>
              </Row>
              <Row>
                <Col md="12" style={{ marginBottom: '15px' }}>
                  <input type="submit" value="Submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }} />
                  <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute', ariaHidden: 'true' }}>
                    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
