import React from "react";
import DigitalArtGallery from "./digitalArtGallery";
import image1 from "./IMAGES/blooming steps.png";
import image2 from "./IMAGES/whispers of twilight.png";
import styles from "./index.css";

function Demo(props) {
  return (
    <>
      <div className="navbar">
        <a className="name">Digital Library</a>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <DigitalArtGallery image={image1} />
          </div>
          <div className="media-content">
            <DigitalArtGallery title="Blooming Steps" />
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <DigitalArtGallery image={image2} />
          </div>
          <div className="media-content">
            <DigitalArtGallery title="Whispers of Twilight" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
