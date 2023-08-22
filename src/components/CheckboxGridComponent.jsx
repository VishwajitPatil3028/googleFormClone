import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";

const CheckboxGridComponent = () => {
  const rows = ["Row 1", "Row 2", "Row 3"];
  const columns = ["Column 1", "Column 2", "Column 3"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (rowIndex, columnIndex) => {
    const option = `${rows[rowIndex]} - ${columns[columnIndex]}`;
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isOptionSelected = (rowIndex, columnIndex) => {
    return selectedOptions.includes(
      `${rows[rowIndex]} - ${columns[columnIndex]}`
    );
  };

  const handleSubmit = () => {
    // You can perform any actions with the selected options here
    console.log("Selected options:", selectedOptions);
  };

  return (
    <div >
      <div>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", pl: 2 }}
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          Checkbox Grid Component
        </Typography>
        <TableContainer component={Paper} sx={{pb:2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex} align="center">
                    <Typography variant="subtitle1">{column}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell>
                    <Typography variant="subtitle1">{row}</Typography>
                  </TableCell>
                  {columns.map((column, columnIndex) => (
                    <TableCell key={columnIndex} align="center">
                      <Checkbox
                        checked={isOptionSelected(rowIndex, columnIndex)}
                        onChange={() =>
                          handleOptionChange(rowIndex, columnIndex)
                        }
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    </div>
  );
};

export default CheckboxGridComponent;
