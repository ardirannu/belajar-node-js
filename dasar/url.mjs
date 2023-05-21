import {URL} from "url"; // url module

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = "www.ardianto.com"; //bisa juga untuk memanipulasi url

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);