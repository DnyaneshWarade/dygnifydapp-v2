import React, { useState, useRef } from "react";
import { Typography, Container, Box, Stack, Button } from "@mui/material";

const BillUpload = () => {
  const [selectedFileResidence, setSelectedFileResidence] = useState("");
  const [selectedFileOffice, setSelectedFileOffice] = useState("");
  // Reference to the hidden file input element
  const hiddenFileInputResidence = useRef(null);
  const hiddenFileInputOffice = useRef(null);
  // Handle upload button click
  const handleUploadClickResidence = (event) => {
    hiddenFileInputResidence.current.click();
  };
  const handleUploadClickOffice = (event) => {
    hiddenFileInputOffice.current.click();
  };
  // Handle file selection
  const handleChangeOffice = async (event) => {
    const file = event.target.files[0];
    setSelectedFileOffice(file);
    console.log("FILE " + selectedFileOffice);
  };

  // Handle file selection
  const handleChangeResidence = async (event) => {
    const file = event.target.files[0];
    setSelectedFileResidence(file);
    console.log("FILE " + selectedFileResidence);
  };

  const billUploadForm = () => {
    return (
      <>
        <Container maxWidth="md">
          <Typography sx={{ color: "#7165E3", textAlign: "center" }}>
            Terms like what formats can be uploaded and how much KB
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              mt: "42px",
            }}
          >
            <Stack sx={{ alignItems: "center" }} spacing={4}>
              <Typography sx={{ maxWidth: "162px", color: "#7165E3" }}>
                Please upload Electricity / Telephone / Gas Bill of your
                RESIDENCE
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#7165E3",
                  width: "116px",
                  height: "126px",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./assets/upload.png"
                  alt=""
                  style={{
                    width: "96px",
                    height: "96px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={handleUploadClickResidence}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={hiddenFileInputResidence}
                  onChange={handleChangeResidence}
                  style={{ display: "none" }}
                />
                <Typography sx={{ color: "#ffffff" }}>Upload</Typography>
              </div>
            </Stack>
            <Stack sx={{ alignItems: "center" }} spacing={4}>
              <Typography sx={{ maxWidth: "162px", color: "#7165E3" }}>
                Please upload Electricity,Telephone,Gas Bill of your SHOP /
                OFFICE
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#7165E3",
                  width: "116px",
                  height: "126px",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./assets/upload.png"
                  alt=""
                  style={{
                    width: "96px",
                    height: "96px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={handleUploadClickOffice}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={hiddenFileInputOffice}
                  onChange={handleChangeOffice}
                  style={{ display: "none" }}
                />
                <Typography sx={{ color: "#ffffff" }}>Upload</Typography>
              </div>
            </Stack>
          </Box>
        </Container>
        <Container maxWidth="md" sx={{ mt: "60px" }}>
          <Button
            variant="contained"
            disabled
            sx={{ backgroundColor: "#979797", float: "right" }}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  const billUploadedForm = () => {
    return (
      <>
        <Container maxWidth="md">
          <Typography sx={{ color: "#7165E3", textAlign: "center" }}>
            Terms like what formats can be uploaded and how much KB
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              mt: "42px",
            }}
          >
            <Stack sx={{ alignItems: "center" }} spacing={4}>
              <Typography sx={{ maxWidth: "162px", color: "#7165E3" }}>
                Please upload Electricity / Telephone / Gas Bill of your
                RESIDENCE
              </Typography>

              <img
                src=""
                alt=""
                style={{
                  width: "96px",
                  height: "96px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
              <Button
                variant="outlined"
                sx={{ color: "#000000" }}
                onClick={() => {
                  setSelectedFileResidence("");
                }}
              >
                Recapture
              </Button>
            </Stack>
            <Stack sx={{ alignItems: "center" }} spacing={4}>
              <Typography sx={{ maxWidth: "162px", color: "#7165E3" }}>
                Please upload Electricity,Telephone,Gas Bill of your SHOP /
                OFFICE
              </Typography>

              <img
                src=""
                alt=""
                style={{
                  width: "96px",
                  height: "96px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
              <Button
                variant="outlined"
                sx={{ color: "#000000" }}
                onClick={() => {
                  setSelectedFileOffice("");
                }}
              >
                Recapture
              </Button>
            </Stack>
          </Box>
        </Container>
        <Container maxWidth="md" sx={{ mt: "60px" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#7165E3", float: "right" }}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  return (
    <>
      {selectedFileResidence && selectedFileOffice
        ? billUploadedForm()
        : billUploadForm()}
    </>
  );
};

export default BillUpload;
