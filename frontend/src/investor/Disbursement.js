import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Disbursement = () => {
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
      </Box>
      <Stack
        sx={{
          textAlign: "center",
          mx: "auto",
          color: "#ffffff",
          my: "28px",
        }}
      >
        <Typography variant="h4">
          Disbursement from the ‘Income Generating Loans Opportunity’
        </Typography>
      </Stack>
      <Box
        sx={{
          textAlign: "center",
          width: "500px",
          mx: "200px",
          color: "#ffffff",
          my: "48px",
          textAlign: "left",
        }}
      >
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "150px 350px",
          }}
        >
          <Typography variant="subtitle1">Disburse To </Typography>
          <Typography variant="subtitle1">
            ABC Finance Private Limited
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "150px 350px",
          }}
        >
          <Typography variant="subtitle1">For </Typography>
          <Typography variant="subtitle1">INRC 10,00,000 </Typography>
        </Stack>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "150px 350px",
          }}
        >
          <Typography variant="subtitle1">Belongs To </Typography>
          <Typography variant="subtitle1">Income Generating Loans </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          py: "28px",
          borderRadius: "12px",
          display: "grid",
          gridTemplateColumns: "900px 100px 150px",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            width: "730px",
            ml: "100px",
            py: "28px",
            borderRadius: "12px",
          }}
        >
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "42px",
              ml: "350px",
            }}
          >
            <Typography>Debit</Typography>
            <Typography>Credit</Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: " row",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "88px", height: "56px" }}
              src="../indianWomen.png"
              alt=""
            />
            <Stack
              sx={{
                width: "250px",
              }}
            >
              <Typography variant="subtitle2">
                Income Generating Loans
              </Typography>
              <Typography variant="body2">Opportunity Debit</Typography>
            </Stack>
            <Typography>INRC 10,00,000 </Typography>
          </Box>
          <img
            style={{
              objectFit: "contain",
              marginLeft: "160px",
              marginTop: "16px",
            }}
            src="./Arrow.png"
            alt=""
          />
          <Stack
            sx={{
              pl: "60px",
              display: "grid",
              gridTemplateColumns: "60px 220px",
              gap: "0px 10px",
              alignItems: "center",
            }}
          >
            <img src="./rupee.png" alt="" />
            <Typography>On-Off Ramp Wallet in INR</Typography>
          </Stack>
          <img
            style={{
              objectFit: "contain",
              marginLeft: "160px",
              marginTop: "16px",
            }}
            src="./Arrow.png"
            alt=""
          />
          <Stack
            sx={{
              pl: "60px",
              display: "grid",
              gridTemplateColumns: "60px 220px",
              gap: "0px 10px",
              alignItems: "center",
            }}
          >
            <img src="./crypto.png" alt="" />
            <Typography>Credit to ESCROW Account in INR </Typography>
          </Stack>
          <img
            style={{
              objectFit: "contain",
              marginLeft: "160px",
              marginTop: "16px",
            }}
            src="./Arrow.png"
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: " row",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "88px", height: "56px", objectFit: "contain" }}
              src="../target.png"
              alt=""
            />
            <Stack
              sx={{
                width: "250px",
              }}
            >
              <Typography variant="subtitle2">Bank Account Credited</Typography>
              <Typography variant="body2">Account No : xxxxxx2301</Typography>
              <Typography variant="body2">
                Name : ABC Finance Private Ltd
              </Typography>
            </Stack>
            <Typography sx={{ ml: "200px" }}>INR 10,00,000</Typography>
          </Box>
        </Box>
        <img
          style={{ width: "150px", height: "400px", objectFit: "contain" }}
          src="./close-bracket.png"
          alt=""
        />
        <img
          style={{
            width: "200px",
            height: "400px",
            objectFit: "contain",
            marginLeft: "10px",
          }}
          src="./smart-contracts.png"
          alt=""
        />
      </Box>
    </>
  );
};

export default Disbursement;
