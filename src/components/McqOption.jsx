import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Typography } from '@mui/material';

const McqComponent = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div>
        <Typography
            variant="h5" 
            sx={{ fontWeight: 'bold', pl: 2 }}
        >MCQ Component</Typography>
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">Select an option:</FormLabel> */}
          <RadioGroup value={selectedOption} onChange={handleOptionSelect}>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default McqComponent;
