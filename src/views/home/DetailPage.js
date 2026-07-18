import React, { useState, useEffect } from "react";
import { Button, Container, Carousel, CarouselItem, CarouselIndicators, Row, Col, Card } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { BallTriangle } from "react-loader-spinner";

const DetailPage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleDoc = doc(db, "articles", articleId);
        const articleSnapshot = await getDoc(articleDoc);
        if (articleSnapshot.exists()) {
          setArticle({ id: articleSnapshot.id, ...articleSnapshot.data() });
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [articleId]);

  const next = () => {
    const nextIndex = activeIndex === (article?.imageUrls?.length || 1) - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const prevIndex = activeIndex === 0 ? (article?.imageUrls?.length || 1) - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const goToIndex = (newIndex) => setActiveIndex(newIndex);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <BallTriangle height={100} width={100} radius={5} color="#007bff" ariaLabel="loading" visible={true} />
      </div>
    );
  }

  if (notFound) {
    return (
      <Container style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2 style={{ color: "#e74c3c" }}>Article Not Found</h2>
        <p style={{ color: "#999" }}>The article you're looking for doesn't exist or has been removed.</p>
        <Button color="primary" onClick={() => navigate("/")}>Go Back Home</Button>
      </Container>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const num = parseInt(rating) || 5;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className="now-ui-icons ui-1_star" style={{ color: i <= num ? "#f5a623" : "#ddd", fontSize: "18px" }}></i>
      );
    }
    return stars;
  };

  const imageUrls = article?.imageUrls || [];

  return (
    <div style={{ backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      {imageUrls.length > 0 && (
        <div style={{ position: "relative", height: "500px", overflow: "hidden" }}>
          <img src={imageUrls[0]} alt={article.articleTitle}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}></div>
          <div style={{ position: "absolute", bottom: "30px", left: "30px", right: "30px", zIndex: 2 }}>
            <Container>
              <h1 style={{ color: "white", fontWeight: "800", fontSize: "2.5rem", textShadow: "0 2px 10px rgba(0,0,0,0.3)", marginBottom: "10px" }}>
                {article.articleTitle}
              </h1>
              {article.caption && (
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", margin: 0 }}>
                  {article.caption}
                </p>
              )}
            </Container>
          </div>
          <Button onClick={() => navigate("/")} style={{
            position: "absolute", top: "20px", left: "20px", zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.9)", border: "none", color: "#333",
            padding: "8px 18px", borderRadius: "25px", fontSize: "14px", fontWeight: "600",
            display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}>
            <i className="now-ui-icons arrows-1_minimal-left" style={{ fontSize: "12px" }}></i>
            Back
          </Button>
        </div>
      )}

      <Container style={{ padding: "30px 15px" }}>
        <Row>
          {/* Main Content */}
          <Col lg="8" md="12">
            {/* Image Carousel */}
            {imageUrls.length > 1 && (
              <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", overflow: "hidden", marginBottom: "25px" }}>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                  <CarouselIndicators items={imageUrls} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {imageUrls.map((imageUrl, index) => (
                    <CarouselItem key={index}>
                      <img src={imageUrl} alt={`${article.articleTitle} - ${index + 1}`}
                        style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                    </CarouselItem>
                  ))}
                  <a className="carousel-control-prev" href="#pablo" role="button" onClick={(e) => { e.preventDefault(); previous(); }}>
                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#pablo" role="button" onClick={(e) => { e.preventDefault(); next(); }}>
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>
              </Card>
            )}

            {/* Article Content */}
            <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "30px", marginBottom: "25px" }}>
              <h3 style={{ fontWeight: "700", color: "#2c3e50", marginBottom: "15px" }}>About This Place</h3>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#555", whiteSpace: "pre-wrap" }}>
                {article.articleContent}
              </p>
            </Card>

            {/* Travel Tips */}
            {(article.bestTimeToVisit || article.thingsToCarry || article.travelTips) && (
              <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "30px", marginBottom: "25px" }}>
                <h3 style={{ fontWeight: "700", color: "#2c3e50", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="now-ui-icons travel_info" style={{ color: "#007bff", fontSize: "22px" }}></i>
                  Travel Tips
                </h3>
                <Row>
                  {article.bestTimeToVisit && (
                    <Col md="4" style={{ marginBottom: "15px" }}>
                      <div style={{ backgroundColor: "#e8f5e9", padding: "15px", borderRadius: "10px", height: "100%" }}>
                        <h6 style={{ color: "#2e7d32", fontWeight: "700", marginBottom: "8px" }}>
                          <i className="now-ui-icons weather_sun-62" style={{ marginRight: "5px" }}></i>
                          Best Time to Visit
                        </h6>
                        <p style={{ color: "#555", margin: 0, fontSize: "14px" }}>{article.bestTimeToVisit}</p>
                      </div>
                    </Col>
                  )}
                  {article.thingsToCarry && (
                    <Col md="4" style={{ marginBottom: "15px" }}>
                      <div style={{ backgroundColor: "#e3f2fd", padding: "15px", borderRadius: "10px", height: "100%" }}>
                        <h6 style={{ color: "#1565c0", fontWeight: "700", marginBottom: "8px" }}>
                          <i className="now-ui-icons shopping_bag-16" style={{ marginRight: "5px" }}></i>
                          Things to Carry
                        </h6>
                        <p style={{ color: "#555", margin: 0, fontSize: "14px" }}>{article.thingsToCarry}</p>
                      </div>
                    </Col>
                  )}
                  {article.travelTips && (
                    <Col md="4" style={{ marginBottom: "15px" }}>
                      <div style={{ backgroundColor: "#fff3e0", padding: "15px", borderRadius: "10px", height: "100%" }}>
                        <h6 style={{ color: "#e65100", fontWeight: "700", marginBottom: "8px" }}>
                          <i className="now-ui-icons bulb-63" style={{ marginRight: "5px" }}></i>
                          Tips
                        </h6>
                        <p style={{ color: "#555", margin: 0, fontSize: "14px" }}>{article.travelTips}</p>
                      </div>
                    </Col>
                  )}
                </Row>
              </Card>
            )}
          </Col>

          {/* Sidebar */}
          <Col lg="4" md="12">
            {/* Price Card */}
            {(article.pricePerPerson || article.currency) && (
              <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "25px", marginBottom: "20px", textAlign: "center" }}>
                <h6 style={{ color: "#999", textTransform: "uppercase", letterSpacing: "1px", fontSize: "12px", marginBottom: "5px" }}>Starting From</h6>
                <h2 style={{ color: "#28a745", fontWeight: "800", margin: "0 0 5px" }}>
                  {article.currency === "LKR" ? "Rs." : article.currency === "USD" ? "$" : article.currency === "EUR" ? "\u20AC" : "\u00A3"}
                  {article.pricePerPerson}
                </h2>
                <p style={{ color: "#999", fontSize: "13px", marginBottom: "15px" }}>per person</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "3px", marginBottom: "15px" }}>
                  {renderStars(article.rating)}
                </div>
                {article?.location && (
                  <Button tag="a" href={article.location} target="_blank" rel="noopener noreferrer" style={{
                    width: "100%", backgroundColor: "#28a745", color: "white", border: "none",
                    padding: "12px", borderRadius: "25px", fontWeight: "700", fontSize: "15px",
                    boxShadow: "0 4px 15px rgba(40,167,69,0.3)", textDecoration: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  }}>
                    <i className="now-ui-icons location_pin"></i>
                    View on Map
                  </Button>
                )}
              </Card>
            )}

            {/* Tour Details */}
            {(article.tourDuration || article.groupSize || article.difficultyLevel) && (
              <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "25px", marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "700", color: "#2c3e50", marginBottom: "15px" }}>Tour Details</h5>
                {article.tourDuration && (
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                    <i className="now-ui-icons time_alarm" style={{ color: "#007bff", fontSize: "18px" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>Duration</p>
                      <p style={{ margin: 0, fontWeight: "600", color: "#333" }}>{article.tourDuration}</p>
                    </div>
                  </div>
                )}
                {article.groupSize && (
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                    <i className="now-ui-icons users_circle-08" style={{ color: "#007bff", fontSize: "18px" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>Max Group Size</p>
                      <p style={{ margin: 0, fontWeight: "600", color: "#333" }}>{article.groupSize} people</p>
                    </div>
                  </div>
                )}
                {article.difficultyLevel && (
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                    <i className="now-ui-icons ui-1_settings-gear-63" style={{ color: "#007bff", fontSize: "18px" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>Difficulty</p>
                      <p style={{ margin: 0, fontWeight: "600", color: "#333" }}>{article.difficultyLevel}</p>
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Guide Card */}
            {(article.guideName || article.guidePhone || article.guideEmail) && (
              <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "25px", marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "700", color: "#2c3e50", marginBottom: "15px" }}>Your Guide</h5>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#007bff", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "24px", fontWeight: "700" }}>
                    {article.guideName ? article.guideName.charAt(0).toUpperCase() : "G"}
                  </div>
                  <div>
                    <h6 style={{ margin: 0, fontWeight: "700", color: "#333" }}>{article.guideName || "Professional Guide"}</h6>
                    <div style={{ display: "flex", gap: "3px" }}>{renderStars(article.rating)}</div>
                  </div>
                </div>
                {article.guidePhone && (
                  <a href={`tel:${article.guidePhone}`} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px", marginBottom: "8px", textDecoration: "none", color: "#333" }}>
                    <i className="now-ui-icons tech_mobile" style={{ color: "#28a745", fontSize: "16px" }}></i>
                    <span style={{ fontSize: "14px" }}>{article.guidePhone}</span>
                  </a>
                )}
                {article.guideEmail && (
                  <a href={`mailto:${article.guideEmail}`} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px", textDecoration: "none", color: "#333" }}>
                    <i className="now-ui-icons ui-1_email-85" style={{ color: "#007bff", fontSize: "16px" }}></i>
                    <span style={{ fontSize: "14px" }}>{article.guideEmail}</span>
                  </a>
                )}
              </Card>
            )}

            {/* Included / Excluded */}
            {(article.included || article.excluded) && (
              <Card style={{ border: "none", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "25px" }}>
                <h5 style={{ fontWeight: "700", color: "#2c3e50", marginBottom: "15px" }}>What's Included</h5>
                {article.included && (
                  <div style={{ marginBottom: "15px" }}>
                    {article.included.split(",").map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <i className="now-ui-icons ui-1_check" style={{ color: "#28a745", fontSize: "14px" }}></i>
                        <span style={{ fontSize: "14px", color: "#555" }}>{item.trim()}</span>
                      </div>
                    ))}
                  </div>
                )}
                {article.excluded && (
                  <div>
                    <h6 style={{ fontWeight: "600", color: "#666", marginBottom: "8px" }}>Not Included</h6>
                    {article.excluded.split(",").map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <i className="now-ui-icons ui-1_simple-remove" style={{ color: "#dc3545", fontSize: "14px" }}></i>
                        <span style={{ fontSize: "14px", color: "#555" }}>{item.trim()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
