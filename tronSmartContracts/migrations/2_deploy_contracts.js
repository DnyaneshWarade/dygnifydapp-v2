var Token = artifacts.require("./Token.sol");
var DygnifyStaking = artifacts.require("./DygnifyStaking.sol");
var NFTMinter = artifacts.require("./NFTMinter.sol");

module.exports = async function(deployer) {
  deployer.deploy(Token,"10000000000000000000");
  let token = await Token.deployed();
  deployer.deploy(DygnifyStaking, token.address);
  deployer.deploy(NFTMinter);
};

