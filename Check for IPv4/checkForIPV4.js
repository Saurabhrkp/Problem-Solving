const prompt = require('prompt-sync')({ sigint: true });

const address = prompt('Enter address to check: ');

const isValidIP = (str) => {
  const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
  const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
  return regex.test(str);
};
var result = isValidIP(address);

console.log(`The IP address ${address} is IPv4: ${result}`);
