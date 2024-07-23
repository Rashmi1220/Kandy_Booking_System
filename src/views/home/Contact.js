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
      <Container style={{ marginTop: '1px' }}>
        {/* Background Image with Overlay Text */}
        <div style={{
          position: 'relative',
          backgroundImage: `url(${contactImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px', // Adjust height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white', // Text color
          padding: '20px'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay color with transparency
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)' // Text shadow for readability
            }}>
              DROP US A MESSAGE
            </h2>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '400',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              We value your feedback and are here to assist you in any way we can.
              Please feel free to reach out to us with any questions, suggestions, or inquiries you may have.
            </h3>
          </div>
        </div>

        {/* Contact Form and Details */}
        <Card style={{ margin: "10px", padding: "20px", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Row>
            <Col lg="8" md="12">
              <form action="https://public.herotofu.com/v1/78cfa2e0-4828-11ef-a0b7-6772a76ef8ef" method="post" acceptCharset="UTF-8" style={{ width: '100%' }}>
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
                    <label htmlFor="message">Your Message</label>
                    <textarea name="Message" id="message" required style={{ width: '100%', padding: '10px', marginTop: '5px', minHeight: '100px' }}></textarea>
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
            <Col lg="4" md="12" style={{ marginBottom: '20px' }}>
              <div style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <h5 style={{ marginBottom: '20px' }}>
                  <b><FaEnvelope /> Email:</b> info@kandyexplore.com
                  <br />
                  <b><FaPhone /> Phone:</b> +94 77 694 4998
                  <br />
                  <b><FaMapMarkerAlt /> Address:</b> 5/1 Boraluwela, Kurukohogama, Udispattuwa, Kandy, Sri Lanka
                  <br /><br />
                  Thank you for exploring Kandy with us!
                </h5>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
