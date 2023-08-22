// import React, { useState } from "react";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   Typography,
// } from "@mui/material";
// import McqOption from "./McqOption";
// import CheckboxComponent from "./CheckboxComponent";
// import ShortAnswerComponent from "./ShortAnswerComponent";
// import ParagraphInputComponent from "./ParagraphInputComponent";
// import DropdownComponent from "./DropdownComponent";
// import FileUploadComponent from "./FileUploadComponent";
// import LinearScaleComponent from "./LinearScaleComponent";
// import MultiChoiceGridComponent from "./MultiChoiceGridComponent";
// import CheckboxGridComponent from "./CheckboxGridComponent";

// const FirstPage = () => {

//   return (
//     <FormControl component="fieldset">
//       <Box>
//         <McqOption />
//       </Box>
//       <Box>

//         <CheckboxComponent />
//       </Box>
//       <Box>
//         <ShortAnswerComponent />
//       </Box>
//       <Box>
//         <ParagraphInputComponent />
//       </Box>
//       <Box>
//         <DropdownComponent/>
//       </Box>
//       <Box>
//         <FileUploadComponent/>
//       </Box>
//       <Box>
//         <LinearScaleComponent/>
//       </Box>
//       <Box>
//         <MultiChoiceGridComponent/>
//       </Box>
//       <Box>
//         <CheckboxGridComponent/>
//       </Box>
//     </FormControl>
//   );
// };

// export default FirstPage;

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import McqOption from "./McqOption";
import CheckboxComponent from "./CheckboxComponent";
import ShortAnswerComponent from "./ShortAnswerComponent";
import ParagraphInputComponent from "./ParagraphInputComponent";
import DropdownComponent from "./DropdownComponent";
import FileUploadComponent from "./FileUploadComponent";
import LinearScaleComponent from "./LinearScaleComponent";
import MultiChoiceGridComponent from "./MultiChoiceGridComponent";
import CheckboxGridComponent from "./CheckboxGridComponent";

const FirstPage = () => {
  const boxStyle = {
    backgroundColor: "white",
    width: "700px",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
  };

  const handleSubmit = () => {};

  return (
    <FormControl component="fieldset">
      <Box style={boxStyle} sx={{ marginTop: "16px" }}>
        <McqOption />
      </Box>
      <Box style={boxStyle}>
        <CheckboxComponent />
      </Box>
      <Box style={boxStyle}>
        <ShortAnswerComponent />
      </Box>
      <Box style={boxStyle}>
        <ParagraphInputComponent />
      </Box>
      <Box style={boxStyle}>
        <DropdownComponent />
      </Box>
      <Box style={boxStyle}>
        <FileUploadComponent />
      </Box>
      <Box style={boxStyle}>
        <LinearScaleComponent />
      </Box>
      <Box style={boxStyle}>
        <MultiChoiceGridComponent />
      </Box>
      <Box style={boxStyle}>
        <CheckboxGridComponent />
      </Box>
      <Box sx={{ pb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </FormControl>
  );
};

export default FirstPage;
