import { useState } from 'react';
import TronWeb from 'tronweb';
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://nile.trongrid.io');
const solidityNode = new HttpProvider('https://nile.trongrid.io');
const eventServer = new HttpProvider('https://nile.trongrid.io');
const privateKey = 'd95bfd57e1079b42f3a9f9eaf98e0277611fa7b978baa65659f72ecb939ebba0';
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
tronWeb.setHeader({"TRON-PRO-API-KEY": '34a46fc6-19e5-4b8d-8ca0-de242166d522'});

function TronTest() {
  
  async function testContract() {
    let instance = await tronWeb.contract().at("TLuxphi98zGjvxUshbgrydehSr3BsWE7VW");
    console.log(instance);
  }
  return (
    <div>
      <header>
        <br />
        <button onClick={testContract}>Test</button>
      </header>
    </div>
  );
}

export default TronTest;