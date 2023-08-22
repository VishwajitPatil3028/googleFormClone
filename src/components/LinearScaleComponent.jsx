import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, Box, Typography } from '@mui/material';

const LinearScaleComponent = () => {
  const options = ['Worst', 'Bad', 'Neutral', 'Good', 'Best'];
  const [selectedOption, setSelectedOption] = useState('Neutral');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions with the selected option here
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
    <div>
      <Typography
            variant="h5" 
            sx={{ fontWeight: 'bold', pl: 2, pb:2 }} style={{ display: "flex", alignItems: "flex-start" }}
        >Linear Scale Component</Typography>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent='space-around'>
        <Typography>Worst</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            row
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={<Typography variant="body2">{index + 1}</Typography>}
                labelPlacement="top"
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Typography>Best</Typography>
      </Box>
      
    </div>
    </div>
  );
};

export default LinearScaleComponent;
