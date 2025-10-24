import React from "react";
import "./ContactCard.css"; // optional CSS for styling

interface ContactData {
  name: string;
  number: string;
  image?: string;
}

const ContactCard: React.FC<ContactData> = ({ name, number, image }) => {
  return (
    <div className="contact-card">
      {image && <img src={image} alt={name} className="contact-card-img" />}
      <div className="contact-card-info">
        <h3>{name}</h3>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default ContactCard;