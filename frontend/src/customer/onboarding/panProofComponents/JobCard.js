import React, { useState, useRef } from "react";
import { Container, Stack, Typography, Button } from "@mui/material";

const JobCard = ({ handleClick }) => {
  const [selectedFile, setSelectedFile] = useState("");
  // Reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  // Handle upload button click
  const handleUploadClick = (event) => {
    hiddenFileInput.current.click();
  };

  // Handle file selection
  const handleChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file.toString());
    console.log("FILE " + file.name);
    console.log("SELECTED FILE " + selectedFile.name);
    // const res = await getOCRFetch(event.target.files[0], "");
    // console.log(res);
  };

  const jobCardForm = () => {
    return (
      <>
        <Container maxWidth="sm">
          <Stack
            spacing={6}
            sx={{
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#7165E3",
              }}
            >
              Please Upload your JOB CARD
            </Typography>
            <div
              style={{
                backgroundColor: "#7165E3",
                width: "134px",
                height: "116px",
                objectFit: "contain",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="./assets/upload.png"
                alt=""
                style={{
                  width: "80px",
                  height: "96px",
                  cursor: "pointer",
                }}
                onClick={handleUploadClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
            <Typography sx={{ color: "#979797" }}>
              Terms like what formats can be uploaded and how much KB
            </Typography>
          </Stack>
        </Container>
        <Container maxWidth="md" sx={{ mt: "60px" }}>
          <Button
            variant="contained"
            sx={{ float: "right" }}
            onClick={() => {
              handleClick("jobCardUploaded");
            }}
            disabled
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  const jobCardUploadedForm = () => {
    return (
      <>
        <Container maxWidth="sm">
          <Stack
            spacing={4}
            sx={{
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#7165E3",
              }}
            >
              JOB CARD
            </Typography>
            <img
              src={selectedFile}
              alt=""
              style={{
                width: "120px",
                height: "140px",
              }}
            />
            <Typography sx={{ color: "#979797" }}>
              Terms like what formats can be uploaded and how much KB
            </Typography>
            <Button
              variant="outlined"
              // sx={{ backgroundColor: "#FFFFFF", color: "#000000" }}
              onClick={() => {
                setSelectedFile("");
              }}
            >
              Recapture
            </Button>
          </Stack>
        </Container>
        <Container maxWidth="md" sx={{ mt: "60px" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#7165E3", float: "right" }}
            onClick={() => {
              handleClick("aadhar");
            }}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  return <>{selectedFile ? jobCardUploadedForm() : jobCardForm()}</>;
};

export default JobCard;
