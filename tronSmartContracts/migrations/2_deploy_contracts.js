var DygnifyStaking = artifacts.require("./DygnifyStaking.sol");
var NFTMinter = artifacts.require("./NFTMinter.sol");
let usdtAddress = "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj"

module.exports = async function(deployer) {
  deployer.deploy(DygnifyStaking, usdtAddress);
  deployer.deploy(NFTMinter);
};

