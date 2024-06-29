import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import required functions from firebase/auth
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Alert
} from "reactstrap";
import { doc, setDoc } from "firebase/firestore";
import { db } from "firebase.config";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    phoneNumber: "",
    location: ""
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Input validations
    if (!formData.firstName) {
      setError("First Name is required.");
      return;
    }

    if (!formData.lastName) {
      setError("Last Name is required.");
      return;
    }

    if (!formData.email) {
      setError("Email is required.");
      return;
    }

    if (!formData.password) {
      setError("Password is required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!formData.organization) {
      setError("Organization is required.");
      return;
    }

    if (!formData.phoneNumber) {
      setError("Phone Number is required.");
      return;
    }

    if (!formData.location) {
      setError("Location is required.");
      return;
    }

    try {
      setUploading(true);
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        organization: formData.organization,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
        uid: user.uid
      });

      // Optionally update user profile
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });

      // Redirect to login page upon successful sign-up
      navigate("/login");
    } catch (err) {
      console.error("Error:", err.message);
      setError(`Error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="section section-signup">
      <Container>
        <Row>
          <Card className="card-signup" data-background-color="blue">
            <Form className="form" onSubmit={handleSubmit}>
              <CardHeader className="text-center">
                <CardTitle className="title-up" tag="h3">
                  Sign Up
                </CardTitle>
              </CardHeader>
              <CardBody>
                {error && (
                  <Alert color="danger">
                    {error}
                  </Alert>
                )}
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password..."
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons business_bank"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Organization..."
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons tech_mobile"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone Number..."
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons location_pin"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Location..."
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="info"
                  size="lg"
                  type="submit"
                  disabled={uploading}
                  style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" }}
                >
                  {uploading ? "Uploading..." : "Get Started"}
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
