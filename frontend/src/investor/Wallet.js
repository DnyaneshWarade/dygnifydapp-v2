import React from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import BorrowChart from "../components/charts/BorrowChart";
import StakeChart from "../components/charts/StakeChart";

const Wallet = () => {
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
      <Stack sx={{ color: "#ffffff", ml: "64px", mt: "28px" }}>
        <Typography>Hello , Mr Vitalik Buterin </Typography>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          mx: "auto",
          mt: "22px",
          py: "16px",
          px: "16px",
          maxWidth: "900px",
          borderRadius: "12px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" m={2} sx={{ color: "#5B4ED4" }}>
          Opportunity Statistics
        </Typography>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography variant="h6">Total Liquidity </Typography>
            <BorrowChart />
          </Stack>
          <Stack>
            <Typography variant="h6">Total Borrowing</Typography>
            <StakeChart />
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          mx: "auto",
          mt: "22px",
          py: "16px",
          px: "16px",
          width: "900px",
          borderRadius: "12px",
        }}
      >
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0px 10px",
            mx: "32px",
          }}
        >
          <Typography variant="subtitle1">Deposit</Typography>
          <Typography variant="subtitle1">Withdraw Balance </Typography>
          <Typography variant="subtitle1">Withdraw Yield </Typography>
        </Stack>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0px 10px",
            mx: "32px",
          }}
        >
          <Typography sx={{ color: "#979797" }} variant="">
            Wallet :{" "}
          </Typography>
          <Typography sx={{ color: "#979797" }} variant="">
            Balance :{" "}
          </Typography>
          <Typography sx={{ color: "#979797" }} variant="">
            Total Yield :{" "}
          </Typography>
        </Stack>
        <Stack
          sx={{
            // display: "grid",
            // gridTemplateColumns: "1fr 1fr 1fr",
            // gap: "0px 10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            ml: "32px",
            mr: "60px",
          }}
        >
          <TextField
            label="Amount"
            variant="outlined"
            margin="normal"
            // value={deposit}
            // onChange={handleChange("deposit")}
          />
          <TextField
            label="Amount"
            variant="outlined"
            margin="normal"
            // value={withdraw}
            // onChange={handleChange("withdraw")}
          />
          {/* <TextField
            label="Amount"
            variant="outlined"
            margin="normal"
            // value={yieldWithdraw}
            // onChange={handleChange("yieldWithdraw")}
          /> */}
        </Stack>
      </Box>
      <Stack
        sx={{
          mx: "auto",
          mt: "12px",
          mb: "48px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={{ backgroundColor: "#ffffff", color: "#7165E3" }}
          variant="contained"
          size="large"
        >
          Approve
        </Button>
        <Button
          sx={{ backgroundColor: "#ffffff", color: "#7165E3" }}
          variant="contained"
          size="large"
        >
          Deposit
        </Button>
        <Button
          sx={{ backgroundColor: "#ffffff", color: "#7165E3" }}
          variant="contained"
          size="large"
        >
          Withdraw
        </Button>
      </Stack>
    </>
  );
};

export default Wallet;
