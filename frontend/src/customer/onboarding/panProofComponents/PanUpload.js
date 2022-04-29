import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const PanUpload = ({handleClick}) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#7165E3",
          }}
        >
          Please Upload your PAN Card
        </Typography>
        <img
          src="./assets/upload.png"
          alt=""
          style={{
            backgroundColor: "#7165E3",
            width: "72px",
            height: "72px",
            objectFit: "contain",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("clicked");
          }}
        />
        <Button variant="contained" sx={{ backgroundColor: "#7165E3" }}>
          Verify
        </Button>
      </Box>
      <Container maxWidth="md" sx={{ mt: "260px" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#979797", float: "right" }}
          onClick={()=>{handleClick("panUploaded")}}
        >
          Next
        </Button>
      </Container>
    </>
  );
};

export default PanUpload;
