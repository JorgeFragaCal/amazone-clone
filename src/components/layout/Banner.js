import React from "react";
import "../styles/Banner.css";

function Banner({ image }) {
  return (
    <div className="banner__container">
      <a href="">
        <img src={image} alt="" />
      </a>
    </div>
  );
}

export default Banner;
