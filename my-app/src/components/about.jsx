import React from "react";

// the image is  a default value if no prop is passed
const about = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo">
        <p> {about}</p>
      </img>
    </aside>
  );
};

export default about;
