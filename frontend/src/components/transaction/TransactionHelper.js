import { ethers } from "ethers";
import dygnifyStaking from "../../artifacts/contracts/DygnifyStaking.sol/DygnifyStaking.json";
import dygnifyToken from "../../artifacts/contracts/DygnifyToken.sol/DygnifyToken.json";
import { requestAccount } from "../navbar/NavBarHelper";

import TronWeb from 'tronweb';

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://nile.trongrid.io');
const solidityNode = new HttpProvider('https://nile.trongrid.io');
const eventServer = new HttpProvider('https://nile.trongrid.io');
const privateKey = '1a161ae7e9fdc45d087dae39472f594b074303be4b33a3f2274469ae07ea03db';
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
tronWeb.setHeader({"TRON-PRO-API-KEY": '34a46fc6-19e5-4b8d-8ca0-de242166d522'});

const dygnifyStakingAddress = "0x043c0B0385870AaFe42d98A2817DDA81E462Ccc9";
const token = "0x420d23b5D7B70fFEF09A6076B7Db1176472BaA37";


export async function approve(amount) {
  amount = amount *1000000;
  if (amount <= 0 || amount <= "0" ) {
    console.log("Amount must be greater than 0");
  } else if (typeof window.tronWeb !== "undefined") {
    let usdtContract = await window.tronWeb.contract().at('TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj');
    let res = await usdtContract.approve("TP4B5xaLWpJKBzPYNppno6GxcPyxfEbQaW",amount).send({
      feeLimit:100_000_000,callValue: 1000000,
      shouldPollResponse:true
    });
      
  }
}

export async function stake(amount) {
  amount = amount *1000000;
  if (amount <= 0 || amount <= "0" ) {
    console.log("Amount must be greater than 0");
  } else if (typeof window.tronWeb !== "undefined") {
    
    let stackingContract = await window.tronWeb.contract().at('TP4B5xaLWpJKBzPYNppno6GxcPyxfEbQaW');
    let res = await stackingContract.stake(amount).send({
      feeLimit:100_000_000,callValue: 1000000,
      shouldPollResponse:true
    });
      
  }
}

export async function unstake(amount) {
  amount = amount *1000000;
  if (amount === 0) console.log("Amount must be greater than 0");
  else if (typeof window.tronWeb !== "undefined") {
    let stackingContract = await window.tronWeb.contract().at('TP4B5xaLWpJKBzPYNppno6GxcPyxfEbQaW');
    let res = await stackingContract.unstake(amount).send({
      feeLimit:100_000_000,callValue: 1000000,
      shouldPollResponse:true
    });
  }
}

export async function withdrawYield() {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      dygnifyStakingAddress,
      dygnifyStaking.abi,
      signer
    );
    const transaction = await contract.withdrawYield();
    await transaction.wait();
  }
}

export async function getTotalYield() {
  try {
    if (typeof window.tronWeb !== "undefined") {
      
      let stackingContract = await window.tronWeb.contract().at('TP4B5xaLWpJKBzPYNppno6GxcPyxfEbQaW');
      let res = await stackingContract.getTotalYield().call();
      return tronWeb.toDecimal(tronWeb.fromSun(res));
    }
  } catch (error) {
    console.log(error);
  }
  return 0;
}

export async function getWalletBal() {
  try {
    if (typeof window.tronWeb !== "undefined") {
      
      let usdtContract = await window.tronWeb.contract().at('TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj');
      let res = await usdtContract.balanceOf(window.tronWeb.defaultAddress.base58).call();
      return tronWeb.fromSun(res);
    }
  } catch (error) {
    console.log(error);
  }

  return 0;
}

export async function getWithdrawBal() {
  try {
    if (typeof window.tronWeb !== "undefined") {
      
      let stackingContract = await window.tronWeb.contract().at('TP4B5xaLWpJKBzPYNppno6GxcPyxfEbQaW');
      let res = await stackingContract.stakingBalance(window.tronWeb.defaultAddress.base58).call();
      // console.log(res)
      return tronWeb.toDecimal(tronWeb.fromSun(res));
    }
  } catch (error) {
    console.log(error);
  }

  return 0;
}
