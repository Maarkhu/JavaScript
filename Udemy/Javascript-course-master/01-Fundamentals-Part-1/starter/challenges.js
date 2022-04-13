// #Challenge 1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI1 = johnMass / (johnHeight * johnHeight);
// let markBMI1 = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//Template literals
// console.log('\nString with\n\
// multiple\n\
// lines');

// console.log(`
// String with
// multiple
// lines`)

// #Challenge 2
// some code from #Challenge 1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// };

// #Challenge 3

const doSc1 = 97;
const doSc2 = 112;
const doSc3 = 101;
const koSc1 = 109;
const koSc2 = 95;
const koSc3 = 106;

const avDoSc = (doSc1 + doSc2 + doSc3) / 3;
const avKoSc = (koSc1 + koSc2 + koSc3) / 3;
console.log(avDoSc.toFixed(1), avKoSc.toFixed(1));
if (avDoSc > avKoSc && avDoSc > 100) {
    console.log(`Dolphins won the competition. They have ${avDoSc.toFixed(1)} points!`)
} else if (avDoSc < avKoSc && avKoSc > 100) {
    console.log(`Koalas won the competition. They have ${avKoSc.toFixed(1)} points!`)
} else if (avDoSc === avKoSc && avKoSc > 100 && avDoSc > 100) {
    console.log(`Ladies and Gentelman there is a draw!`)
} else {
    console.log('Nobody wins!')
}