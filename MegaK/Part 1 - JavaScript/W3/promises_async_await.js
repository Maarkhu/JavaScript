// const {
//     setTimeout
// } = require('timers/promises');

// const intervalId = setInterval(() => console.log('Cyk'), 100);

// (async () => {

//     console.log('Hi');
//     await setTimeout(1000);
//     console.log('Hello');

//     clearInterval(intervalId);

// })();

// ###----------------------------------------------------------
// Mapy i Promise.all

const {
    setTimeout
} = require('timers/promises');

async function brewTea() {
    console.log('Brewing tea...');
    await setTimeout(1000);
    console.log('Tea is ready');
}
async function orderKey() {
    console.log('Ordering and waiting fo package...');
    await setTimeout(2000);
    console.log('Package arrived!');
}

(async () => {
    await Promise.all([brewTea(), orderKey()]);
    // await brewTea();
    // await orderKey();
    // brewTea();
    // orderKey();
    console.log('Finished');
})();