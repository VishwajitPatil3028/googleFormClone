import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const ShortAnswerComponent = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions with the submitted answer here
    console.log("Submitted answer:", answer);
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div>
        <Typography variant="h5" sx={{ fontWeight: "bold", pl: 2 }}>
          Short Answer Component
        </Typography>
        <TextField
          label="Your Answer"
          value={answer}
          onChange={handleAnswerChange}
          variant="filled"
          fullWidth
          multiline
          rows={1}
        />
      </div>
    </div>
  );
};

export default ShortAnswerComponent;
