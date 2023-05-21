import fs from "fs/promises"; //filesystem async dengan promise

const buffer = await fs.readFile("file-system.mjs"); //readfile
// karna readFile menghasilkan sebuah promise maka untuk mendapatkan datanya harus menggunakan await

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS"); //writefile / bisa juga membuat file baru

// selengkapnya bisa dilihat disini
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html



