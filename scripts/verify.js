require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')


const _initBaseURI='ipfs://QmY8j6RaBekRn7T536urybkACQwcqbqnQyPTNCp6JdQgZ9/'

async function main() {

  await hre.run('verify:verify', {
    address: '0x49cbFfEf61C9e94bE26C32D2C63076C4Afd7fc28',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })