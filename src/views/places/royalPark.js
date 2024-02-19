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
    src: require("assets/img/r1.jpg"),
    altText: "Wales Park, Kandy",
    caption: "Wales Park, Kandy",
  },
  {
    src: require("assets/img/r2.jpg"),
    altText: "Wales Park, Kandy",
    caption: "Wales Park, Kandy",
  },
  {
    src: require("assets/img/r3.jpg"),
    altText: "Wales Park, Kandy",
    caption: "Wales Park, Kandy",
  },
];

const RoyalPark = () => {
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
          Royal Place Park Kandy
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
      <h5> For that perfect fun time along with your family and friends Wales Park is the best option for you while you are visiting Sri Lanka. For your bucket list this is another best places to visit in Sri Lanka. Situated at the top of a small hill this park overlooks the Kandy Lake, this park is known for its majestic view. This park is also known as The Royal Palace Park.

Highlights: There is one Japanese field gun in the park which was captured by the British 14th Army in Burma during World War II and presented to the city of Kandy by Lord Mountbatten.

Location: The Wales Park is located at Rajapihilla Mawatha, Kandy 20000, Sri Lanka

Price: The approximate price for the entry is 219 LKR. For that perfect fun time along with your family and friends Wales Park is the best option for you while you are visiting Sri Lanka. For your bucket list this is another best places to visit in Sri Lanka. Situated at the top of a small hill this park overlooks the Kandy Lake, this park is known for its majestic view. This park is also known as The Royal Palace Park.

Highlights: There is one Japanese field gun in the park which was captured by the British 14th Army in Burma during World War II and presented to the city of Kandy by Lord Mountbatten.

Location: The Wales Park is located at Rajapihilla Mawatha, Kandy 20000, Sri Lanka</h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default RoyalPark;
