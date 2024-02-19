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
    altText: "Ambuluwawa Tower,Gampola",
    caption: "Ambuluwawa Tower,Gampola",
  },
  {
    src: require("assets/img/bg22.jpg"),
    altText: "Ambuluwawa Tower,Gampola",
    caption: "Ambuluwawa Tower,Gampola",
  },
  {
    src: require("assets/img/bg33.jpg"),
    altText: "Ambuluwawa Tower,Gampola",
    caption: "Ambuluwawa Tower,Gampola",
  },
];

const Ambuluwawa = () => {
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
      {/* <div className="section" id="carousel"> */}
      <Container>
        <div className="title">
          <h4 style={{ textAlign: "center", color: "greenyellow" }}>
          Ambuluwawa Tower 
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
      {/* </div> */}
      <h5> Reaching the top of Ambuluwawa one can experience the most amazing views which could sometimes be covered by the ongoing mist. However, once the mist clears off the view can be scary and freak out climbers, especially those who have a fear of heights. Do note that hiking Ambuluwawa is not at all dangerous or risky, but it would not be the ideal kind of adventure for those with a fear of heights. Avoid leaning on the railing to capture photographs especially at the top as this is extremely risky and one could easily slip off from here. Ambuluwawa is a relatively easy hike to do which gives you 360 degree views of the surrounding mountains, forests, rivers and towns.

It is an area richly diverse, with evergreen forests, blossomed flower plants as well creepers and about 200 different kinds of plants from 80 plant families including a variety of medicinal plants. Ambuluwawa is surrounded by many mountains including Piduruthalagala from the East, Bible Rock (Bathalegala) from the West, Sri Pada (Adam’s Peak) from the South and Knuckles Mountain Range from the North. Apart from these mountains many other mountains are also clearly visible from here and adds to the beauty of the area. These are the Hanthana Mountain Range, Hunnasigiri Mountain and mountain ranges associated with Algalla and Kadugannawa. There is a cool mountain breeze in the area due to this reason.

The Ambuluwawa Hill and the adjacent forest is designated as a forest reservation which is named as the Ambuluwawa ICC Forest Reservation. The history of the Ambuluwawa Temple dates back to the 13th century during the reign of King Buwanekabahu IV. It is said that the Ambuluwawa Peak was the center of the Gampola Kingdom during his reign. But there is nothing with historical or archaeological values in here.</h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Ambuluwawa;
