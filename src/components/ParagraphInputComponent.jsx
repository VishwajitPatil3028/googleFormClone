import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const ParagraphInputComponent = () => {
  const [paragraph, setParagraph] = useState("");

  const handleParagraphChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions with the submitted paragraph here
    console.log("Submitted paragraph:", paragraph);
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div>
        <h2>Paragraph Input Component</h2>
        <TextField
          label="Your Paragraph"
          value={paragraph}
          onChange={handleParagraphChange}
          variant="filled"
          fullWidth
          multiline
          rows={6}
        />
      </div>
    </div>
  );
};

export default ParagraphInputComponent;
