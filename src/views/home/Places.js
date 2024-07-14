import React, { useState, useEffect } from "react";
import { Button, Container, CardImg, CardBody, CardTitle, CardText, Card } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where, or } from "firebase/firestore";
import { db } from "../../firebase.config";

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
      <div className="section section-tabs" id="places">
        <Container>
          <h3 className="title">Places</h3>
          {articles.map((article) => (
            <Card style={{ width: "20rem", margin: "25px" }} key={article.id}>
              <CardImg alt="..." className="img-raised" src={article.imageUrls[0]}></CardImg>
              <CardBody>
                <CardTitle tag="h4">{article.articleTitle}</CardTitle>
                <CardText>{`${article.articleContent.substring(0, 50)}...`}</CardText>
                <Button color="primary" onClick={() => navigate(`/article/${article.id}`)}>
                  Read More
                </Button>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Places;
