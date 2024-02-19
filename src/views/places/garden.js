import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: require("assets/img/p1.jpg"),
    altText: "Peradeniya Botanical Garden",
    caption: "Peradeniya Botanical Garden",
  },
  {
    src: require("assets/img/p2.jpg"),
    altText: "Peradeniya Botanical Garden",
    caption: "Peradeniya Botanical Garden",
  },
  {
    src: require("assets/img/p3.jpg"),
    altText: "Peradeniya Botanical Garden",
    caption: "Peradeniya Botanical Garden",
  },
];

const Garden = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>

      <Container>
        <div className="title">
          <h4 style={{ textAlign: "center", color: "greenyellow" }}>
          Peradeniya Botanical Garden
          </h4>
        </div>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <img src={item.src} alt={item.altText} />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{item.caption}</h5>
                    </div>
                  </CarouselItem>
                );
              })}
              <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-left"></i>
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-right"></i>
              </a>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <h5>
        {" "}
        Peradeniya Gardens is a spacious 147 acre of natural extravaganza
        consisting of more than 4000 species of plants, and 10,000 varied kinds
        of trees, incidentally serves as the largest garden of Sri Lanka. The
        unique and rarest collection in these gardens is the Giant Bamboo of
        Burma which grows 12 inches each day to a height of 40 meters. Apart
        from this other amazing collections include Javan fig tree, Cannonball
        tree, Double Coconut Palm and about 200 other varieties of palm trees
        and versatile collection of flora. The Peradeniya Botanical Garden is
        one prime tourist attraction of hill country and remains quite flooded
        with tourists every weekend. One can pack some food to enjoy an open air
        picnic here or can relish the cafeteria inside serving local and western
        cuisine. Peradeniya Gardens is a spacious 147 acre of natural
        extravaganza consisting of more than 4000 species of plants, and 10,000
        varied kinds of trees, incidentally serves as the largest garden of Sri
        Lanka. The unique and rarest collection in these gardens is the Giant
        Bamboo of Burma which grows 12 inches each day to a height of 40 meters.
        Apart from this other amazing collections include Javan fig tree,
        Cannonball tree, Double Coconut Palm and about 200 other varieties of
        palm trees and versatile collection of flora. The Peradeniya Botanical
        Garden is one prime tourist attraction of hill country and remains quite
        flooded with tourists every weekend. One can pack some food to enjoy an
        open air picnic here or can relish the cafeteria inside serving local
        and western cuisine. Location: 5.5km from Kandy Price: 2353LKR for
        adults and 1177LKR for child.(approx) Best Time: 7:30am to 5:00pm{" "}
      </h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Garden;
