// Global Async di module
// secara default semua function yg berada dalam module, behaviornya adalah async function
// karnanya async await dapat dilakukan tanpa perlu set async pada sebuah function

function samplePromise(){
    return Promise.resolve("Ardi");
}

const name = await samplePromise();
console.info(name);