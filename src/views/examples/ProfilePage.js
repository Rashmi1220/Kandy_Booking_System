import React from "react";

function ProfilePage() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Profile Page</h1>
      <form style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="articleTitle" style={{ display: "block", marginBottom: "5px" }}>Article Title:</label>
          <input
            type="text"
            id="articleTitle"
            name="articleTitle"
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
            style={{ width: "100%", height: "200px", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
            placeholder="Write your article here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" }}
        >
          Submit Article
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
