import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const RadioButtonsGroup = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log("event: ", event.target.value);
    navigate(`/${event.target.value}`);
  };

  return (
    <div className="radiobutton" style={{ textAlign: "center" }}>
      {/* <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="mir"
            onChange={handleChange}
            label="MIR And Barcode Orientation"
            control={<Radio />}
          />
          <FormControlLabel
            value="comparision"
            onChange={handleChange}
            control={<Radio />}
            label="Comparision"
          />
          <FormControlLabel
            value="otic-label-review"
            onChange={handleChange}
            control={<Radio />}
            label="Otic Label Review"
          />
        </RadioGroup> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="contained" aria-label="text button group">
          <Button value="mir" onClick={handleChange}>
            MIR And Barcode Orientation
          </Button>
          <Button value="comparision" onClick={handleChange}>
            Comparision
          </Button>
          <Button value="otic-label-review" onClick={handleChange}>
            Otic Label Review
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default RadioButtonsGroup;
