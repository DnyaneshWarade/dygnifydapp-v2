import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Identity from "./components/Identity";
import Photo from "./components/Photo";
import Address from "./components/Address";
import AddressProof from "./components/AddressProof";
import Processing from "./components/Processing";
import Verified from "./components/Verified";
import Profile from "./components/Profile";

const KYC = () => {
  const [kyc, setKyc] = useState("profile");

  const handleClick = (component) => {
    setKyc(component);
  };

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
        <img
          style={{ width: "150px", height: "80px", objectFit: "contain" }}
          src="./logo.png"
          alt="company logo"
        />
      </Box>
      <Stack
        sx={{
          color: "#ffffff",
          my: "28px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">
          Let’s Quickly get to know you before you start Investing !!
        </Typography>
      </Stack>
      <Stack
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: "60px",
          mb: "20px",
          color: "#ffffff",
        }}
      >
        <Typography variant="h6">Profile</Typography>
        <Typography variant="h6">Identity</Typography>
        <Typography variant="h6">Address</Typography>
        <Typography variant="h6">AML/CFT</Typography>
      </Stack>
      <Box
        sx={{
          maxWidth: "765px",
          mx: "auto",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        <span
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#E5E5E5",
            borderRadius: "50%",
          }}
        ></span>
        <hr
          style={{
            height: "8px",
            width: "180px",
            backgroundColor: "#979797",
            border: "none",
          }}
        />
        <span
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#E5E5E5",
            borderRadius: "50%",
          }}
        ></span>
        <hr
          style={{
            height: "8px",
            width: "180px",
            backgroundColor: "#979797",
            border: "none",
          }}
        />
        <span
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#E5E5E5",
            borderRadius: "50%",
          }}
        ></span>
        <hr
          style={{
            height: "8px",
            width: "180px",
            backgroundColor: "#979797",
            border: "none",
          }}
        />
        <span
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#E5E5E5",
            borderRadius: "50%",
          }}
        ></span>
      </Box>
      {(() => {
        switch (kyc) {
          case "profile":
            return <Profile handleClick={handleClick} />;
          case "identity":
            return <Identity handleClick={handleClick} />;
          case "photo":
            return <Photo handleClick={handleClick} />;
          case "address":
            return <Address handleClick={handleClick} />;
          case "addressProof":
            return <AddressProof handleClick={handleClick} />;
          case "processing":
            return <Processing handleClick={handleClick} />;
          case "verified":
            return <Verified handleClick={handleClick} />;
          default:
            return <Profile />;
        }
      })()}
    </>
  );
};

export default KYC;
