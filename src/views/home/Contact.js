import React from 'react';
import { Button, Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import contactImage from "assets/img/bg4.jpg";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#1a1a2e", padding: "15px 0", boxShadow: "0 2px 20px rgba(0,0,0,0.15)" }} light expand="md">
        <Container>
          <NavbarBrand href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #f5a623, #f7d06b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="now-ui-icons location_map-big" style={{ color: "#1a1a2e", fontSize: "18px" }}></i>
            </div>
            <div>
              <h4 style={{ color: "gold", fontFamily: "fantasy", margin: 0, fontSize: "20px", lineHeight: "1.2" }}>Kandy Travel Guider</h4>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Contact Us</span>
            </div>
          </NavbarBrand>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        backgroundImage: `url(${contactImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(135deg, rgba(26,26,46,0.85) 0%, rgba(22,33,62,0.75) 100%)",
        }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: "20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.1)", padding: "6px 16px", borderRadius: "20px", marginBottom: "20px", backdropFilter: "blur(10px)" }}>
            <FaPaperPlane style={{ fontSize: "14px", color: "#f5a623" }} />
            <span style={{ fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>Get In Touch</span>
          </div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '15px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: "1.2",
          }}>
            DROP US A MESSAGE
          </h1>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '300',
            maxWidth: "650px",
            margin: "0 auto",
            opacity: 0.85,
            lineHeight: "1.7",
          }}>
            We value your feedback and are here to assist you in any way we can.
            Feel free to reach out with any questions, suggestions, or inquiries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <Container style={{ padding: "40px 15px", marginTop: "-40px", position: "relative", zIndex: 2 }}>
        <Row>
          {/* Contact Form */}
          <Col lg="8" md="12">
            <div style={{
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              padding: "40px",
              marginBottom: "20px",
            }}>
              <h3 style={{ fontWeight: "700", color: "#1a1a2e", marginBottom: "5px" }}>Send us a Message</h3>
              <p style={{ color: "#999", marginBottom: "30px", fontSize: "14px" }}>Fill out the form below and we'll get back to you shortly</p>

              <form action="https://public.herotofu.com/v1/78cfa2e0-4828-11ef-a0b7-6772a76ef8ef" method="post" acceptCharset="UTF-8" style={{ width: '100%' }}>
                <Row>
                  <Col md="6" style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#444", fontSize: "14px" }}>
                      <FaEnvelope style={{ marginRight: "6px", color: "#007bff", fontSize: "12px" }} /> Your Name
                    </label>
                    <input name="Name" id="name" type="text" required placeholder="John Doe" style={{
                      width: '100%', padding: '12px 16px', border: "1.5px solid #e0e0e0", borderRadius: "10px",
                      fontSize: "15px", transition: "all 0.3s ease", outline: "none", backgroundColor: "#f8f9fa",
                    }} onFocus={(e) => { e.target.style.borderColor = "#007bff"; e.target.style.backgroundColor = "#fff"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.backgroundColor = "#f8f9fa"; }} />
                  </Col>
                  <Col md="6" style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#444", fontSize: "14px" }}>
                      <FaEnvelope style={{ marginRight: "6px", color: "#007bff", fontSize: "12px" }} /> Your Email
                    </label>
                    <input name="Email" id="email" type="email" required placeholder="john@example.com" style={{
                      width: '100%', padding: '12px 16px', border: "1.5px solid #e0e0e0", borderRadius: "10px",
                      fontSize: "15px", transition: "all 0.3s ease", outline: "none", backgroundColor: "#f8f9fa",
                    }} onFocus={(e) => { e.target.style.borderColor = "#007bff"; e.target.style.backgroundColor = "#fff"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.backgroundColor = "#f8f9fa"; }} />
                  </Col>
                </Row>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="message" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#444", fontSize: "14px" }}>
                    Your Message
                  </label>
                  <textarea name="Message" id="message" required placeholder="Tell us what's on your mind..." style={{
                    width: '100%', padding: '12px 16px', border: "1.5px solid #e0e0e0", borderRadius: "10px",
                    fontSize: "15px", minHeight: '140px', transition: "all 0.3s ease", outline: "none", backgroundColor: "#f8f9fa",
                    resize: "vertical",
                  }} onFocus={(e) => { e.target.style.borderColor = "#007bff"; e.target.style.backgroundColor = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.backgroundColor = "#f8f9fa"; }}></textarea>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <input type="submit" value="Send Message" style={{
                    padding: '14px 40px', background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                    color: 'white', border: 'none', cursor: 'pointer', borderRadius: '25px', fontSize: '15px',
                    fontWeight: '700', boxShadow: '0 4px 20px rgba(0,123,255,0.3)', transition: "all 0.3s ease",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                  }}
                    onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 25px rgba(0,123,255,0.4)"; }}
                    onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(0,123,255,0.3)"; }}
                  />
                  <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute', ariaHidden: 'true' }}>
                    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                  </div>
                </div>
              </form>
            </div>
          </Col>

          {/* Contact Details Sidebar */}
          <Col lg="4" md="12">
            {/* Contact Info Card */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              padding: "30px",
              marginBottom: "20px",
            }}>
              <h4 style={{ fontWeight: "700", color: "#1a1a2e", marginBottom: "25px", fontSize: "18px" }}>Contact Information</h4>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "20px", padding: "15px", backgroundColor: "#f0f7ff", borderRadius: "12px", border: "1px solid #e3f2fd" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#007bff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FaEnvelope style={{ color: "white", fontSize: "16px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "12px", color: "#999", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email</p>
                  <p style={{ margin: "3px 0 0", color: "#333", fontSize: "14px", fontWeight: "500" }}>info@kandyexplore.com</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "20px", padding: "15px", backgroundColor: "#f0fff4", borderRadius: "12px", border: "1px solid #e6f9ed" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#28a745", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FaPhone style={{ color: "white", fontSize: "16px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "12px", color: "#999", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone</p>
                  <p style={{ margin: "3px 0 0", color: "#333", fontSize: "14px", fontWeight: "500" }}>+94 77 694 4998</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "10px", padding: "15px", backgroundColor: "#fff8f0", borderRadius: "12px", border: "1px solid #ffeed9" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#f5a623", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FaMapMarkerAlt style={{ color: "white", fontSize: "16px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "12px", color: "#999", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>Address</p>
                  <p style={{ margin: "3px 0 0", color: "#333", fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>5/1 Boraluwela, Kurukohogama, Udispattuwa, Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Thank You Card */}
            <div style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(26,26,46,0.2)",
              padding: "30px",
              color: "white",
              marginBottom: "20px",
              textAlign: "center",
            }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 15px" }}>
                <i className="now-ui-icons ui-2_like" style={{ fontSize: "24px", color: "#f5a623" }}></i>
              </div>
              <h5 style={{ fontWeight: "700", marginBottom: "10px", fontSize: "17px" }}>Thank You!</h5>
              <p style={{ opacity: 0.7, fontSize: "14px", margin: 0, lineHeight: "1.6" }}>
                Thank you for exploring Kandy with us! We look forward to hearing from you.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
                <a href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3b5998"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}>
                  <FaFacebookF style={{ fontSize: "14px" }} />
                </a>
                <a href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#e1306c"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}>
                  <FaInstagram style={{ fontSize: "14px" }} />
                </a>
                <a href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1da1f2"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}>
                  <FaTwitter style={{ fontSize: "14px" }} />
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div style={{ textAlign: "center" }}>
              <Button onClick={() => navigate("/")} style={{
                backgroundColor: "transparent", border: "2px solid #1a1a2e", color: "#1a1a2e",
                padding: "10px 24px", borderRadius: "25px", fontSize: "14px", fontWeight: "600",
                display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", transition: "all 0.3s ease", width: "100%", justifyContent: "center",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1a1a2e"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#1a1a2e"; }}>
                <i className="now-ui-icons arrows-1_minimal-left" style={{ fontSize: "12px" }}></i>
                Back to Home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
