import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { conversionTool } from "./ConversionTool";
import PreviousConversions from "./PreviousConversions";

export default function InputNumber() {
  let conversions: Array<string> = [];
  const [numberInputValue, setNumberInputValue] = useState("");
  const [prevResult, setPrevResult] = useState<Array<string>>([]);
  const { register, getValues, setValue } = useForm();
  const { ref, ...rest } = register("number");
  const handleConversion = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const singleValue = getValues("number");
    const result = conversionTool(singleValue);
    setNumberInputValue(result as string);
    addResult(result as string);
    setValue("number", "");
  };

  const addResult = (newValue: string) => {
    const prevState = [...prevResult];
    prevState.splice(0,0,newValue);
    setPrevResult(prevState);
  };
  return (
    <>
      <Box p={2}>
        <Typography variant="subtitle1">
          Input the number you want to convert!
        </Typography>
      </Box>
      <form onSubmit={handleConversion}>
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
          inputRef={ref}
          {...rest}
          name="number"
        />
        <Button color="primary" type="submit"></Button>
      </form>
      {numberInputValue ? (
        <Box>
          <Typography>Output: {numberInputValue}</Typography>
        </Box>
      ) : (
        ""
      )}
      {prevResult?.length ? (
        <PreviousConversions previousConversion={prevResult} />
      ) : (
        ""
      )}
    </>
  );
}
