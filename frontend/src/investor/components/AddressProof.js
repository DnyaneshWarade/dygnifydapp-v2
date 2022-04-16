import React from "react";
import { Box, Button, Typography, Stack, Link, Input } from "@mui/material";

const AddressProof = ({ handleClick }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "408px",
          backgroundColor: "#ffffff",
          my: "28px",
          mx: "auto",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      ></Box>
      <Stack
        sx={{
          mx: "auto",
          my: "12px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Input type="file" />
        <Button
          sx={{ backgroundColor: "#ffffff", color: "#7165E3" }}
          variant="contained"
          onClick={() => handleClick("processing")}
        >
          Upload
        </Button>
      </Stack>
    </>
  );
};

export default AddressProof;
