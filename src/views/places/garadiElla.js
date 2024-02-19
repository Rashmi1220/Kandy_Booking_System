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
    src: require("assets/img/G1.jpg"),
    altText: "Garandi Ella, Kalugala",
    caption: "Garandi Ella, Kalugala",
  },
  {
    src: require("assets/img/G2.jpg"),
    altText: "Garandi Ella, Kalugala",
    caption: "Garandi Ella, Kalugala",
  },
  {
    src: require("assets/img/G3.jpg"),
    altText: "Garandi Ella, Kalugala",
    caption: "Garandi Ella, Kalugala",
  },
];

const GaradiElla = () => {
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
          Garadi Ella
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
      <h5> Kalugala Gerandi Ella is a cluster of waterfalls falling down the Gerandigala mountain, which is situated in Kalugala area of Ududumbara, Kandy district. When you travel from Kandy to Mahiyanganaya on Mahiyanganaya road (A25), you will find this beautiful waterfall on the left side, lying far away towards Kalugala. This cluster has seven segments and when put together, the total height is around 200 to 240 meters. From Mahiyanganaya road, you can only view 4 of these segments.

About the destination
Kalugala Gerandi Ella hike is presently very popular among the young travellers in Sri Lanka.  This is not a very wide waterfall and the name of this waterfall implies that it is a rat snake-shaped waterfall. It is possible to hike upwards this waterfall cluster, but you need to be careful since there are steep vertical segments to climb. The water flow rapidly decreases during the dry season and according to villagers, December is the best month to see the waterfall. When you reach the top, Kehelpothdoruwegala, Yahangala, Nawanagala, Balalgira, Aliyawetuna Ela range, Sphinx rock, Dumbanagala and some other mountains can be seen. If you love to climb up this waterfall cluster, the best way is to get the help of the villagers, who are always happy to assist you.

Reaching the destination
From Colombo
Take Colombo-Kandy highway (A1) and take a left from Peradeniya to Peradeniya-Haloluwa-Katugastota road (B365). From Mawilmada, take B205 and from Madawala, turn right to B256 and reach Digana. From there, take Teldeniya road (A26) and travel up to Ududumbara. Turn left to Kalugala-Udadumbara road up to Dabagahapitiya bridge. Continue Pubudu Mawatha for 1km and turn left. Travel along this road to meet the village where the fall is situated.

From Kandy
From Kandy, reach Peradeniya and follow the above directions to reach your destination.</h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default GaradiElla;
