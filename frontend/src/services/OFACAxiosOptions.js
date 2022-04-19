const REACT_APP_OFAC_MIN_SCORE = "90"
const REACT_APP_NAYAONE_SANDPIT_KEY = "c4064533-8be7-4b6f-883f-f8650911085e"

export const amlCheck = (name, digitalCurrencyAddress) => {
  if (!name) {
    return null;
  }
  let caseData = "";
  if (digitalCurrencyAddress) {
    caseData = { "name": name, "digitalCurrencyAddress": digitalCurrencyAddress };
  } else {
    caseData = { "name": name };
  }

  var data = JSON.stringify({
    "cases": [ caseData ],
    "source": [ "SDN" ],
    "informalName": true,
    "minScore": REACT_APP_OFAC_MIN_SCORE,
    "includeAlias": true
  });

  var api_options = {
    method: 'post',
    url: 'https://ofac.air.nayaone.com/v3',
    headers: {
      'sandpit-key': REACT_APP_NAYAONE_SANDPIT_KEY,
      'content-type': 'application/json'
    },
    data: data
  }

  return api_options;
}