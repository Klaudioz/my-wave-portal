const { hexStripZeros } = require("ethers/lib/utils");

async function main(){
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // HRE=Hardhat Runtime Environment
  const waveContract = await waveContractFactory.deploy();
  // Waiting for transaction to be mined.
  await waveContract.deployed();
  console.log("Contract deployed", waveContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })