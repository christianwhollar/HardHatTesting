// scripts/deploySimpleStorage.js
const hre = require("hardhat");

async function main() {
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    console.log("Deploying SimpleStorage...");
    await simpleStorage.waitForDeployment();
    const address = await simpleStorage.getAddress()
    console.log("SimpleStorage deployed to:", address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });
