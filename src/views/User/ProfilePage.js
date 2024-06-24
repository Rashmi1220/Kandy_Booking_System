import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { collectionRef, storage } from "../../firebase.config";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
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
  Row,
  Alert
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    articleTitle: "",
    articleContent: "",
    caption: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setUploading(true);

    try {
      const imageUrls = [];
      for (const file of selectedFiles) {
        const storageRef = ref(storage, `articles/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      const formDataWithImages = { ...formData, imageUrls };

      await addDoc(collectionRef, formDataWithImages);

      alert("Article submitted successfully!");

      setSelectedFiles([]);
      setImagePreviews([]);
      setFormData({
        articleTitle: "",
        articleContent: "",
        caption: "",
      });
    } catch (error) {
      console.error("Error uploading images or submitting data:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (uploading) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [uploading]);

  return (
    <>
      <Navbar color="dark green" light expand="md">
        <Container>
          <NavbarBrand href="/"> <h4 style={{ color: "gold", fontFamily: "fantasy" }}>Kandy Travel Guider</h4> </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                onClick={(e) => {
                  navigate("/adminLogin");
                  e.preventDefault();
                }}
              >
                <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                <p>Admin</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h3 style={{ textAlign: "center" }}>Create Post</h3>
        {error && <Alert color="danger">{error}</Alert>}
        <Form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="articleTitle" style={{ display: "block", marginBottom: "5px" }}>Article Title:</label>
            <Input
              type="text"
              id="articleTitle"
              name="articleTitle"
              value={formData.articleTitle}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
              placeholder="Enter the title of your article"
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="articleContent" style={{ display: "block", marginBottom: "5px" }}>Article Content:</label>
            <textarea
              id="articleContent"
              name="articleContent"
              value={formData.articleContent}
              onChange={handleInputChange}
              style={{ width: "100%", height: "200px", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
              placeholder="Write your article here"
              required
            ></textarea>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="caption" style={{ display: "block", marginBottom: "5px" }}>Caption:</label>
            <Input
              type="text"
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
              placeholder="Enter the caption"
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="imageUpload" style={{ display: "block", marginBottom: "5px" }}>Upload Image(s):</label>
            <Input
              type="file"
              id="imageUpload" yy
              name="imageUpload"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <label htmlFor="imageUpload" style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" }}>
              Select Image(s)
            </label>
            {imagePreviews.length > 0 && (
              <div>
                <h3>Selected Image(s):</h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {imagePreviews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Preview ${index}`} style={{ width: "100px", height: "100px", margin: "5px" }} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button
            type="submit"
            disabled={uploading}
            style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" }}
          >
            {uploading ? "Uploading..." : "Submit Article"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ProfilePage;
