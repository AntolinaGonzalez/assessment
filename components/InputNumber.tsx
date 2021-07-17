import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useMobile from "../hooks/useMobile";
import { useForm } from "react-hook-form";

export default function InputNumber() {
  const [numberInputValue, setNumberInputValue] = useState();
  
  const {
    register,
    getValues
  } = useForm();
  const { ref, ...rest } = register("number");
  const submitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const singleValue = getValues("number"); 
  };
  return (
    <>
      <Box p={2}>
        <Typography variant="subtitle1">
          Input the number you want to convert!
        </Typography>
      </Box>
      <form onSubmit={submitHandler}>
        <TextField
          label="Input your number"
          style={{ margin: 8 }}
          placeholder="42"
          helperText="number conversion"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          id="number"
          variant="outlined"
          inputRef={ref}{...rest}
          name="number"
        />
        <Button color="primary" type="submit">
          Confirm
        </Button>
      </form>
    </>
  );
}
