import { useState } from 'react';
import { ethers } from 'ethers'
import dygToken from "../artifacts/contracts/DygnifyToken.sol/DygnifyToken.json";
import axiosHttpService from '../services/axioscall';
import uploadFileToIPFS from '../services/PinataIPFSOptions';

const tokenAddress = "0x1546A8e7389B47d2Cf1bacE7C0ad3e0A91CAae94"

function Token() {
  const [userAccount, setUserAccount] = useState();
  const [amount, setAmount] = useState();
  const [selectedFile, setSelectedFile] = useState();

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, dygToken.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
    }
  }

  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, dygToken.abi, signer);
      const transaction = await contract.transfer(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  async function approveSendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, dygToken.abi, signer);
      const transaction = await contract.approve(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  // On file upload (click the upload button)
  async function onFileUpload () {
  try {
    console.log("Upload called"); 
    let ipfsUploadRes = await axiosHttpService(uploadFileToIPFS(selectedFile));
    console.log(ipfsUploadRes);
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div>
      <header>
        <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendCoins}>Send Coins</button>
        <input onChange={e => setUserAccount(e.target.value)} placeholder="Account ID" />
        <input onChange={e => setAmount(e.target.value)} placeholder="Amount" />
        <button onClick={approveSendCoins}>Approve</button>
        <input type="file" onChange={ (event) => setSelectedFile(event.target.files[0]) }/>
                <button onClick={onFileUpload}>
                  Upload!
                </button>
      </header>
    </div>
  );
}

export default Token;