import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../../assests/logo.png';  
import { MdContactMail } from "react-icons/md";
import "@fontsource/poppins";
import ContactUs from '../contactus/ContactUs'; // Import ContactUs component

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "A COMPLETE MULTIPLE BUSINESS PLATFORM";
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval); 
  }, [fullText]); // Added fullText as a dependency to prevent stale closure

  // Function to open the modal
  const openContactModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeContactModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li className="business-rasta">{displayedText}</li>
            <li>
              <button onClick={openContactModal} className="contact-button">
                <MdContactMail className='icon' />Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Render the ContactUs modal */}
      {isModalOpen && <ContactUs closeModal={closeContactModal} />}
    </div>
  );
}

export default LandingPage;
