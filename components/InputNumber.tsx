import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { conversionTool } from "./ConversionTool";
import PreviousConversions from "./PreviousConversions";

export default function InputNumber() {
  const [numberInputValue, setNumberInputValue] = useState("");
  const [error, setError] = useState(false);
  const [prevResult, setPrevResult] = useState<Array<string>>([]);
  const { register, getValues, setValue } = useForm();
  const { ref, ...rest } = register("number");
  const handleConversion = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const singleValue = getValues("number").replace(/[.]/g, "");
    if (singleValue.charAt(0) == "0" && singleValue.length > 1) {
      return setError(true);
    }
    const isNumber = Number(singleValue);
    if (!isNaN(isNumber)) {
      setError(false);
      const result = conversionTool(singleValue);
      setNumberInputValue(result as string);
      addResult(singleValue, result as string);
      setValue("number", "");
    } else {
      setError(true);
    }
  };

  const addResult = (singleValue: number, newValue: string) => {
    const prevState = [...prevResult];
    prevState.splice(0, 0, singleValue + " = " + newValue);
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
          error={error}
          helperText={error ? "Make sure to input a valid number" : ""}
          label="Input your number"
          style={{ margin: 8 }}
          placeholder="42"
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
      <PreviousConversions previousConversion={prevResult} />
    </>
  );
}
