import React from "react";
import {
  Box,
  Input,
  Typography,
  Stack,
  Link,
  Button,
  TextField,
} from "@mui/material";

const VerifyNumber = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#7165E3",
          height: "150px",
          textAlign: "center",
          pt: "50px",
          color: "#fff",
          borderEndStartRadius: "12px",
          borderEndEndRadius: "16px",
        }}
      >
        <Typography variant="h6">Verify Account</Typography>
        <Typography variant="body1">
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
        }}
      >
        <Input placeholder="0" />
        <Input placeholder="0" />
        <Input placeholder="0" />
        <Input placeholder="0" />
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
          <Link>Resend Code</Link>
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
      <Button
        sx={{
          float: "right",
          mt: "130px",
          mr: "100px",
        }}
        variant="contained"
      >
        Proceed
      </Button>
    </>
  );
};

export default VerifyNumber;
