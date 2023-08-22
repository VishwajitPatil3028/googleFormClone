import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

const DropdownComponent = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions with the selected option here
    console.log("Selected option:", selectedOption);
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", pl: 2,pb: 2 }}
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          Dropdown Component
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Select an Option</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            label="Select an Option"
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default DropdownComponent;
