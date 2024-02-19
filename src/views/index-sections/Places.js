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
import { useNavigate } from "react-router-dom";

// core components

function Places() {
  const navigate = useNavigate();

  return (
    <>
      <div className="section section-tabs" id="places">
        e
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
              <Button color="primary" onClick={() => navigate("/maligawa")}>
                Read More
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
              <Button color="primary" onClick={() => navigate("/garden")}>
                Read More
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
                onClick={() => navigate("/bahiravakanda")}
              >
                Read More
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
              <Button color="primary" onClick={() => navigate("/viewPoint")}>
                Read More
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
              <Button color="primary" onClick={() => navigate("/royalPark")}>
                Read More
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
              <Button color="primary" onClick={() => navigate("/")}>
                Read More
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
              <Button color="primary" onClick={() => navigate("/yahangala")}>
                Read More
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
              <Button color="primary" onClick={() => navigate("/hanthana")}>
                Read More
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
              <Button color="primary" onClick={() => navigate("/ambuluwawa")}>
                Read More
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/55.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Udawaththa Kale</CardTitle>
              <CardText>
              Udawattakele Forest Reserve often spelled as Udawatta Kele, is a historic forest reserve on a hill-ridge in the city of Kandy. It is 104 hectares large. During the days of the Kandyan kingdom, 
              Udawattakele was known as "Uda Wasala Watta" in Sinhalese meaning "the garden above the royal palace".
              </CardText>
              <Button color="primary" onClick={() => navigate("/udawaththakale")}>
                Read More
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/76.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Peradeniya Campus</CardTitle>
              <CardText>
              The University covers about 700 hectares of land and the developed area covering approximately 130 hectares is occupied by buildings of the Faculties, Halls of Residence, Staff bungalows etc. 
              Throughout the campus most trees begin to bear flowers in early March signaling the coming of spring.
              </CardText>
              <Button color="primary" onClick={() => navigate("/peradeniyacampus")}>
                Read More
              </Button>
            </CardBody>
          </Card>

          <Card style={{ width: "20rem", margin: "25px" }}>
            <CardImg
              alt="..."
              className="img-raised"
              src={require("assets/img/33.jpg")}
            ></CardImg>
            <CardBody>
              <CardTitle tag="h4">Bellwood</CardTitle>
              <CardText>
              This magnificent scenic spot is not far from the Kandy city limits and you can easily reach the place from Kandy city via Ampitiya town to Talatuoya and then to Bellwood area. 
              This place is considered a camping ground and if you camp overnight near Muthu Kelina lake make sure to watch the sunrise.
              </CardText>
              <Button color="primary" onClick={() => navigate("/bellwood")}>
                Read More
              </Button>
            </CardBody>
          </Card>

          {/* </Col> */}
        </Container>
      </div>
    </>
  );
}

export default Places;
