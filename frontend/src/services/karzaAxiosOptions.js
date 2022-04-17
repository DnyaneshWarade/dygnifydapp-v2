function sendMobileOtpOption(mobileNumber) {

    var data = JSON.stringify({
        "consent": "Y",
        "mobile": mobileNumber
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v2/mobile/otp',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function checkMobileOtpStatusOption(otp, requestId) {

    var data = JSON.stringify({
        "otp": otp,
        "request_id": requestId
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v2/mobile/status',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function getMobileDetailsOption(requestId) {

    var data = JSON.stringify({
        "request_id": requestId
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v2/mobile/details',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function getOcrFetchOptions(url) {

    var FormData = require('form-data');
    var data = new FormData();
    data.append('url', url);
    data.append('checkBlur', 'true');
    data.append('checkBlackAndWhite', 'true');
    data.append('checkCutCard', 'true');
    data.append('checkBrightness', 'true');

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v3/kycocr',
        headers: {
            'cache-control': 'no-cache',
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'multipart/form-data;boundary=----WebKitFormBoundaryjCwX08dH9rJ5rH8u',
            ...data.getHeaders()
        },
        data: data
    };

    return api_options;

}

function getPanStatusCheck(panNo) {

    var data = JSON.stringify({
        consent: "Y",
        getContactDetails: true,
        pan: panNo
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v3/pan-profile',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function getAadhaarConsentOptions(aadhaarNo, caseId, name) {

    var data = JSON.stringify({
        clientData: { caseId: caseId },
        caseId: aadhaarNo,
        consent: "Y",
        consentText: "I authorize Karza Technologies Private Limited to access my Aadhaar number and help me fetch my Aadhaar XML file. I understand that Karza will not be storing or sharing the same in any manner.",
        consentTime: Math.floor(new Date().getTime() / 1000) - 150,
        lat: "19.2217088",
        long: "72.8498176",
        name: name,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v3/aadhaar-consent',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function sendAadharOtpOptions(aadhaarNo, accesskey, caseId) {

    var data = JSON.stringify({
        "consent": "Y",
        "aadhaarNo": aadhaarNo,
        "accessKey": accesskey,
        "clientData": { "caseId": caseId }
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v3/get-aadhaar-otp',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function getAadhaardetailsOptions(otp, aadhaarNo, accesskey, caseId) {

    var data = JSON.stringify({
        "consent": "Y",
        "shareCode": "1234",
        "otp": otp,
        "aadhaarNo": aadhaarNo,
        "accessKey": accesskey,
        "clientData": { "caseId": caseId }
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_APIURL + 'v3/get-aadhaar-file',
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}

function getGSTDetailsOptions(gstin) {

    var data = JSON.stringify({
        "consent": "Y",
        "additionalData": false,
        "gstin": gstin
    });

    var api_options = {
        method: 'post',
        url: process.env.REACT_APP_KARZA_GSTAPIURL,
        headers: {
            'x-karza-key': process.env.REACT_APP_KARZA_APIKEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}


module.exports = {
    sendMobileOtpOption,
    checkMobileOtpStatusOption,
    getMobileDetailsOption,
    getOcrFetchOptions,
    getPanStatusCheck: getPanStatusCheck,
    getAadhaarConsentOptions,
    sendAadharOtpOptions,
    getAadhaardetailsOptions,
    getGSTDetailsOptions
}