function amlCheck(nameArray) {

    var data = JSON.stringify({
        "data": "json",
        "type": [
          "Individual"
        ],
        "names": nameArray,
        "source": [
          "SDN"
        ],
        "minScore": 90,
        "includeAlias": false
      });

    var api_options = {
        method: 'post',
        url: 'https://ofac.air.nayaone.com/v2/batch',
        headers: {
            'sandpit-key': process.env.REACT_APP_NAYAONE_OFAC_KEY,
            'content-type': 'application/json'
        },
        data: data
    }

    return api_options;

}