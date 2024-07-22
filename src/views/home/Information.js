import React from "react";
import { Container, Row, Col } from "reactstrap";
import CarouselSection from "./Slideshow";

const styles = {
  section: {
    backgroundColor: "#f0f8ff",
    padding: "40px 0",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  point: {
    fontSize: "1.1rem",
    margin: "10px 0",
    lineHeight: "1.6",
    color: "#34495e",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "20px",
    color: "#16a085",
  },
  container: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#ffffff",
  },
  contentRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textCol: {
    flex: 1,
    marginRight: "20px",
  },
  carouselCol: {
    flex: "0 0 40%",
  },
};

function Kandy() {
  return (
    <div className="section" style={styles.section}>
      <Container className="text-center" style={styles.container}>
        <h2 className="title" style={styles.title}>The Kingdom of Kandy</h2>


        <Row style={styles.contentRow}>
          <Col style={styles.textCol}>

          <Col style={styles.carouselCol}>
            <CarouselSection />
          </Col>
            <h5 className="text-justify" style={styles.point}>
              <div style={styles.heading}>Nature</div>
              - City of Kandy lies in the center of Sri Lanka at an elevation of about 485 meters above sea level.<br />
              - Surrounded by misty hills and a beautiful central lake.
            </h5>
            <h5 className="text-justify" style={styles.point}>
              <div style={styles.heading}>Culture</div>
              - Last capital of the Sri Lankan Kings.<br />
              - Known as “Maha Nuwara” in Sinhalese, historically called Senkadagalapura.
            </h5>
            <h5 className="text-justify" style={styles.point}>
              <div style={styles.heading}>Tradition</div>
              - Home of the “Dalada Maligawa” (Temple of the Tooth Relic).<br />
              - Preserves the purest form of Buddhism and is a place of pilgrimage.
            </h5>
            <h5 className="text-justify" style={styles.point}>
              <div style={styles.heading}>Beauty</div>
              - Known for the annual festival “Esala Maha Perahera”.<br />
              - Grand procession featuring traditional dancers, drummers, and grandly attired elephants.
            </h5>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default Kandy;
