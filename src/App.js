import React, { useState, useEffect } from "react";
import { createDetailsWidget } from "@livechat/agent-app-sdk";

function App() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    createDetailsWidget({ timeout: 50000 }).then(widget => {
      // set the initial email
      const profile = widget.getCustomerProfile();
      setEmail(profile.email);

      // listen for the customer_profile event and update the email
      widget.on("customer_profile", profile => {
        setEmail(profile.email);
      });
    });
  }, []);

  const handleClick = () => {
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const linkUrl = `https://www.google.com/search?q=${encodedEmail}`;
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Search Google</button>
    </div>
  );
}

export default App;