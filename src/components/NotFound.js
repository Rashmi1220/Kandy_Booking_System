import React from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: "center", padding: "150px 20px" }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#007bff" }}>404</h1>
      <h3 style={{ color: "#666", marginBottom: "10px" }}>Page Not Found</h3>
      <p style={{ color: "#999", marginBottom: "30px" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button color="primary" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
}

export default NotFound;
