// // localStorage.setItem('courseName', 'Mega Kurs');
// // localStorage.getItem('courseName');
// const lastSavedVisitDate = localStorage.getItem('last-visit');
// if (lastSavedVisitDate === null) {
//     console.log('You are first time here');
// } else {
//     console.log(`You were here on ${lastSavedVisitDate}`);
// }
// //Set last visit date
// const date = new Date();
// const dateString = date.toString();
// //localStorage przechowuje tylko string tak dla pewności
// localStorage.setItem('last-visit', dateString);

const h1 = document.querySelector('h1');
const personInfo = localStorage.getItem('person-info');
if (personInfo === null) {
    const name = prompt('Proszę podaj swoje imię.');
    const surname = prompt('Proszę podaj swoje nazwisko.');

    const person = {
        name,
        surname,
    };
    localStorage.setItem('person-info', JSON.stringify(person));
} else {
    const oldPerson = JSON.parse(personInfo);
    const {
        name,
        surname
    } = oldPerson
    h1.innerText = `${name} ${surname}`;
}