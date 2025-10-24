import React from "react";
import "./Photos.css"; // optional CSS for styling

interface PhotoData {
  title: string;
  date: string;
  image: string; // optional image for the card
  link: string; // link to the photo album
}

const Photos: React.FC<PhotoData> = ({ title, date, image, link }) => {
  return (
    <>
      <div className="photo-card">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {image && <img src={image} className="photo-card-img" />}
          <div className="photo-card-info">
            <h3>{title}</h3>
            <p>{date}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Photos;