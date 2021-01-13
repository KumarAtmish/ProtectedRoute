import React from "react";
import "./NotFound.css";
import image from "../Components/Image/image.jpg";

const NotFound = () => {
  return (
    <div>
      <h4 className="page">Page Not Found</h4>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
};
export default NotFound;
