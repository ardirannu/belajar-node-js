import {EventEmitter} from "events"; //import class EventEmitter dari module events

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
});

// bisa membuat 2 atau lebih event yg sama
emitter.addListener("hello", (name) => {
    console.info(`Halo ${name}`);
});

emitter.emit("hello", "Ardi"); //pengiriman datanya bersifat opsional