import React from "react";
import { Box, Button, Typography, Stack, Link } from "@mui/material";
import Company from "./components/Company";
import LockedValueChart from "./components/LockedValueChart";

const LandingPage = () => {
  return (
    <>
      <style>{"body { background-color: #7165e3 }"}</style>
      <Box
        sx={{
          height: "90px",
          backgroundColor: "#ffffff",
          borderEndEndRadius: "12px",
          borderEndStartRadius: "12px",
          px: "40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{ width: "150px", height: "80px", objectFit: "contain" }}
            src="./logo.png"
            alt="company logo"
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            textAlign: "center",
          }}
        >
          <div>
            <Typography variant="body2">Switch to</Typography>
            <Button
              size="small"
              sx={{ backgroundColor: "#E5E5E5", borderRadius: "120px" }}
            >
              USDC
            </Button>
          </div>
          <Button
            sx={{ backgroundColor: "#7165E3" }}
            variant="contained"
            size="large"
          >
            Connect Wallet
          </Button>
        </div>
      </Box>
      <Stack
        sx={{
          textAlign: "center",
          color: "#ffffff",
          mt: "32px",
        }}
      >
        <Typography variant="subtitle1">
          Democratizing access to credit for micro and small women entrepreneurs
          through a Blockchain based DeFi protocol
        </Typography>
      </Stack>
      <Stack sx={{ float: "right", mr: "265px" }}>
        <Link color="#ffffff">Tell me more</Link>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          mx: "auto",
          mt: "22px",
          p: "10px",
          width: "382px",
          height: "176px",
          borderRadius: "12px",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <LockedValueChart />
        <Stack>
          <Typography variant="subtitle2">1,65,92,751</Typography>
          <Typography variant="subtitle2">INRC</Typography>
          <Typography variant="body2">Total Value Locked</Typography>
        </Stack>
      </Box>
      <Stack
        sx={{
          mt: "36px",
          mx: "auto",
          px: "10px",
          color: "#ffffff",
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
        }}
      >
        <Typography variant="subtitle1">Opportunity</Typography>
        <Typography variant="subtitle1">Investment</Typography>
        <Typography variant="subtitle1">Value</Typography>
        <Typography variant="subtitle1">APY</Typography>
      </Stack>
      <Box>
        <Company
          src="./indianWomen.png"
          name="Income Generating Loans"
          data="Individual Business Loans to micro and small women entrepreneurs"
          value="59,87,197"
          apy="10.45"
        />
        <Company
          src="./woman-riding-a-motorbike.png"
          name="EVs : New-age delivery partners"
          data="EV Loans to women generating income
          as delivery partners"
          value="46,52,977"
          apy="12.15"
        />
        <Company
          src="./planet-earth.png"
          name="Green Business with Pink hearts"
          data="Loans to women who have Agri based businesses"
          value="59,52,577"
          apy="10.21"
        />
      </Box>
    </>
  );
};

export default LandingPage;
