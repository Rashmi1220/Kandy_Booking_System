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
    src: require("assets/img/y1.jpg"),
    altText: "Yahangala Mountain",
    caption: "Yahangala Mountain",
  },
  {
    src: require("assets/img/y2.jpg"),
    altText: "Yahangala Mountain",
    caption: "Yahangala Mountain",
  },
  {
    src: require("assets/img/y3.jpg"),
    altText: "Yahangala Mountain",
    caption: "Yahangala Mountain",
  },
];

const Yahangala = () => {
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
          Yahangala Mountain
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
      <h5> Yahangala is located in the Udailuka Grama Sevaka Division of a beautiful village called Kalugala. As part of the Knuckles Reserve, the original owner of this yahangala is the Forest Department. A wonderful place full of beauty that belongs to the Knuckles Mountains. This is called Yahangala as it is situated like a bed. Yahangala is located southeast of Knuckles. There is a legend of Ravana in this too. It is believed that King Ravana hid Goddess Sita on this mountain.

The upper part of the Yahangala rock is about two or three acres. Can go both ways and the whole mountain is an open area to the air. There was no fountain or tall tree, but broken pieces of rock could be seen everywhere.

I'm not wrong to say that climbing Yahangala is a mountaineer's dream not only because of the thrill of it, but also because of the unforgettable night that can be spent upstairs and the beautiful scenery that can be seen in the early morning sun and 360 degrees.

History of Yahangala
Further legend about Yahangala is that it is believed that King Ravana's unconscious body was buried in Yahangala. As the battle of Rama Ravana took place between Lakegala and Rahassa, it can be assumed that the body of King Ravana was buried inside Yahangala. Because Yahangala literally means a mountain that can be clearly seen in the distance as a bed.

Yahangala is most famous with King Rawana. Most of them are the place where the unconscious body of King Ravana is buried.

According to the legends, the body of King Rawana is buried in this rock.

It is also a well known fact that lightning strikes Yahangala.

Route:
From Colombo you can take the Mahiyangaya Road from Colombo to Ududumbara (Kalugala) and Yahangala
Kandy -- Madawala -- Theldeniya -- Hunnasgiriya -- Kalugala -- Yahangala (60KM)
Travel Time: Form Kandy 1.5 hrs

Height : 1300m

Transport:
Bike
Taxi
Public Transport
Special remark:
The scenery is breathtaking for those who climb Yahangala, especially as there is not even a stream to carry enough water for the climbers.
There is a village opinion that if you do not cross the Yahangala without drinking alcohol, you will get into various troubles.
Because there are several hills and slopes, it is advisable to climb the group together with great care.
Yahangala Tharana is a hike with extreme bitterness and amazing beauty
The special thing is for those who are wandering and drinking and traveling. Don't go here
Leaving only the footprints Come on
Take bottles of water
Use leech Repellent
Wear attire suitable for protection against thorns
Get a guide if possible
Ask directions from locals
Don’t disturb wild life
Famous for:
Hiking
Camping
Nature Exploring
Photography
Sightseeing
Trekking
Weather</h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Yahangala;
