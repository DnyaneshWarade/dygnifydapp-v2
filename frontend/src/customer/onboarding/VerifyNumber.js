import React from "react";
import {
  Box,
  Input,
  Typography,
  Stack,
  Button,
  TextField,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const VerifyNumber = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#7165E3",
          height: "140px",
          textAlign: "center",
          pt: "35px",
          color: "#fff",
          borderEndStartRadius: "12px",
          borderEndEndRadius: "16px",
        }}
      >
        <Typography variant="h4">Verify Account</Typography>
        <Typography variant="body2">
          Enter 4-digit Code we have sent to at +91 000 000 0000
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "50px",
          mx: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          maxWidth: "600px",
          gap: "0px 16px",
        }}
      >
        <Input
          sx={{
            maxWidth: "100px",
            pl: "45px",
          }}
          placeholder="0"
        />
        <Input
          sx={{
            maxWidth: "100px",
            pl: "45px",
          }}
          placeholder="0"
        />
        <Input
          sx={{
            maxWidth: "100px",
            pl: "45px",
          }}
          placeholder="0"
        />
        <Input
          sx={{
            maxWidth: "100px",
            pl: "45px",
          }}
          placeholder="0"
        />
      </Box>
      <Stack
        sx={{
          mt: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Typography>Didn't receive code?</Typography>
        <Typography>
          <Link to="#">Resend Code</Link>
        </Typography>
      </Stack>
      <Stack
        sx={{
          maxWidth: "200px",
          mx: "auto",
          mt: "50px",
        }}
      >
        <TextField label="Referral Code (Optional)" variant="standard" />
        <TextField label="Agent ID (Optional)" variant="standard" />
      </Stack>
      <Container
        maxWidth="sm"
        sx={{
          mt: "80px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#7165E3",
            float: "right",
          }}
        >
          Proceed
        </Button>
      </Container>
    </>
  );
};

export default VerifyNumber;
