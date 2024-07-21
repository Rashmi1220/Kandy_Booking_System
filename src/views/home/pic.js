import React from "react";
import n1Image from "assets/img/n1.jpg";

const styles = {
  gallery: {
    border: "1px solid #ccc",
  },
  galleryHover: {
    border: "1px solid #777",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  desc: {
    padding: "15px",
    textAlign: "center",
  },
  responsive: {
    padding: "0 6px",
    float: "left",
    width: "24.99999%",
  },
  responsiveSmall: {
    width: "49.99999%",
    margin: "6px 0",
  },
  responsiveXSmall: {
    width: "100%",
  },
  clearfix: {
    content: "",
    display: "table",
    clear: "both",
  },
};

function Pic() {
  return (
    <>
      <div style={styles.responsive}>
        <div style={styles.gallery}>
          <a target="_blank" href="img_5terre.jpg">
            <img src="1.jpg" alt="Cinque Terre" style={styles.img} />
          </a>
          <div style={styles.desc}>Add a description of the image here</div>
        </div>
      </div>

      <div style={styles.responsive}>
        <div style={styles.gallery}>
          <a target="_blank" href="img_forest.jpg">
            <img src="2.jpg" alt="Forest" style={styles.img} />
          </a>
          <div style={styles.desc}>Add a description of the image here</div>
        </div>
      </div>

      <div style={styles.responsive}>
        <div style={styles.gallery}>
          <a target="_blank" href="img_lights.jpg">
            <img src="3.jpg" alt="Northern Lights" style={styles.img} />
          </a>
          <div style={styles.desc}>Add a description of the image here</div>
        </div>
      </div>

      <div style={styles.responsive}>
        <div style={styles.gallery}>
          <a target="_blank" href="img_mountains.jpg">
            <img src={n1Image} alt="Mountains" style={styles.img} />
          </a>
          <div style={styles.desc}>Add a description of the image here</div>
        </div>
      </div>

      <div style={styles.clearfix}></div>
    </>
  );
}

export default Pic;
