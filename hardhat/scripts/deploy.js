const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const whitelistContract = await hre.ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log(
    "Whitelist deployed successfully to:",
    deployedWhitelistContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
