import React, { useState, useEffect } from "react";
import { createDetailsWidget } from "@livechat/agent-app-sdk";

function App() {
  const [email, setEmail] = useState(null);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Load user-defined URLs from local storage
    const savedUrls = JSON.parse(localStorage.getItem("customUrls")) || [];
    setUrls(savedUrls);

    createDetailsWidget().then(widget => {
      // set the initial email
      const profile = widget.getCustomerProfile();
      if (profile && profile.email) {
        setEmail(profile.email);
      }
  
      // listen for the customer_profile event and update the email
      widget.on("customer_profile", profile => {
        if (profile && profile.email) {
          setEmail(profile.email);
        }
      });
    });
  }, []); 

  const handleButtonClick = (urlFormat) => {
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const linkUrl = urlFormat.replace("{email}", encodedEmail);
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <div className="App" style={{ marginTop: "20px" }}>
      {email && (
        urls.map((entry, index) => (
          <button 
            key={index} 
            onClick={() => handleButtonClick(entry.urlFormat)} 
            style={{ marginLeft: "10px", marginRight: "10px", marginTop: "20px" }}
          >
            Search email in {entry.name} BackOffice!
          </button>
        ))
      )}
    </div>
  );
}

export default App;
