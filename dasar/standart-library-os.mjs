// standart library nodejs
// https://nodejs.org/dist/latest-v18.x/docs/api/os.html#osarch
// os adalah salah satu standart library di nodejs

import os from "os";

console.info(os.platform());
console.info(os.hostname());
console.info(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.networkInterfaces());
console.info(os.version());