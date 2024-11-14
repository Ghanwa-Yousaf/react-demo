import React from "react";
import styles from "./index.css";

export const DigitalArtGallery = (props) => {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.title}</h2>
    </div>
  );
};
export default DigitalArtGallery;
