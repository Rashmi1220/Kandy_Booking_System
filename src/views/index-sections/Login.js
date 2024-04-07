import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., login request)
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirect to a different route after successful login
    navigate("/dashboard"); // Change "/dashboard" to the appropriate route
  };

  return (
    <>
      <div className="section section-signup" style={{backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")", backgroundSize: "cover", backgroundPosition: "top center", minHeight: "700px"}}>
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form className="form" onSubmit={handleSubmit}>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="now-ui-icons ui-1_email-85"></i></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email..." type="email" value={email} onChange={handleEmailChange}></Input>
                  </InputGroup>
                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="now-ui-icons ui-1_lock-circle-open"></i></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password..." type="password" value={password} onChange={handlePasswordChange}></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-neutral btn-round" color="info" type="submit"onClick={() => navigate("/profilePage")}>Submit</Button>
                  <br/>
                  <Button  onClick={() => navigate("/signUp")}>Create Account</Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
    
      </div>
    </>
  );
}

export default Login;
