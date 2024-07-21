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
  Card
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
    location: ""
  });
  const [existingImages, setExistingImages] = useState([]);
  const [error, setError] = useState("");
  const [isTitleUnique, setIsTitleUnique] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(isTitleUnique)

  useEffect(() => {
    if (id) {
      fetchArticleData();
    }
  }, [id]);

  const fetchArticleData = async () => {
    try {
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const articleData = docSnap.data();
        setFormData({
          articleTitle: articleData.articleTitle,
          articleContent: articleData.articleContent,
          caption: articleData.caption,
          location: articleData.location
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
    try {
      const articlesCollection = collection(db, "articles"); // Correct usage of collection
      const q = query(articlesCollection, where("articleTitle", "==", title));
      const querySnapshot = await getDocs(q);

      setIsTitleUnique(!querySnapshot.empty);
      if(querySnapshot.empty){
        setError("")
      }else{ setError("This title is already in use. Please choose a unique title.");
      }
    } catch (error) {
      console.error("Error checking title uniqueness:", error);
      setIsTitleUnique(true); // Assume unique if error occurs
      setError("This title is already in use. Please choose a unique title.");
      
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
    setUploading(true);

    try {
      const imageUrls = [...existingImages];
      for (const file of selectedFiles) {
        const storageRef = ref(storage, `articles/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      const formDataWithImages = { ...formData, imageUrls, status: "pending" };

     

      if (id) {
        // Update the existing article
        await updateDoc(doc(db, "articles", id), formDataWithImages);
        alert("Article updated successfully!");
      } else {
        // Create a new article
        await addDoc(collectionRef, { ...formDataWithImages, status: "pending" });
        alert("Article submitted successfully!");
      }

      setSelectedFiles([]);
      setImagePreviews([]);
      setFormData({
        articleTitle: "",
        articleContent: "",
        caption: "",
        location: ""
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
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2px", border: "20px" }}>
        {error && <Alert color="danger">{error}</Alert>}
        <Card style={{ padding: "10px" }}>
          <h3 style={{ textAlign: "center", color: "blue" }}><b>Create Post</b></h3>

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
              <label htmlFor="location" style={{ display: "block", marginBottom: "5px" }}>Location:</label>
              <Input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
                placeholder="Enter location link"
                required
              />
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
              disabled={isTitleUnique||uploading}
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {(isTitleUnique|| uploading)?
              <label htmlFor="imageUpload" 
              style={{ 
                backgroundColor: "gray", 
                color: "#fff", 
                border: "none", 
                padding: "10px 20px", 
                fontSize: "16px", 
                borderRadius: "5px", 
                }}>
                Select Image(s)
              </label>
              :
              <label htmlFor="imageUpload" 
              style={{ 
                backgroundColor: "#007bff", 
                color: "#fff", 
                border: "none", 
                padding: "10px 20px", 
                fontSize: "16px", 
                borderRadius: "5px", 
                cursor: "pointer" }}>
                Select Image(s)
              </label>
              }
              {(existingImages.length > 0 || imagePreviews.length > 0) && (
                <div>
                  <h3>Selected Image(s):</h3>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {existingImages.map((url, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <img src={url} alt={`Existing ${index}`} style={{ width: "100px", height: "100px", margin: "5px" }} />
                        <Button
                          color="danger"
                          size="sm"
                          style={{ position: "absolute", top: "5px", right: "5px" }}
                          onClick={() => handleRemoveImage(index, true)}
                        >
                          &times;
                        </Button>
                      </div>
                    ))}
                    {imagePreviews.map((preview, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <img src={preview} alt={`Preview ${index}`} style={{ width: "100px", height: "100px", margin: "5px" }} />
                        <Button
                          color="danger"
                          size="sm"
                          style={{ position: "absolute", top: "5px", right: "5px" }}
                          onClick={() => handleRemoveImage(index, false)}
                        >
                          &times;
                        </Button>
                      </div>
                    ))}
                           </div>
                </div>
              )}
            </div>
            <Button
              type="submit"
              disabled={uploading || isTitleUnique}
              style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" }}
            >
             {uploading ? "Uploading..." : id ? "Update Article" : "Submit Article"}
            
            </Button>
          </Form>
        </Card>
        <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
          Go back
        </Button>
      </div>
    </>
  );
}

export default ProfilePage;
