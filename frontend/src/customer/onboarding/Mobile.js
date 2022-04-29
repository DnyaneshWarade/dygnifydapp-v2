import React from "react";
import {
  Box,
  Stack,
  Container,
  Button,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

const Mobile = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#7165E3",
          height: "140px",
          textAlign: "center",
          pt: "35px",
          color: "#ffffff",
          borderEndStartRadius: "12px",
          borderEndEndRadius: "12px",
        }}
      >
        <Stack
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Mobile Number</Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            mx: "auto",
          }}
        >
          Please enter your valid phone number
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mx: "auto",
          }}
        >
          We will send you 4-digit code to verify account
        </Typography>
      </Box>
      <Container
        maxWidth="sm"
        sx={{
          mt: "170px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0px 16px",
        }}
      >
        <Typography
          sx={{
            maxWidth: "180px",
          }}
        >
          Mobile Number
        </Typography>
        <MuiPhoneNumber defaultCountry={"in"} />
      </Container>
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
          Send Code
        </Button>
      </Container>
    </>
  );
};

export default Mobile;