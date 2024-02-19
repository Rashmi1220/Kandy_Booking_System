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
    src: require("assets/img/tt1.jpg"),
    altText: "Temple of Tooth , Kandy",
    caption: "Temple of Tooth , Kandy",
  },
  {
    src: require("assets/img/tt2.jpg"),
    altText: "Temple of Tooth , Kandy",
    caption: "Temple of Tooth , Kandy",
  },
  {
    src: require("assets/img/tt3.jpg"),
    altText: "Temple of Tooth , Kandy",
    caption: "Temple of Tooth , Kandy",
  },
];

const Udawaththakale= () => {
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
          Udawaththa Kale
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
      <h5 style={{textAlign:"center", margin:10,padding:10}}>
       
      Udawatta Kele Preserve, is a historic forest reserve on a hill-ridge in the city of Kandy. During the days of the Kandyan kingdom, Udawatta Kele was known as "Uda Wasala Watta" in Sinhalese meaning, "the garden situated above the royal palace". The sanctuary is famous for its wide avifauna. The reserve also contains a great variety of plant species, especially lianas, bushes and small trees. There are several giant lianas. Many of small and medium size mammals that inhabit Sri Lanka can be seen here. Several kinds of snakes and other reptiles might also be seen. Udawatta Kele was designated as a forest reserve in 1856, and it became a sanctuary in 1938. The Sri Lanka Forest Department has two offices in the reserve, one of which 
      (i.e. the one located at the southeastern entrance) has a nature education centre with a display of pictures, posters, stuffed animals, etc. Being easily accessible and containing a great variety of flora and fauna the forest has a great educational and recreational value. Groups of school children and students regularly visit the forest and the education centre. The forest is also popular with foreign tourists, especially bird watchers. The forest is also of religious importance as there are three Buddhist meditation hermitages and three rock shelter dwellings for Buddhist monk hermits.
      </h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Udawaththakale;
