import { React, useEffect, useState } from "react";
import {
  Box,
  Input,
  Typography,
  Stack,
  Button,
  TextField,
  Container,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { sendMobileOtp, checkMobileOtp, getMobileDetails } from '../../services/serviceHelper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const VerifyNumber = () => {
  const location = useLocation();
  const phone = location?.state?.phone ?? '';
  const reqId = location?.state?.requestId ?? '';
  const [otpInput1, setOTPInput1] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const errorNotify = (error) => toast.error(error);
  const [mobileData, setMobileData] = useState({data:""});

  
  async function onReSendCodeClicked() {
    try {
      setLoadingResend(true)
      let { status, requestId } = await sendMobileOtp(phone)
      setLoadingResend(false)

      if (status) {
        reqId = requestId;
        // Display msg for successful resend of otp
      } else {
        //Showcase error 
        errorNotify("error");
      }
    } catch (error) {
      errorNotify(error);
    }
  }

  async function onVerifyOTPClicked() {
    try {
      setLoading(true)
      const otp = `${otpInput1}`;
      const status = await checkMobileOtp(reqId, otp, phone);
      setLoading(false)
      console.log(otp)
      if (status) {
        // Redirect to next page

        // Get the mobile details
        const mobileDetail = await getMobileDetails(reqId,phone,'');
        if (mobileDetail.status) {
          // Store details in state
          setMobileData({...mobileData,...mobileDetail.mobileData.data})
        }
      } else {
        // Show error on page
        errorNotify("error");
      }
    } catch (error) {
      errorNotify(error);
    }
  }

  function handleOTPInput1(event) {
    setOTPInput1(event.target.value);
  }

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
          Enter 4-digit Code we have sent to at {phone}
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
            maxWidth: "500px",
            pl: "180px",
          }}
          placeholder="0"
          onChange={handleOTPInput1}
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
        {loadingResend
        ?
          <Box 
            sx={{
              float: "right",
            }}
            ><Typography>
            Resending...
            </Typography>
            <SyncLoader size='25px' color='#7165e3' margin='5px'  />
          </Box>
        :
        <Typography>
        <Button onClick={onReSendCodeClicked}>Resend Code</Button>
      </Typography>
        }
        
      </Stack>
      <Stack
        sx={{
          maxWidth: "200px",
          mx: "auto",
          mt: "50px",
        }}
      >
        {/* <TextField label="Referral Code (Optional)" variant="standard" />
        <TextField label="Agent ID (Optional)" variant="standard" /> */}
      </Stack>
      <Container
        maxWidth="sm"
        sx={{
          mt: "80px",
        }}
      >
        {loading
        ?
          <Box 
            sx={{
              float: "right",
            }}
          ><Typography>
          Verifying...
          </Typography>
          <SyncLoader size='25px' color='#7165e3' margin='5px'  /></Box>
        :
          <Button
          variant="contained"
          sx={{
            background: "#7165E3",
            float: "right",
          }}
          onClick={onVerifyOTPClicked}
        >
          Proceed
        </Button>
        }
        
      </Container>
      <ToastContainer theme="colored" />
      
    </>
  );
};

export default VerifyNumber;
