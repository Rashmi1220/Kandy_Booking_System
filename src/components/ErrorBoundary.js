import React from "react";
import { Container, Button } from "reactstrap";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2 style={{ color: "#e74c3c" }}>Something went wrong</h2>
          <p style={{ color: "#999", marginBottom: "20px" }}>
            {this.state.error?.message || "An unexpected error occurred."}
          </p>
          <Button color="primary" onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
