/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href=""
            target="_blank"
          >
            Kandy Travel Guider
          </a>
          . Coded by{" "}
          <a
            href=""
            target="_blank"
          >
            Rashmi
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
