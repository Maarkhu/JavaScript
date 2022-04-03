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

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
};