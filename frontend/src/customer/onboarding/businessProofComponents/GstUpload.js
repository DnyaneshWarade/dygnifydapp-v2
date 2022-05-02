import React, { useState, useRef } from "react";
import { Container, Stack, Typography, Button, Box } from "@mui/material";

const GstUpload = ({ handleClick }) => {
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
    setSelectedFile(file);
    console.log("FILE " + file.name);
  };

  const GstUploadForm = () => {
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
              Please Upload your GST Registration Certificate
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
          <Button variant="contained" sx={{ float: "right" }} disabled>
            Next
          </Button>
        </Container>
      </>
    );
  };

  const Item = ({ name, value }) => {
    return (
      <>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Typography sx={{ color: "#1C1939CC" }}>{name}</Typography>
          <Typography sx={{ color: "#1C1939CC" }}>{value}</Typography>
        </Box>
      </>
    );
  };

  const GstUploadedForm = () => {
    return (
      <>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 0.5fr",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#7165E3",
            }}
          >
            GST Registration Certificate
          </Typography>
          <img
            src=""
            alt=""
            style={{
              backgroundColor: "#C4C4C4",
              width: "102px",
              height: "102px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <Stack sx={{ alignItems: "center" }}>
            <img
              src="./assets/done.gif"
              alt=""
              style={{ height: "48px", width: "48px", objectFit: "contain" }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#7165E3" }}
              onClick={() => {
                setSelectedFile("");
              }}
            >
              Recapture
            </Button>
          </Stack>
        </Box>
        <Container maxWidth="sm" sx={{ mt: "42px" }}>
          <Stack>
            <Item name="Legal Name" value="XXXXXX" />
            <Item name="Constitution" value="XXXXXX" />
            <Item name="Address" value="XXXXXX" />
            <Item name="Status " value="XXXXXX" />
            <Item name="Date of Validity From" value="00/00/0000" />
            <Item name="GST Turnover Slab" value="xxxxx" />
            <Item name="Payment Regularity" value="xxxx" />
          </Stack>
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

  return <>{selectedFile ? GstUploadedForm() : GstUploadForm()}</>;
};

export default GstUpload;
