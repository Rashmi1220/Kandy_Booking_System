import React, { useState, useEffect } from "react";
import { Button, Container, Carousel, CarouselItem, CarouselIndicators, Row, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { BallTriangle } from 'react-loader-spinner'

const DetailPage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  const fetchArticle = async () => {
    const articleDoc = doc(db, "articles", articleId);
    const articleSnapshot = await getDoc(articleDoc);
    if (articleSnapshot.exists()) {
      setArticle({ id: articleSnapshot.id, ...articleSnapshot.data() });
    } else {
      console.log("Article not found");
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [articleId]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === article?.imageUrls.length - 2 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? article?.imageUrls.length - 2 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  if (!article) return <div>



    ;<BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>;

  return (
    <Container>
      <div className="title">
        <h4 style={{ textAlign: "center", color: "greenyellow" }}>{article.articleTitle}</h4>
      </div>

      <Row className="justify-content-center">
        <Col lg="8" md="12">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={article.imageUrls.slice(1)} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {article.imageUrls.slice(1).map((imageUrl, index) => (
              <CarouselItem key={index}>
                <img src={imageUrl} alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{article.caption}</h5>
                </div>
              </CarouselItem>
            ))}
            <a className="carousel-control-prev" href="#pablo" role="button" onClick={previous}>
              <i className="now-ui-icons arrows-1_minimal-left"></i>
            </a>
            <a className="carousel-control-next" href="#pablo" role="button" onClick={next}>
              <i className="now-ui-icons arrows-1_minimal-right"></i>
            </a>
          </Carousel>
        </Col>
      </Row>
      {article?.location && <a href={article?.location} target='_blank'>go to location</a>}
      <h5 style={{ textAlign: "center", margin: 10, padding: 10 }}>{article.articleContent}</h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </Container>
  );
};

export default DetailPage;
