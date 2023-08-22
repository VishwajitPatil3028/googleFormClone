import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
  Button,
  Typography,
} from "@mui/material";

const MultiChoiceGridComponent = () => {
  const rows = ["Row 1", "Row 2", "Row 3"];
  const columns = ["Column 1", "Column 2", "Column 3"];

  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionChange = (rowIndex, columnIndex) => {
    setSelectedOption({ rowIndex, columnIndex });
  };

  const isSelected = (rowIndex, columnIndex) => {
    return (
      selectedOption.rowIndex === rowIndex &&
      selectedOption.columnIndex === columnIndex
    );
  };

  const handleSubmit = () => {
    const selectedRow = rows[selectedOption.rowIndex];
    const selectedColumn = columns[selectedOption.columnIndex];
    // You can perform any actions with the selected option here
    console.log("Selected option:", `${selectedRow} - ${selectedColumn}`);
  };

  return (
    <div>
      <div>
        <Typography
            variant="h5" 
            sx={{ fontWeight: 'bold', pl: 2 }} style={{ display: "flex", alignItems: "flex-start" }}
        >Multi-Choice Grid Component</Typography>
        <TableContainer component={Paper}>
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
                      <Radio
                        checked={isSelected(rowIndex, columnIndex)}
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

export default MultiChoiceGridComponent;
