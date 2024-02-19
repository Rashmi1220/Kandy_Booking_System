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
    src: require("assets/img/H1.jpg"),
    altText: "Hanthana Mountain Range",
    caption: "Hanthana Mountain Range",
  },
  {
    src: require("assets/img/H2.jpg"),
    altText: "Uragala",
    caption: "Uragala",
  },
  {
    src: require("assets/img/H3.jpg"),
    altText: "Alagalla",
    caption: "Alagalla",
  },
];

const Hanthana = () => {
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
          Hanthana Mountain Range
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
      <h5> The Hanthana Mountain Range is located in the central province of Sri Lanka. It consists of seven peaks. The height of the highest peak in the range is 3800 ft. The highest peak is named as “Uura Kanda”.

Hanthana is a favorite travel spot for many people because it is exciting and thrilling to explore. You can reach the foot of the mountain range by the Peradeniya-Galaha road or the Kandy-Udawela road.

The mountain range, which is most often hidden by mist, is a favorite place by local university students who address the peak by the name Adara Kanda (mountain of love). Since the Peradeniya university is close by, all year around university students make it a point to visit this mountain range.

One of the best places to visit while trekking through the hills of Hanthana is the Hanthana viharaya, which was built during the time of the Kandyan Kingdom. It s located 10 km away from Kandy City and on the highest elevation in Kandy.</h5>
         <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Hanthana;
