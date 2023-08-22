import React, { useState } from "react";
import { FormControl, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";

const CheckboxComponent = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = () => {
    // You can perform any actions with the selected options here
    console.log("Selected options:", selectedOptions);
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div>
        <Typography variant="h5" sx={{ fontWeight: "bold", pl: 2 }}>
          Checkbox Component
        </Typography>
        <FormControl>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                />
              }
              label={option}
            />
          ))}
        </FormControl>
      </div>
    </div>
  );
};

export default CheckboxComponent;
