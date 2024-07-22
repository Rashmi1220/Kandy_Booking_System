import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";
import n1Image from "assets/img/n1.jpg";
import n2Image from "assets/img/n1.jpg";
import n3Image from "assets/img/n1.jpg";
import "assets/css/animations.css";

const styles = {
  section: {
    fontFamily: "Times new roman",
  },
  card: {
    display: "flex",
    alignItems: "center",
    transition: "transform 1s ease-out",
    marginBottom: "20px",
    boxShadow: "none",
  },
  cardBody: {
    flex: 1,
  },
  cardImg: {
    flex: "0 0 500px",
    width: "100%",
  },
  title: {
    
    fontSize: "4rem",
    fontWeight: 900,
  },
  text: {
    fontFamily: "Times new roman",
    fontSize: "1.5rem",
    textAlign: "justify",
  },
};

const Info = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCardStyle = (index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    const translateX = direction * (scrollPosition * 0.09); // Adjust the factor to control scroll effect

    return {
      ...styles.card,
      flexDirection: index % 2 === 0 ? "row" : "row-reverse",
      transform: `translateX(${translateX}px)`,
    };
  };

  const cards = [
    {
      title: "Kandy Sri Lanka",
      text: "Some days Kandy’s skies seem perpetually bruised, with stubborn mist clinging to the hills surrounding the city’s beautiful centrepiece lake. Delicate hill-country breezes impel the mist to gently part, revealing colorful houses amid Kandy’s improbable forested halo. In the center of town, three-wheelers careen around slippery corners, raising a soft spray that threatens the silk saris worn by local women. Here’s a city that looks good even when it’s raining.",
      image: n1Image,
    },
    {
      title: "Galle Sri Lanka",
      text: "Galle is a city on the southwest coast of Sri Lanka. It's known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church.",
      image: n2Image,
    },
    {
      title: "Ella Sri Lanka",
      text: "Ella is a small town in the Badulla District of Uva Province, Sri Lanka. Governed by an Urban Council, it is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna.",
      image: n3Image,
    },
  ];

  return (
    <div className="section" style={styles.section}>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          {cards.map((card, index) => (
            <Col lg="12" md="12" key={index}>
              <Card className="info-card" style={getCardStyle(index)}>
                <div style={styles.cardBody}>
                  <CardBody>
                    <h1 className="title" style={styles.title}>
                      {card.title}
                    </h1>
                    <h4 style={styles.text}>
                      {card.text}
                    </h4>
                  </CardBody>
                </div>
                <div style={styles.cardImg}>
                  <CardImg top src={card.image} alt={card.title} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Info;
