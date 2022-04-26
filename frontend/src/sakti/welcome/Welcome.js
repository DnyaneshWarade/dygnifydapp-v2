import React from "react";
import { Avatar, Box, Typography, Stack, Link, Button } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#7165E3",
          height: "180px",
          textAlign: "center",
          pt: "50px",
          color: "#fff",
          borderEndStartRadius: "12px",
          borderEndEndRadius: "16px",
        }}
      >
        <Stack
          sx={{
            textAlign: "left",
            display: "grid",
            gridTemplateColumns: "3fr 5fr",
          }}
        >
          <Avatar
            alt="women"
            src="./woman.png"
            sx={{ width: 70, height: 70, ml: "100px", cursor: "pointer" }}
          />
          <Typography variant="h4">Welcome to Shakti</Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          transform: "translateY(-50%)",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            width: "180px",
            height: "140px",
            textAlign: "center",
            px: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CurrencyRupeeIcon />
          <Typography variant="body1">Loan upto Rs 50,000 /-</Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            width: "180px",
            height: "140px",
            textAlign: "center",
            px: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <AccessTimeIcon />
          <Typography variant="body1">Tenure upto 24 months</Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            width: "180px",
            height: "140px",
            textAlign: "center",
            px: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CurrencyExchangeIcon />
          <Typography variant="body1">Rate of interest</Typography>
          <Typography variant="body1">21% - 24%</Typography>
        </Stack>
      </Box>
      <Stack
        sx={{
          my: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Link>Tell me more</Link>
        <Button variant="contained">Apply Now</Button>
      </Stack>
      <Box>
        <Stack
          sx={{
            backgroundColor: "#fff",
            position: "absolute",
            bottom: "0px",
            right: "16px",
            height: "40px",
            width: "650px",
            textAlign: "center",
          }}
        >
          <Typography>
            "Shakti helped me to open a shop in my village and earn" -Devi
          </Typography>
        </Stack>
        <img
          style={{ width: "100%", height: "300px" }}
          src="./devi.png"
          alt="devi"
        />
      </Box>
    </>
  );
};

export default Welcome;
