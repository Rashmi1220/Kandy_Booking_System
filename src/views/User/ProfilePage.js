import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { collectionRef, db, storage } from "../../firebase.config";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Form,
  Input,
  Alert,
  Card,
  Row,
  Col
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

function ProfilePage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    articleTitle: "",
    articleContent: "",
    caption: "",
    location: "",
    guideName: "",
    guidePhone: "",
    guideEmail: "",
    tourDuration: "",
    groupSize: "",
    difficultyLevel: "Easy",
    pricePerPerson: "",
    currency: "LKR",
    included: "",
    excluded: "",
    bestTimeToVisit: "",
    thingsToCarry: "",
    travelTips: "",
    rating: "5",
  });
  const [existingImages, setExistingImages] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isTitleUnique, setIsTitleUnique] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchArticleData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchArticleData = async () => {
    try {
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const articleData = docSnap.data();
        setFormData({
          articleTitle: articleData.articleTitle || "",
          articleContent: articleData.articleContent || "",
          caption: articleData.caption || "",
          location: articleData.location || "",
          guideName: articleData.guideName || "",
          guidePhone: articleData.guidePhone || "",
          guideEmail: articleData.guideEmail || "",
          tourDuration: articleData.tourDuration || "",
          groupSize: articleData.groupSize || "",
          difficultyLevel: articleData.difficultyLevel || "Easy",
          pricePerPerson: articleData.pricePerPerson || "",
          currency: articleData.currency || "LKR",
          included: articleData.included || "",
          excluded: articleData.excluded || "",
          bestTimeToVisit: articleData.bestTimeToVisit || "",
          thingsToCarry: articleData.thingsToCarry || "",
          travelTips: articleData.travelTips || "",
          rating: articleData.rating || "5",
        });
        setExistingImages(articleData.imageUrls || []);
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const checkTitleUniqueness = async (title) => {
    if (!title) {
      setIsTitleUnique(true);
      setError("Title is required.");
      return;
    }
    try {
      const articlesCollection = collection(db, "articles");
      const q = query(articlesCollection, where("articleTitle", "==", title));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setIsTitleUnique(true);
        setError("");
      } else {
        const duplicateDoc = querySnapshot.docs.find((doc) => doc.id !== id);
        if (duplicateDoc) {
          setIsTitleUnique(false);
          setError("This title is already in use. Please choose a unique title.");
        } else {
          setIsTitleUnique(true);
          setError("");
        }
      }
    } catch (error) {
      console.error("Error checking title uniqueness:", error);
      setIsTitleUnique(true);
      setError("Error checking title. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (event.target.name === "articleTitle") {
      checkTitleUniqueness(event.target.value);
    }
  };

  const handleRemoveImage = (index, isExisting) => {
    if (isExisting) {
      setExistingImages(existingImages.filter((_, i) => i !== index));
    } else {
      setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
      setImagePreviews(imagePreviews.filter((_, i) => i !== index));
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setUploading(true);

    try {
      const imageUrls = [...existingImages];
      for (const file of selectedFiles) {
        const storageRef = ref(storage, `articles/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      const formDataWithImages = { ...formData, imageUrls, status: "pending" };

      if (id) {
        await updateDoc(doc(db, "articles", id), formDataWithImages);
        setSuccess("Article updated successfully!");
      } else {
        await addDoc(collectionRef, { ...formDataWithImages, status: "pending" });
        setSuccess("Article submitted successfully! It will appear after admin approval.");
      }

      if (!id) {
        setSelectedFiles([]);
        setImagePreviews([]);
        setFormData({
          articleTitle: "", articleContent: "", caption: "", location: "",
          guideName: "", guidePhone: "", guideEmail: "", tourDuration: "",
          groupSize: "", difficultyLevel: "Easy", pricePerPerson: "", currency: "LKR",
          included: "", excluded: "", bestTimeToVisit: "", thingsToCarry: "",
          travelTips: "", rating: "5",
        });
      }
    } catch (error) {
      console.error("Error uploading:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (uploading) { event.preventDefault(); event.returnValue = ""; }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [uploading]);

  const sectionStyle = {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    border: "1px solid #e9ecef",
  };

  const sectionTitle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#007bff",
    marginBottom: "15px",
    paddingBottom: "8px",
    borderBottom: "2px solid #007bff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    transition: "border-color 0.3s",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: "#444",
    fontSize: "14px",
  };

  return (
    <>
      <Navbar color="dark" light expand="md" style={{ backgroundColor: "#333" }}>
        <Container>
          <NavbarBrand href="/" style={{ color: "gold", fontFamily: "fantasy" }}>
            <h4>Kandy Travel Guider</h4>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={() => navigate("/adminLogin")} style={{ cursor: "pointer" }}>
                <p>Admin</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ maxWidth: "950px", margin: "0 auto", padding: "20px 15px" }}>
        {error && <Alert color="danger" style={{ borderRadius: "8px" }}>{error}</Alert>}
        {success && <Alert color="success" style={{ borderRadius: "8px" }}>{success}</Alert>}

        <Card style={{ padding: "30px", border: "none", borderRadius: "15px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
          <h3 style={{ textAlign: "center", color: "#007bff", fontWeight: "700", marginBottom: "25px" }}>
            {id ? "Edit Article" : "Create New Guide Post"}
          </h3>

          <Form onSubmit={handleFormSubmit}>
            {/* Basic Info */}
            <div style={sectionStyle}>
              <div style={sectionTitle}>
                <i className="now-ui-icons files_paper" style={{ fontSize: "16px" }}></i>
                Basic Information
              </div>
              <Row>
                <Col md="6" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Article Title *</label>
                  <input type="text" name="articleTitle" value={formData.articleTitle} onChange={handleInputChange}
                    style={inputStyle} placeholder="Enter the title" required />
                </Col>
                <Col md="6" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Caption *</label>
                  <input type="text" name="caption" value={formData.caption} onChange={handleInputChange}
                    style={inputStyle} placeholder="Short caption for carousel" required />
                </Col>
              </Row>
              <div style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>Article Content *</label>
                <textarea name="articleContent" value={formData.articleContent} onChange={handleInputChange}
                  style={{ ...inputStyle, minHeight: "150px" }} placeholder="Write full article content here..." required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>Location Link *</label>
                <input type="text" name="location" value={formData.location} onChange={handleInputChange}
                  style={inputStyle} placeholder="Google Maps link or address" required />
              </div>
            </div>

            {/* Guide Info */}
            <div style={sectionStyle}>
              <div style={sectionTitle}>
                <i className="now-ui-icons users_circle-08" style={{ fontSize: "16px" }}></i>
                Guide Information
              </div>
              <Row>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Guide Name</label>
                  <input type="text" name="guideName" value={formData.guideName} onChange={handleInputChange}
                    style={inputStyle} placeholder="e.g. Kumara Perera" />
                </Col>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Guide Phone</label>
                  <input type="tel" name="guidePhone" value={formData.guidePhone} onChange={handleInputChange}
                    style={inputStyle} placeholder="e.g. +94 77 123 4567" />
                </Col>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Guide Email</label>
                  <input type="email" name="guideEmail" value={formData.guideEmail} onChange={handleInputChange}
                    style={inputStyle} placeholder="guide@email.com" />
                </Col>
              </Row>
            </div>

            {/* Tour Details */}
            <div style={sectionStyle}>
              <div style={sectionTitle}>
                <i className="now-ui-icons map-big-map" style={{ fontSize: "16px" }}></i>
                Tour Details
              </div>
              <Row>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Duration</label>
                  <select name="tourDuration" value={formData.tourDuration} onChange={handleInputChange}
                    style={inputStyle}>
                    <option value="">Select duration</option>
                    <option value="Half Day (4hrs)">Half Day (4hrs)</option>
                    <option value="Full Day (8hrs)">Full Day (8hrs)</option>
                    <option value="2 Days">2 Days</option>
                    <option value="3 Days">3 Days</option>
                    <option value="Custom">Custom</option>
                  </select>
                </Col>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Max Group Size</label>
                  <input type="number" name="groupSize" value={formData.groupSize} onChange={handleInputChange}
                    style={inputStyle} placeholder="e.g. 15" min="1" />
                </Col>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Difficulty Level</label>
                  <select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleInputChange}
                    style={inputStyle}>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Challenging">Challenging</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                </Col>
              </Row>
            </div>

            {/* Pricing */}
            <div style={sectionStyle}>
              <div style={sectionTitle}>
                <i className="now-ui-icons business_money-coins" style={{ fontSize: "16px" }}></i>
                Pricing Information
              </div>
              <Row>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Price Per Person *</label>
                  <input type="number" name="pricePerPerson" value={formData.pricePerPerson} onChange={handleInputChange}
                    style={inputStyle} placeholder="e.g. 5000" min="0" required />
                </Col>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Currency</label>
                  <select name="currency" value={formData.currency} onChange={handleInputChange}
                    style={inputStyle}>
                    <option value="LKR">LKR (Sri Lankan Rupee)</option>
                    <option value="USD">USD (US Dollar)</option>
                    <option value="EUR">EUR (Euro)</option>
                    <option value="GBP">GBP (British Pound)</option>
                  </select>
                </Col>
                <Col md="4" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Rating</label>
                  <select name="rating" value={formData.rating} onChange={handleInputChange}
                    style={inputStyle}>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col md="6" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>What's Included</label>
                  <textarea name="included" value={formData.included} onChange={handleInputChange}
                    style={{ ...inputStyle, minHeight: "80px" }} placeholder="e.g. Transport, Lunch, Guide fees, Entrance tickets" />
                </Col>
                <Col md="6" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>What's Excluded</label>
                  <textarea name="excluded" value={formData.excluded} onChange={handleInputChange}
                    style={{ ...inputStyle, minHeight: "80px" }} placeholder="e.g. Personal expenses, Tips, Travel insurance" />
                </Col>
              </Row>
            </div>

            {/* Travel Tips */}
            <div style={sectionStyle}>
              <div style={sectionTitle}>
                <i className="now-ui-icons travel_info" style={{ fontSize: "16px" }}></i>
                Travel Tips
              </div>
              <Row>
                <Col md="6" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Best Time to Visit</label>
                  <input type="text" name="bestTimeToVisit" value={formData.bestTimeToVisit} onChange={handleInputChange}
                    style={inputStyle} placeholder="e.g. December to April" />
                </Col>
                <Col md="6" style={{ marginBottom: "15px" }}>
                  <label style={labelStyle}>Things to Carry</label>
                  <input type="text" name="thingsToCarry" value={formData.thingsToCarry} onChange={handleInputChange}
                    style={inputStyle} placeholder="e.g. Sunscreen, Water bottle, Comfortable shoes" />
                </Col>
              </Row>
              <div style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>Additional Travel Tips</label>
                <textarea name="travelTips" value={formData.travelTips} onChange={handleInputChange}
                  style={{ ...inputStyle, minHeight: "80px" }} placeholder="Any other tips for visitors..." />
              </div>
            </div>

            {/* Image Upload */}
            <div style={sectionStyle}>
              <div style={sectionTitle}>
                <i className="now-ui-icons media-1_album" style={{ fontSize: "16px" }}></i>
                Images
              </div>
              <div style={{ marginBottom: "15px" }}>
                <Input type="file" id="imageUpload" accept="image/*" multiple onChange={handleFileChange}
                  style={{ display: "none" }} />
                <label htmlFor="imageUpload" style={{
                  backgroundColor: !isTitleUnique || uploading ? "gray" : "#007bff",
                  color: "#fff", border: "none", padding: "10px 25px", fontSize: "15px",
                  borderRadius: "25px", cursor: !isTitleUnique || uploading ? "not-allowed" : "pointer",
                  fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px",
                }}>
                  <i className="now-ui-icons arrows-1_cloud-upload-94" style={{ fontSize: "14px" }}></i>
                  Select Image(s)
                </label>
              </div>
              {(existingImages.length > 0 || imagePreviews.length > 0) && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {existingImages.map((url, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <img src={url} alt={`Existing ${index}`} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px", border: "2px solid #eee" }} />
                      <Button color="danger" size="sm" style={{ position: "absolute", top: "-8px", right: "-8px", borderRadius: "50%", width: "24px", height: "24px", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}
                        onClick={() => handleRemoveImage(index, true)}>&times;</Button>
                    </div>
                  ))}
                  {imagePreviews.map((preview, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <img src={preview} alt={`Preview ${index}`} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px", border: "2px solid #eee" }} />
                      <Button color="danger" size="sm" style={{ position: "absolute", top: "-8px", right: "-8px", borderRadius: "50%", width: "24px", height: "24px", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}
                        onClick={() => handleRemoveImage(index, false)}>&times;</Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button type="submit" disabled={uploading || !isTitleUnique}
                style={{
                  backgroundColor: "#007bff", color: "#fff", border: "none", padding: "14px 40px",
                  fontSize: "17px", borderRadius: "25px", fontWeight: "700", cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0,123,255,0.3)",
                }}>
                {uploading ? "Uploading..." : id ? "Update Article" : "Submit Article"}
              </Button>
            </div>
          </Form>
        </Card>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={() => navigate("/")}
            style={{
              backgroundColor: "transparent", border: "2px solid #007bff", color: "#007bff",
              padding: "8px 20px", borderRadius: "25px", fontSize: "14px", fontWeight: "600",
              display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#007bff"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#007bff"; }}>
            <i className="now-ui-icons arrows-1_minimal-left" style={{ fontSize: "12px" }}></i>
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
