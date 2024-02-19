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

const Peradeniyacampus= () => {
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
          Peradeniya Campus
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
       
      The University of Peradeniya is the heir to a sixty year old University tradition which commenced with the inception of the University of Ceylon, the first institution of its kind established in Colombo on 1 July 1942. It moved to the banks of Mahaweli River, the longest in the Country, in 1952. However the history of its evolution as the oldest and the largest University in the country pass through the following stages.



1942 to 1952 University of Ceylon
1952 to 1972 University of Ceylon Peradeniya
1972 to 1978 Peradeniya Campus, University of Sri Lanka
Since 1978 University of Peradeniya


Sir Ivor Jennings the first Vice-Chancellor, on his first visit to the campus site in 1944 with the site plan of the architect Sir Patrick Abercrombie’s, has written,


“No University in the world would have such a setting”.


The University is located in Peradeniya in the Central Province, which bares lush greenery vegetation and mist-clad mountains, approximately 6 km from the City of Kandy, the historic Capital of the last independent Kingdom and 110 km from Colombo, Capital of Sri Lanka, and can be reached within two to three hours by public road or by railway.


The access to the University premises is through Galaha Road from the turn off near the historic Royal Botanical Gardens of Peradeniya, a popular tourist and lovers’ attraction, famous for its rare tropical plants and orchids


The University covers about 700 hectares of land and the developed area covering approximately 130 hectares is occupied by buildings of the Faculties, Halls of Residence, Staff bungalows etc.


Throughout the campus most trees begin to bear flowers in early March signaling the coming of spring. Lovers’ Lane, Kissing Bend, open-air theater and the lower Hantana Road display a rare aesthetic beauty through the rich foliage.
      </h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Peradeniyacampus;
