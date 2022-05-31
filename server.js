
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`What do you think? Will it pass ? : ${process.env.WillItPass}`);
    await sleep(5000);
  }
}

main();
