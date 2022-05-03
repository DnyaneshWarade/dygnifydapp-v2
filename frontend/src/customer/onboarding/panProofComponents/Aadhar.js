import React, { useState, useRef } from "react";
import {
  Container,
  TextField,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const Aadhar = ({ handleClick }) => {
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(0);
  const [aadhar, setAadhar] = useState("");

  // Handle file selection
  const handleChange = async (event) => {
    setAadhar(event.target.value);
    console.log(aadhar);
  };

  const otp = () => {
    return (
      <>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              gap: "0px 12px",
              my: "22px",
              maxWidth: "340px",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "#7165E3" }}>OTP</Typography>
            <TextField variant="outlined" required />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7165E3",
              }}
              onClick={() => {
                //do below thing on successful response
                setPage(1);
              }}
            >
              Verify
            </Button>
          </Box>
        </Container>
        <Container maxWidth="sm" sx={{ mx: "auto" }}>
          <Typography variant="body1">Did not receive the code?</Typography>
          <Button variant="text">Resend Code</Button>
        </Container>
      </>
    );
  };

  const aadharForm = () => {
    return (
      <>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr 1fr",
              alignItems: "center",
              gap: "0px 12px",
            }}
          >
            <Typography sx={{ color: "#7165E3" }}>AADHAR No</Typography>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Aadhar Number"
              required
              value={aadhar}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7165E3",
              }}
              onClick={() => {
                setDisplay(1);
              }}
            >
              Send OTP
            </Button>
          </Box>
        </Container>

        {display ? otp() : ""}
      </>
    );
  };

  const aadharUploadedForm = () => {
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
    return (
      <>
        <Container>
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
              AADHAR No
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#7165E3",
              }}
            >
              123456789123
            </Typography>
            <Stack sx={{ alignItems: "center" }}>
              <img
                src="./assets/ok.png"
                alt=""
                style={{ height: "48px", width: "48px", objectFit: "contain" }}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FFFFFF", color: "#000" }}
                onClick={() => {
                  setPage(0);
                  setDisplay(0);
                }}
              >
                Recapture
              </Button>
            </Stack>
          </Box>
        </Container>
        <Container maxWidth="sm" sx={{ mt: "42px" }}>
          <Stack>
            <Item name="Name" value="Test" />
            <Item name="Dob" value="00/00/0000" />
            <Item name="Address" value="Test" />
            <Item name="Mobile No" value="1234567890" />
          </Stack>
        </Container>
        <Container maxWidth="md" sx={{ mt: "60px" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#7165E3", float: "right" }}
            // onClick={()=>{}}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  return <>{page ? aadharUploadedForm() : aadharForm()}</>;
};

export default Aadhar;