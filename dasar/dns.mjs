import dns from "dns/promises";

const address = await dns.lookup("www.sunistheworld.com");

console.info(address.address); //ip
console.info(address.family); //ip version