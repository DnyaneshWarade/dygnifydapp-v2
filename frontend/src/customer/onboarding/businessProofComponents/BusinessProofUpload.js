// import React from "react";
// import {
//   Container,
//   Stack,
//   Typography,
//   Button,
//   Grid,
//   TextField,
// } from "@mui/material";

// const BusinessProofUpload = ({ handleClick }) => {
//   return (
//     <>
//       <Container maxWidth="sm">
//         <Stack
//           spacing={6}
//           sx={{
//             textAlign: "center",
//             alignItems: "center",
//           }}
//         >
//           <Grid container spacing={0} alignItems="center">
//             <Grid item xs={6}>
//               <Typography>Name of Business Proof</Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Name" variant="outlined" />
//             </Grid>
//           </Grid>
//           <Typography
//             sx={{
//               color: "#979797",
//             }}
//           >
//             Please Upload the Business Proof
//           </Typography>
//           <div
//             style={{
//               backgroundColor: "#7165E3",
//               width: "134px",
//               height: "116px",
//               objectFit: "contain",
//               borderRadius: "12px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src="./assets/upload.png"
//               alt=""
//               style={{
//                 width: "80px",
//                 height: "96px",
//                 cursor: "pointer",
//               }}
//               onClick={() => {
//                 console.log("clicked");
//               }}
//             />
//           </div>
//           <Typography sx={{ color: "#7165E3" }}>
//             Terms like what formats can be uploaded and how much KB
//           </Typography>
//         </Stack>
//       </Container>
//       <Container maxWidth="md" sx={{ mt: "40px" }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#7165E3", float: "right" }}
//           onClick={() => {
//             handleClick("jobCardUploaded");
//           }}
//         >
//           Next
//         </Button>
//       </Container>
//     </>
//   );
// };

// export default BusinessProofUpload;
import React, { useState, useRef } from "react";
import {
  Container,
  Stack,
  Typography,
  Button,
  Box,
  Grid,
  TextField,
} from "@mui/material";

const BusinessProofUpload = ({ handleClick }) => {
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

  const BusinessProofForm = () => {
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
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={6}>
                <Typography>Name of Business Proof</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField label="Name" variant="outlined" />
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              sx={{
                color: "#E5E5E5",
              }}
            >
              Please Upload the Business Proof
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

  const BusinessProofUploadedForm = () => {
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
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={6}>
                <Typography>Name of Business Proof</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField label="Name" variant="outlined" />
              </Grid>
            </Grid>
            <Typography
              sx={{
                color: "#E5E5E5",
              }}
              variant="h6"
            >
              Uploaded Business Proof
            </Typography>
            <img
              src=""
              alt=""
              style={{
                width: "100px",
                height: "110px",
              }}
              onClick={() => {
                console.log("clicked");
              }}
            />
            <Typography sx={{ color: "#7165E3" }}>
              Terms like what formats can be uploaded and how much KB
            </Typography>
            <Button
              variant="outlined"
              sx={{ color: "#000000" }}
              onClick={() => {
                setSelectedFile("");
              }}
            >
              Recapture
            </Button>
          </Stack>
        </Container>
        <Container maxWidth="md" sx={{ mt: "40px" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#7165E3", float: "right" }}
            onClick={() => {
              handleClick("jobCardUploaded");
            }}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  return (
    <>{selectedFile ? BusinessProofUploadedForm() : BusinessProofForm()}</>
  );
};

export default BusinessProofUpload;
