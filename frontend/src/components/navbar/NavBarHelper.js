export const requestAccount = async () => {
  await window.tronLink.request({method: 'tron_requestAccounts'})
};

export const isConnected = async () => {
  let connectionStatus = await window.ethereum.isConnected();
  return connectionStatus;
};
