

function testAuthentication() {
    var api_options = {
        method: 'get',
        url: 'https://api.pinata.cloud/data/testAuthentication',
        headers: {
          'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
          'pinata_secret_api_key': process.env.REACT_APP_PINATA_API_SECRET
        }
    }

    return api_options;
}

function uploadFileToIPFS(stream) {
  const data = new FormData();
  data.append('file', stream);

  var api_options = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
        'pinata_secret_api_key': process.env.REACT_APP_PINATA_API_SECRET
      },
      data: data
  }

  return api_options;
}

export default uploadFileToIPFS;