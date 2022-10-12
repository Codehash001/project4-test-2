const hre = require('hardhat')

const _initBaseURI='ipfs://QmY8j6RaBekRn7T536urybkACQwcqbqnQyPTNCp6JdQgZ9/'

async function main() {

  // Deploy the contract
  const test4 = await hre.ethers.getContractFactory('Test4')
  const Test4 = await test4.deploy(
    _initBaseURI)
  await Test4.deployed()

  console.log('Test4 deployed to:', Test4.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
