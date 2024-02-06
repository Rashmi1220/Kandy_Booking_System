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
    src: require("assets/img/bg5.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States",
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States",
  },
];

const Maligawa = () => {
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
      <h3 style={{ color: "green" }}>Sri Dalada Maligawa </h3>
      <Container>
        <div className="title">
          <h4 style={{ textAlign: "center", color: "greenyellow" }}>
            Carousel
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
        The Sri Dalada Maligawa or The Temple of the Sacred Tooth Relic is a
        temple in the city of Kandy in Sri Lanka. It was built within the royal
        palace complex which houses the tooth relic of the Buddha, a tooth,
        which is venerated by Buddhists. The relic has played an important role
        in the local politics since ancient times, it's believed that whoever
        holds the relic holds the governance of the country, which caused the
        ancient kings to protect it with great effort. Kandy was the capital of
        the Sinhalese Kings from 1592 to 1815, fortified by the terrain of the
        mountains and the difficult approach. The city is a world heritage site
        declared by UNESCO, in part due to the temple. Monks of the two chapters
        of Malwatte and Asgiriya conduct daily ritual worship in the inner
        chamber of the temple, in annual rotation. They conduct these services
        three times a day: at dawn, at noon and in the evening. On Wednesdays
        there is a symbolic bathing of the Sacred Relic with an herbal
        preparation made from scented water and flagrant flowers, called
        Nanumura Mangallaya. This holy water is believed to contain healing
        powers and is distributed among those present. The Temple has sustained
        damage from multiple bombings by terrorists in the past, but has been
        fully restored each time.
      </h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Maligawa;
