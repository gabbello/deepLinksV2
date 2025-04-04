import React, { useState, useEffect } from "react";
import { createFullscreenWidget } from "@livechat/agent-app-sdk";

function Settings() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    createFullscreenWidget().then(widget => {
      // Load initial settings from local storage or backend
      const savedUrls = JSON.parse(localStorage.getItem("customUrls")) || [];
      setUrls(savedUrls);

      // Save settings when the widget is closed
      widget.on("save", () => {
        localStorage.setItem("customUrls", JSON.stringify(urls));
        widget.notifySaveComplete();
      });
    });
  }, [urls]);

  const handleUrlChange = (index, field, value) => {
    const updatedUrls = [...urls];
    updatedUrls[index][field] = value;
    setUrls(updatedUrls);
  };

  const addUrl = () => {
    setUrls([...urls, { name: "", urlFormat: "" }]);
  };

  const removeUrl = (index) => {
    const updatedUrls = urls.filter((_, i) => i !== index);
    setUrls(updatedUrls);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Configure URL Formats</h2>
      {urls.map((url, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Name"
            value={url.name}
            onChange={(e) => handleUrlChange(index, "name", e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="URL Format"
            value={url.urlFormat}
            onChange={(e) => handleUrlChange(index, "urlFormat", e.target.value)}
            style={{ marginRight: "10px", width: "300px" }}
          />
          <button onClick={() => removeUrl(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addUrl}>Add URL</button>
    </div>
  );
}

export default Settings;