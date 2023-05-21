import timers from "timers/promises";

// console.info(new Date());
// await timers.setTimeout(5000);
// console.info(new Date());

// untuk set interval dengan promise menggunakan for await
for await (const startTime of timers.setInterval(1000, "ignore")){
    console.info(`Start time at ${new Date()}`);
}
