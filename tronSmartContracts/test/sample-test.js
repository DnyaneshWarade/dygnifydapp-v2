const { expect } = require("chai");
var DygnifyStaking = artifacts.require("./DygnifyStaking.sol");
var NFTMinter = artifacts.require("./NFTMinter.sol");
let usdtAddress = "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj"

describe("DygnifyStaking", function (accounts) {
  let token ;
  let dygnifyStaking;

  beforeEach(async () => {
    

  })

  it("contract should stake amount above 0", async function () {
    return DygnifyStaking.deployed().then(function(instance) {
      return instance.call('usdcToken').then(function(result) {
        assert.equal("TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj", result, "is not call method f");
      });
    })
  });


});