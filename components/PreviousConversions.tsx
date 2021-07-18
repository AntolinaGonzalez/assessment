import { Box, Typography } from "@material-ui/core";
import React from "react";
import useMobile from "../hooks/useMobile";
interface Props {
  previousConversion: Array<string>;
}
const PreviousConversions: React.FC<Props> = ({ previousConversion }) => {
  const isMobile = useMobile();
  let storage = [];
  let storedConversions = [];
  if (localStorage.getItem("conversions")) {
    storage = JSON.parse(localStorage.getItem("conversions") || "");
    storage = { ...storage, ...previousConversion };
    localStorage.setItem("conversions", JSON.stringify(storage));
  }

  storedConversions = JSON.parse(localStorage.getItem("conversions") || "");

  return (
    <>
      {Object.keys(storedConversions).length ? (
        <Box p={3}>
          <Box p={2}>
            <Typography variant="subtitle1">Previous conversions</Typography>
          </Box>
          <Box
            height={isMobile ? 200 : 270}
            width="100%"
            style={{ border: "solid 0.3px lightgrey", borderRadius: 5 }}
          >
            {Object.values(storedConversions).map((value, index) => (
              <Box m={1.5} key={index}>
                <Typography variant="subtitle1">{value as string}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};
export default PreviousConversions;
