import React from "react";
import { Box, Button, Typography, Stack, Divider, Card } from "@mui/material";
import { Link } from "react-router-dom";

const CompanyInfo = () => {
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
        <Box>
          <img
            style={{ width: "150px", height: "80px", objectFit: "contain" }}
            src="./logo.png"
            alt="company logo"
          />
        </Box>
        <Typography>Income Generating Loans</Typography>
        <Typography color="#7165E3">Overview</Typography>
        <Typography>Investments</Typography>
        <Typography>Assets</Typography>
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
          my: "20px",
          mx: "auto",
          maxWidth: 1150,
          height: 80,
          py: "10px",
          px: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            color: "#ffffff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "88px", height: "56px" }}
            src="./indianWomen.png"
            alt=""
          />
          <Typography>Income Generating Loans</Typography>
        </Stack>
        <Button
          sx={{ backgroundColor: "#ffffff", color: "#000000" }}
          variant="contained"
        >
          <Link to="/kyc">Invest</Link>
        </Button>
      </Stack>
      <Box>
        <Card
          sx={{
            my: "20px",
            maxWidth: 1100,
            height: 130,
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <Typography variant="subtitle2">Business Loans to Women</Typography>
            <Typography variant="overline">Asset Type</Typography>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div>
            <Typography variant="subtitle2">24 months</Typography>
            <Typography variant="overline">Asset Maturity</Typography>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />{" "}
          <div>
            <Typography variant="subtitle2">10.45 %</Typography>
            <Typography variant="overline">Yield</Typography>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />{" "}
          <div>
            <Typography variant="subtitle2">59,87,197 INRC</Typography>
            <Typography variant="overline">Value</Typography>
          </div>
        </Card>
      </Box>
      <Stack
        sx={{
          maxWidth: 1100,
          py: "10px",
          px: "30px",
          mx: "auto",
          color: "#ffffff",
        }}
      >
        <Typography variant="h6">Impact Partner Details</Typography>
      </Stack>
      <Box>
        <Card
          sx={{
            mb: "20px",
            maxWidth: 1100,
            py: "20px",
            px: "30px",
            mx: "30px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <Typography mb={1} variant="subtitle2">
            ABC Finance Private Limited
          </Typography>
          <Typography variant="body2">
            ABC is a RBI approved Microfinance company operating in Southern
            India that provides business loans to women borrowers in sumi-urban
            and rural India via the group lending and individual lending model
            for income generation. ABC was founded in 20XX and has operations in
            southern states of Karnataka, Tamil Nadu, Andhra Pradesh, Telangana,
            and has since originated over $30 Mn in loans to over 10 millions
            borrowers. This opportunity will consist of tranches of a secured
            non convertible debenture with a maturity of 24 months backed by a
            portfolio of loans made to customers.
          </Typography>
        </Card>
      </Box>
      <Stack
        sx={{
          mt: "10px",
          maxWidth: 1100,
          py: "10px",
          px: "30px",
          mx: "auto",
          color: "#ffffff",
        }}
      >
        <Typography variant="h6">Opportunity Status</Typography>
      </Stack>
      <Box
        sx={{
          mb: "30px",
          maxWidth: 1100,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0px 16px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: "16px",
            px: "30px",
          }}
        >
          <Typography variant="h6">Assets</Typography>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Typography>Number of Assets</Typography>
            <Typography>32</Typography>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Typography>Average Financing fee</Typography>
            <Typography>13.10%</Typography>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Typography>Average Maturity</Typography>
            <Typography>24 months</Typography>
          </Stack>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            py: "16px",
            px: "30px",
          }}
        >
          <Typography variant="h6">Liquidity </Typography>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Typography>Available Liquidity</Typography>
            <Typography>5,60,000</Typography>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default CompanyInfo;
