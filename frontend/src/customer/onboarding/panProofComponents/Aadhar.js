import React, { useState, useRef } from "react";
import {
  Container,
  TextField,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { sendAadhaarOTP, ValidateAadhaarOTP } from '../../../services/serviceHelper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";

const Aadhar = ({ handleClick }) => {
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(0);
  const [aadhar, setAadhar] = useState("");
  const [otpData, setOtpData] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpLoading, setotpLoading] = useState(false);
  const [aadharData ,setAadharData] = useState({});
  const [aadharVerifiedData ,setAadharVerifiedData] = useState({});

  const errorNotify = (error) => toast.error(error);
  // console.log(aadharVerifiedData.data.consentValidation.providedName)

  // Handle file selection
  const handleChange2 = async (event) => {
    setOtpData(event.target.value);
  };

  const handleChange = async (event) => {
    setAadhar(event.target.value);
  };

  const otp = () => {

    async function onVerifyAadharOtp(){
      try{
        setLoading(true);
        let res = await ValidateAadhaarOTP(otpData,aadharData.data.accessKey,aadharData.data.caseId,"");
        setLoading(false);
        if(res.status){
          setAadharVerifiedData(({...aadharVerifiedData,...res.data}))
          setPage(1);
        }
        else {
          //Showcase error 
          errorNotify("error")
        }
      }
      catch(error){
        errorNotify(error);
      }
    }
    
    return (
      <>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              gap: "0px 12px",
              my: "22px",
              maxWidth: "340px",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "#7165E3" }}>OTP</Typography>
            <TextField 
              variant="outlined" 
              required 
              value={otpData}
              onChange={handleChange2}/>
            {
              loading ?
                <Box 
                sx={{
                }}
                ><Typography>
                Verifying OTP...
                </Typography>
                <SyncLoader size='25px' color='#7165e3' margin='5px'  /></Box>
              :
                <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7165E3",
                }}
                onClick={onVerifyAadharOtp}
                >
                  Verify
                </Button>
            }
            
          </Box>
        </Container>
        <Container maxWidth="sm" sx={{ mx: "auto" }}>
          <Typography variant="body1">Did not receive the code?</Typography>
          <Button variant="text">Resend Code</Button>
        </Container>
      </>
    );
  };

  const aadharForm = () => {

    async function onSendAadharOtp(){
      try{
        setotpLoading(true);
        let res = await sendAadhaarOTP(aadhar,"Aniruddha Shahaji Thorat","");
        setotpLoading(false);
        if(res.status){
          setAadharData(({...aadharData,...res}));
          setDisplay(1);
        }
        else {
          //Showcase error 
          errorNotify("error")
        }
      }
      catch(error){
        errorNotify(error);
      }
    }

    return (
      <>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr 1fr",
              alignItems: "center",
              gap: "0px 12px",
            }}
          >
            <Typography sx={{ color: "#7165E3" }}>AADHAR No</Typography>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Aadhar Number"
              required
              value={aadhar}
              onChange={handleChange}
            />
            {
              otpLoading ?
              <Box 
              sx={{
              }}
              ><Typography>
              Sending OTP...
              </Typography>
              <SyncLoader size='25px' color='#7165e3' margin='5px'  /></Box>
              :
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7165E3",
                }}
                onClick={onSendAadharOtp}
              >
              Send OTP
              </Button>
            }
            
          </Box>
        </Container>
        <ToastContainer theme="colored" />

        {display ? otp() : ""}
      </>
    );
  };

  const aadharUploadedForm = () => {
    const Item = ({ name, value }) => {
      return (
        <>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Typography sx={{ color: "#1C1939CC" }}>{name}</Typography>
            <Typography sx={{ color: "#1C1939CC" }}>{value}</Typography>
          </Box>
        </>
      );
    };
    return (
      <>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 0.5fr",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#7165E3",
              }}
            >
              AADHAR No
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#7165E3",
              }}
            >
              {aadhar}
            </Typography>
            <Stack sx={{ alignItems: "center" }}>
              <img
                src="./assets/ok.png"
                alt=""
                style={{ height: "48px", width: "48px", objectFit: "contain" }}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FFFFFF", color: "#000" }}
                onClick={() => {
                  setPage(0);
                  setDisplay(0);
                }}
              >
                Recapture
              </Button>
            </Stack>
          </Box>
        </Container>
        <Container maxWidth="sm" sx={{ mt: "42px" }}>
          <Stack>
            <Item name="Name" value={aadharVerifiedData.data.consentValidation.providedName} />
            <Item name="Dob" value={aadharVerifiedData.data.dataFromAadhaar.dob} />
            <Item name="Address" value={aadharVerifiedData.data.dataFromAadhaar.address.combinedAddress} />
            <Item name="Mobile No" value="1234567890" />
          </Stack>
        </Container>
        <Container maxWidth="md" sx={{ mt: "60px" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#7165E3", float: "right" }}
            // onClick={()=>{}}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  return <>{page ? aadharUploadedForm() : aadharForm()}</>;
};

export default Aadhar;
