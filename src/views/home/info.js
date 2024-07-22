import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";
import n1Image from "assets/img/n1.jpg";
import n2Image from "assets/img/n2.jpg";
import n3Image from "assets/img/n3.jpg";
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
      title: "Beautiful tea estate ",
      text: "On a tea plantation visit, you can learn all about tea picking and tea processing and also enjoy some fine Sri Lankan tea tasting.  It’s probably a much more exciting prospect if you’re a tea lover, but even if you’re not, the Hill Country (or Tea Country, as it’s sometimes called) is arguably the most scenic part of the island and worth a visit.",

      image: n2Image,
    },
    {
      title: "Culture Show",
      text: "A Perahera is a cultural procession - an ancient historic ritual where tradition, religion, and the arts all come together. Musicians, dancers, chieftains and hundreds of elephants dressed in glittering royal finery move to the rhythm of the drums and parade along the streets for several nights for all to see.",
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
