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

const Bahiravakanda = () => {
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
      <h3 style={{ color: "green" }}>Bahirawakanda Temple </h3>

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
        Bahirawakanda Temple, or “Sri Maha Bodhi Viharaya”, is a Theravada
        Buddhist temple in the Kandy city of Sri Lanka. It is a famous tourist
        attraction in the city. Most tour operators include this location in
        their Kandy city tour.The giant Buddha statue is the specialty of this
        temple. You can observe it from anywhere in the city. The height of the
        Buddhist statue is around 25m, which is considered as one of the tallest
        statues in Sri Lanka. It represents the nirvana pose of the Lord Buddha.
        as well as the position associated with his first enlightenment.
        Somebody called that position “Dyana Mudra’ or “Nirvana Pose” as well.
        Bahirawakanda Mountain and its surroundings have some popular folklore
        and beliefs. The ‘Bahirawakanda Mountain’ means’ Gnome Mountain’. Those
        locals believe it has derived its name from those hills. This is not an
        ancient Buddhist temple with a long history. The initial development of
        the temple began in 1972 and was contributed by Ven. Ampitiya Dharmarama
        Thero. Laterally, the temple was opened for worship in January 1993.
        Guests are allowed to worship at the Bahirawakanda temple. You can light
        the oil lamps with offerings of flowers. But you need to remove hats and
        shoes when entering the temple. After the worship, you find the stairs
        behind the white statue to climb higher. This will allow you to get a
        marvelous picture of the surroundings. Most of them believe the view of
        the Bahirawakanda Temple is more fantastic in the evening or night.
        Anyhow, you can clearly observe the Temple of the Tooth Relic, Kandy
        Lake, Udawattakale Sanctuary, Playgrounds and some streets of the city.
        If you can bring a camera, that will give you some memorable photographs
        in this location. It is not difficult to reach to the Bahirawakanda
        Temple and its largest statue. Distance from the Temple of the Tooth
        Relic is around 2km. You can easily find the location by browsing the
        google maps. Finally, we have to say that is, you should definitely add
        this place to your list of best places to visit in Kandy.{" "}
      </h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Bahiravakanda;
