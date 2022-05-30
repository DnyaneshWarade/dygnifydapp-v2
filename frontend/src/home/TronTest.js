import { useState } from 'react';
import TronWeb from 'tronweb';
import { requestAccount } from "../components/navbar/NavBarHelper";
var bigInt = require("big-integer");

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://nile.trongrid.io');
const solidityNode = new HttpProvider('https://nile.trongrid.io');
const eventServer = new HttpProvider('https://nile.trongrid.io');
const privateKey = 'e37ff601df008e952d368e5d51767f3a0d9076c17c53cbece917dc9923a19b60';
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
tronWeb.setHeader({"TRON-PRO-API-KEY": '34a46fc6-19e5-4b8d-8ca0-de242166d522'});

function TronTest() {
  const [tokenId, setTokenId] = useState("");
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  
  async function testContract() {
    let instance = await tronWeb.contract().at('TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj');
    let res = await instance.totalSupply().call();
  }

  async function nftBurn(tokenId){
    if (typeof window.tronWeb !== 'undefined') {
      await requestAccount()
      let minterContract = await window.tronWeb.contract().at('TBCkkgQ1PRCKnxz4DPEHE1oKHM9Ws9Jewz');
      let res = await minterContract.burn(tokenId).send({
        feeLimit:100_000_000,callValue: 1000000,
        shouldPollResponse:true
      });
      console.log(res)
    }
  }

  async function withdrawto(amount,receiver){
    amount = amount *1000000;
    if(amount<=0){
      console.log("amount must be greater than 0");
    }
    else if (typeof window.tronWeb !== "undefined") {
      
      let stackingContract = await window.tronWeb.contract().at('TP4B5xaLWpJKBzPYNppno6GxcPyxfEbQaW');
      let res = await stackingContract.withdrawTo(amount,receiver).send({
        feeLimit:100_000_000,callValue: 1000000,
        shouldPollResponse:true
      });
      console.log(res)
        
    }
  }

  return (
    <div>
      <header>
        <br />
        <button onClick={testContract}>Test</button>
        <br /><br />
        <input type="text" onChange={(event) => setTokenId(event.target.value)} placeholder="Token ID"/>
        <button onClick={() => nftBurn(tokenId)}>
          Burn
        </button>
        <br /><br />
        <input type="text" onChange={(event) => setAmount(event.target.value)} placeholder="Amount"/>
        <input type="text" onChange={(event) => setReceiver(event.target.value)} placeholder="Receiver's Address"/>
        <button onClick={() => withdrawto(amount,receiver)}>
          Transfer
        </button>
      </header>
    </div>
  );
}

export default TronTest;
