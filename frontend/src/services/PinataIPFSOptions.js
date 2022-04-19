const REACT_APP_PINATA_API_KEY = "bd910e460ee4b6ef0519"
const REACT_APP_PINATA_API_SECRET = "38f736a6d364857d02414d490277de4952207f74d1f495c4f2158332639120b7"
const axios = require('axios');
export const testAuthentication = () => {
    var api_options = {
        method: 'get',
        url: 'https://api.pinata.cloud/data/testAuthentication',
        headers: {
          'pinata_api_key': REACT_APP_PINATA_API_KEY,
          'pinata_secret_api_key': REACT_APP_PINATA_API_SECRET
        }
    }

    return api_options;
}

export const uploadFileToIPFS = (stream) => {
  const data = new FormData();
  data.append('file', stream);

  var api_options = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': REACT_APP_PINATA_API_KEY,
        'pinata_secret_api_key': REACT_APP_PINATA_API_SECRET
      },
      data: data
  }

  return api_options;
}

export const pinJSONToIPFS = (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios 
      .post(url, JSONBody, {
          headers: {
              pinata_api_key: REACT_APP_PINATA_API_KEY,
              pinata_secret_api_key: REACT_APP_PINATA_API_SECRET,
          }
      })
      .then(function (response) {
         return {
             success: true,
             pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
         };
      })
      .catch(function (error) {
          console.log(error)
          return {
              success: false,
              message: error.message,
          }

  });
};