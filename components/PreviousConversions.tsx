import { Box, Typography } from "@material-ui/core";
import React from "react";
import useMobile from "../hooks/useMobile";
interface Props {
  previousConversion: Array<string>;
}
const PreviousConversions: React.FC<Props> = ({ previousConversion }) => {
  const isMobile = useMobile();
  localStorage.setItem("conversions", JSON.stringify(previousConversion));
  var storedConversions = JSON.parse(localStorage.getItem("conversions") || "");
  console.log("aver si se guardo", storedConversions);
  return (
    <>
      {previousConversion.length ? (
        <Box p={3}>
          <Box p={2}>
            <Typography variant="subtitle1">Previous conversions</Typography>
          </Box>
          <Box
            height={isMobile ? 200 : 270}
            width="100%"
            style={{ border: "solid 0.3px lightgrey", borderRadius: 5 }}
          >
            {previousConversion.map((conversion) => (
              <Box m={1.5}>
                <Typography variant="subtitle1">{conversion}</Typography>
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
