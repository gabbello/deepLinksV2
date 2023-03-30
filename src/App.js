import React, { useState, useEffect } from "react";
import { createDetailsWidget } from "@livechat/agent-app-sdk";

function App() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    createDetailsWidget({ timeout: 15cam 000 }).then(widget => {
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
  const handleClick = () => {
    console.log("Button clicked");
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const linkUrl = `https://backend.arcanebet.com/customers?page=1&customers[email_cont]=${encodedEmail}`;
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <div className="App" style={{ marginTop: "20px" }}>
      {email && (
         <button onClick={handleClick} style={{ marginLeft: "10px" }}>Search email in AB BO</button>
      )}
    </div>
  );
}

export default App;
