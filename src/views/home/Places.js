import React, { useState, useEffect } from "react";
import { Button, Container, CardImg, CardBody, CardText, Card, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where, or } from "firebase/firestore";
import { db } from "../../firebase.config";
import w1 from "assets/img/a1.png";

const styles = {
  section: {
    // backgroundColor: "#c0ecf0",
    // backgroundImage: `url(${w1})`,
    paddingTop: "20px",
    paddingBottom: "20px",
    minHeight: "100vh", // Ensures the section covers the viewport height
  },
  card: {
    width: "22rem",
    margin: "25px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "1.1s",
    position: "relative", // Make the card position relative for overlay positioning
    overflow: "hidden", // Ensure the overlay doesn't spill outside the card
  },
  cardImg: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    height: "300px", // Set a fixed height for the image
    objectFit: "cover", // Ensure the image covers the entire area
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    color: "white",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
};

function Places() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "articles");
      const q = query(
        articlesCollection,
        or(where("status", "==", "approved"), where("status", "==", null))
      );
      const articlesSnapshot = await getDocs(q);
      const articlesData = articlesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articlesData);
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="section section-tabs" id="places" style={styles.section}>
        <Container>
          <h3 className="title">Places</h3>
          <Row className="justify-content-center">
            {articles.map((article) => (
              <Col lg="4" md="6" sm="12" key={article.id}>
                <Card style={styles.card} onClick={() => navigate(`/article/${article.id}`)}>
                  <div style={{ position: "relative" }}>
                    <CardImg alt="..." className="img-raised" src={article.imageUrls[0]} style={styles.cardImg} />
                    <div style={styles.overlay}>{article.articleTitle}</div>
                  </div>
                  <CardBody>
                    <CardText>{`${article.articleContent.substring(0, 50)}...`}</CardText>
                    <Button color="primary">
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Places;
