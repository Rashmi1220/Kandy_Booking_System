import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Card,
} from "reactstrap";

// core components

function BasicElements() {
  return (
    <>
      <div className="section section-tabs">
        <Container>
          {/* <Col className="ml-auto mr-auto"md="10" xl="6"> */}
          <h3 className="title">Places</h3>
          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/1.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Sri Dalada Maligawa</CardTitle>
              <CardText>
                The Sri Dalada Maligawa, located in Kandy, Sri Lanka, houses the
                tooth relic of the revered Buddha, a tooth within the royal
                palace complex..
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/2.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Botanical Garden</CardTitle>
              <CardText>
                The 59 hectare park is spread over 146 acres and is home to
                around 4,000 species of plants including medicinal trees,
                flowering trees and fascinating trails.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/3.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Bahirawakanda Temple</CardTitle>
              <CardText>
                Visible from Kandy is the Bahiravakanda Temple, which is 2 km
                from the city center and has a huge Buddha statue at Dhyana
                Mudra.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/4.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Kandy View Point</CardTitle>
              <CardText>
                It is located on Rajapihilla Mawatha at a height of 550 meters
                above sea level. It offers a panoramic view of Kandy Lake, Sri
                Dalada Palace, Kandy Royal Palace and the city center.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/5.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Royal Palace Park - Kandy</CardTitle>
              <CardText>
                Wells Park, also known as Wells Park or Rajavasala Park, A very
                well-maintained park and woodland, originally laid out by Sri
                Wickrama Rajasinghe with good walking trails.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/61.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Garadi Ella</CardTitle>
              <CardText>
                Located in the lush hills of Kandy district, Gerandi Falls is
                one of the most beautiful waterfalls in Sri Lanka, offering an
                adventurous journey through dense forests and rocky terrain.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/71.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Yahangala Mountain</CardTitle>
              <CardText>
                Steeped in Ramayana legend, Yahangala is the rock where King
                Ravana was laid to rest after he was killed by Lord Rama in the
                final battle. 'Yahangala' means bedrock in Sinhala.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/10.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Hanthana Mountain</CardTitle>
              <CardText>
                The Hanthana Mountain Range lies in the central highlands of Sri
                Lanka, south-west of Kandy. The maximum height of the range is
                1,200 m (3,800 ft). The mountain range consists of seven peaks.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/11.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Ambuluwawa</CardTitle>
              <CardText>
                Ambuluwawa Tower is the first Multi-Religious Center in Sri
                Lanka. It is known that Ambuluwawa Temple is evocative of a
                Buddhist 'stupa' with a height of 48 meters.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>

          {/* </Col> */}
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
