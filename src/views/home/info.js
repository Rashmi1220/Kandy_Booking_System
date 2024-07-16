import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";
import n1Image from "assets/img/n1.jpg";
import "assets/css/animations.css";

const styles = {
  section: {
    fontFamily: "'Roboto', sans-serif",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transition: "transform 1s ease-out",
  },
  cardBody: {
    flex: 1,
  },
  cardImg: {
    flex: "0 0 500px",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  text: {
    textAlign: "justify",
  },
};

function Info() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the maximum translation required to center the card
      const maxTranslate = (window.innerWidth - 1180) / 2; // Adjust based on card width
      setMaxTranslateX(maxTranslate);
    };

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial calculation
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const translateX = Math.min(scrollPosition, maxTranslateX);
  const cardStyle = {
    ...styles.card,
    transform: `translateX(${translateX}px)`,
  };

  return (
    <>
      <div className="section" style={styles.section}>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="12" md="12">
              <Card className="info-card" style={cardStyle}>
                <div style={styles.cardBody}>
                  <CardBody>
                    <h1 className="title" style={styles.title}>Kandy Sri Lanka</h1>
                    <h4 style={styles.text}>
                      Some days Kandy’s skies seem perpetually bruised, with stubborn mist clinging to the hills surrounding the city’s beautiful centrepiece lake.
                      <br/><br/>
                      Delicate hill-country breezes impel the mist to gently part, revealing colorful houses amid Kandy’s improbable forested halo.
                      <br/><br/>
                      In the center of town, three-wheelers careen around slippery corners, raising a soft spray that threatens the silk saris worn by local women. Here’s a city that looks good even when it’s raining.
                    </h4>
                  </CardBody>
                </div>
                <div style={styles.cardImg}>
                  <CardImg top src={n1Image} alt="Kandy Sri Lanka" />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Info;
