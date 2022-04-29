import axiosHttpService from './axioscall';
import { sendMobileOtpOption, checkMobileOtpStatusOption, getMobileDetailsOption } from './karzaAxiosOptions';

function sanitizePhoneNo(phone) {
    // Remove additional symbols from the phone number
    let sanitizedPhoneNo = phone.replace('+', '').replace('-', '');
    const parsedPhoneNo = sanitizedPhoneNo.split(' ');
    return { 'countryCode': parsedPhoneNo[0], 'phoneNo': parsedPhoneNo[1] };
}

export async function sendMobileOtp(phone) {
    try {
        if (phone) {
            // Sanitize the phone number first and then send OTP
            let { countryCode, phoneNo } = sanitizePhoneNo(phone);
            let mobileOTPRes = await axiosHttpService(sendMobileOtpOption(countryCode, phoneNo));
            if (mobileOTPRes.code === 200 && mobileOTPRes.res['status-code'] === '101') {
                return { 'requestId': mobileOTPRes.res['request_id'], 'status': true };
            }
        }
    } catch (error) {
        console.log(error);
    }
    return { 'status': false };
}

export async function checkMobileOtp(otp, requestId) {
    try {
        if (otp && requestId) {
            let checkMobileOtpResp = await axiosHttpService(checkMobileOtpStatusOption(otp, requestId));
            if (checkMobileOtpResp.res["status-code"] === "101" && checkMobileOtpResp.res.result.sim_details.otp_validated) {
                return { 'status': true };
            }
        }
    } catch (error) {
        console.log(error);
    }
    return { 'status': false };
}

export async function getMobileDetails(requestId) {
    try {
        if (requestId) {
            let mobileDetailsResp = await axiosHttpService(getMobileDetailsOption(requestId));
            if (mobileDetailsResp.res["status-code"] === "101") {
                return { 'status': true, 'mobileData': mobileDetailsResp.res };
            }
        }
    } catch (error) {
        console.log(error);
    }
    return { 'status': false };
}