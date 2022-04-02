// const grades = [4, 5, 4, 3, 2, 4, 5];
// const mean = grades
//     .reduce((total, num) => total + num) / grades.length
// console.log(mean)

const grades = [4, 5, 4, 3, 2, 4, 5];
let result = 0;
const sum = grades
    .forEach((num) => {
        result += num
    });
console.log(result / grades.length)

const highGrades = grades.filter(num => num >= 4).forEach((num, i, arr) => console.log(num));
// bez forEach console.log(highGrades);