import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; // Import the icons
import "./ContactUs.css"; // Import your CSS file for modal styling

const ContactUs = ({ closeModal }) => {
  const vendor = {
    email: "nagendra@example.com",
    phone: "+1 234 567 890",
    address: "123 Dummy St, Test City, TX 12345",
  };

  return (
    <div className="custom-modal">
      <div className="modal-content">
        {/* Close "X" mark */}
        <span className="close-icon" onClick={closeModal}>
          &times;
        </span>
        <h1>
          <strong>Get In Touch:</strong>
        </h1>
        {/* <h1><strong>NAGENDRA</strong></h1> */}

        <div className="contact-info">
          <div className="mail">
            <MdEmail className="contact-icon" />
            <strong>Email Id: </strong>
            <p>{vendor.email}</p>
          </div>

          <div className="mail">
            <MdPhone className="contact-icon" />
            <strong>Phone No:</strong> 
            <p>{vendor.phone}</p>
          </div>

          <div className="mail">
            <MdLocationOn className="contact-icon" />
            <strong>Address:</strong>
            <p>{vendor.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
