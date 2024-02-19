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
    src: require("assets/img/k1.jpg"),
    altText: "Arthur’s Seat, Kandy",
    caption: "Arthur’s Seat, Kandy",
  },
  {
    src: require("assets/img/k2.jpg"),
    altText: "Arthur’s Seat, Kandy",
    caption: "Arthur’s Seat, Kandy",
  },
  {
    src: require("assets/img/k3.jpg"),
    altText: "Arthur’s Seat, Kandy",
    caption: "Arthur’s Seat, Kandy",
  },
];

const ViewPoint = () => {
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
          Kandy View Point (Arthur’s Seat, Kandy)
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
      <h5> The mesmerizing view point is located on the Rajapihilla Mawatha and is ranked 5th out of 105 tourist attractions in Kandy. The place is located near the Kandy Lake and is enclosed in breathtaking landscapes of mountains and meadows. From the city, you have to take the Rajapihilla Mawatha Route, after which a 1 km steep climb will guide you to the view point. You can also hire a tuk-tuk to reach the top.The panoramic view that you would get to see is worth the pain of the ascent. The entire Kandy town lies ahead of your eye, and from the top, you can also spot the Kandy lake and Dalada Maligawa.

The mesmerizing view point is located on the Rajapihilla Mawatha and is ranked 5th out of 105 tourist attractions in Kandy. The place is located near the Kandy Lake and is enclosed in breathtaking landscapes of mountains and meadows. From the city, you have to take the Rajapihilla Mawatha Route, after which a 1 km steep climb will guide you to the view point.

You can also hire a tuk-tuk to reach the top.The panoramic view that you would get to see is worth the pain of the ascent. The entire Kandy town lies ahead of your eye, and from the top, you can also spot the Kandy lake and Dalada Maligawa.

Highlights: Panoramic view of the city, souvenir shops, art galleries

Location: Rajapihilla Mawatha, Kandy

Timings: Anytime during the day.</h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default ViewPoint;
