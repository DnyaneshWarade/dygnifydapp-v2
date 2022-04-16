import React from "react";
import { Box, Typography } from "@mui/material";

const Processing = ({ handleClick }) => {
  const next = () => {
    setTimeout(handleClick("verified"), 5000);
  };

  return (
    <>
      <Box
        sx={{
          my: "32px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "110px", height: "70px", objectFit: "contain" }}
          src="./sand-timer.png"
          alt=""
        />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          color: "#ffffff",
          my: "28px",
        }}
        variant="h4"
      >
        Processing for AML/CFT checks...
      </Typography>
      {next()}
    </>
  );
};

export default Processing;
