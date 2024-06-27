import React, { useState, useEffect } from "react";
import { createDetailsWidget } from "@livechat/agent-app-sdk";

function App() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
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
  const handleABClick = () => {
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const linkUrl = `https://backend.arcanebet.com/customers?page=1&customers[email_cont]=${encodedEmail}`;
      window.open(linkUrl, "_blank");
    }
  };

  const handleCVClick = () => {
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const linkUrl = `https://backend.casinovibes.com/customers?page=1&customers[email_cont]=${encodedEmail}`;
      window.open(linkUrl, "_blank");
    }
  };
  
  const handleNSClick = () => {
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const linkUrl = `https://backend.nuggetslots.com/customers?page=1&customers[email_cont]=${encodedEmail}`;
      window.open(linkUrl, "_blank");
    }
  };  

  return (
    <div className="App" style={{ marginTop: "20px" }}>
      {email && (
        <>
          <button onClick={handleABClick} style={{ marginLeft: "10px", marginRight: "10px" }}>Search email in ArcaneBet BackOffice!</button>
          <button onClick={handleCVClick} style={{ marginLeft: "10px", marginRight: "10px", marginTop: "20px"  }}>Search email in CasinoVibes BackOffice!</button>
          <button onClick={handleNSClick} style={{ marginLeft: "10px", marginRight: "10px", marginTop: "20px"  }}>Search email in NuggetSlots BackOffice!</button>
        </>
      )}
    </div>
  );
}

export default App;
