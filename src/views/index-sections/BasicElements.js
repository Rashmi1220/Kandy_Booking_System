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
          <Card style={{ width: "20rem" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/1.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Sri Dalada Maligawa</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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

          <Card style={{ width: "20rem" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/1.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Sri Dalada Maligawa</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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

          <Card style={{ width: "20rem" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/1.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Sri Dalada Maligawa</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
