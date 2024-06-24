import React, { useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Alert
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";

import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        // Check if the entered email and password match the super admin credentials
        if (email !== "rashmi@gmail.com" || password !== "123456") {
            setError("Invalid admin credentials.");
            return;
        }

        try {
            // Sign in with email and password using Firebase authentication
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to the profile page after successful login
            navigate("/dashboard"); // Change "/profilePage" to the appropriate route
        } catch (err) {
            console.error("Error:", err.message);
            // Handle error (e.g., show error message)
            if (err.code === 'auth/wrong-password') {
                setError("Incorrect password. Please try again.");
            } else if (err.code === 'auth/user-not-found') {
                setError("No user found with this email. Please check your email or sign up.");
            } else {
                setError("Login failed. Please try again.");
            }
        }
    };

    return (
        <>
            <div className="section section-signup" style={{ backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")", backgroundSize: "cover", backgroundPosition: "top center", minHeight: "700px" }}>
                <Container>
                    <Row>
                        <Card className="card-signup" data-background-color="blue">
                            <Form className="form" onSubmit={handleSubmit}>
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">Admin Login</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    {error && (
                                        <Alert color="danger">
                                            {error}
                                        </Alert>
                                    )}
                                    <InputGroup className="no-border">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="now-ui-icons ui-1_email-85"></i></InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email..." type="email" value={email} onChange={handleEmailChange} required />
                                    </InputGroup>
                                    <InputGroup className="no-border">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="now-ui-icons ui-1_lock-circle-open"></i></InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Password..." type="password" value={password} onChange={handlePasswordChange} required />
                                    </InputGroup>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button className="btn-neutral btn-round" color="info" type="submit">Submit</Button>
                                    <br />

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
