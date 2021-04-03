import React from "react";
import "../styles/ContactList.css"

const ContactList = () => {
  return (
    <div className="contactlist">
      <p>Contacts</p>
      <ul>
        <li>Sparky, 18</li>
        <li>Corey, 49</li>
        <li>AnJu, 21</li>
        <li>Flower, 21</li>
      </ul>
    </div>
  );
};

export default ContactList;
