import { React, useState } from "react";
import { sendMobileOtp } from '../../services/serviceHelper';
import {
  Box,
  Stack,
  Container,
  Button,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";

const Mobile = () => {
  const [phone, setPhoneNo] = useState();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const errorNotify = (error) => toast.error(error);

  async function onSendCodeClicked() {
    try {
      setLoading(true);
      let { status, requestId } = await sendMobileOtp(phone)
      setLoading(false)
      if (status) {
        // Redirect to Verification page
        history.push({ pathname: './verifyNumber', state: { 'phone': phone, 'requestId': requestId } });
      } else {
        //Showcase error 
        errorNotify("error")
      }
    } catch (error) {
      errorNotify(error);
    }
  }

  function handleOnChange(value) {
    setPhoneNo(value);
  }
  
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
        <MuiPhoneNumber defaultCountry={"in"} onlyCountries={['in']} onChange={handleOnChange} />
      </Container>
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
          Sending code...
          </Typography>
          <SyncLoader size='25px' color='#7165e3' margin='5px'  /></Box>
        :
          <Button
          variant="contained"
          sx={{
            background: "#7165E3",
            float: "right",
          }}
          onClick={onSendCodeClicked}
        >
          Send Code
        </Button>
        }
        
      </Container>
      <ToastContainer theme="colored" />
        
    </>
  );
};

export default Mobile;