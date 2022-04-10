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

// const h1 = document.querySelector('h1');
// const personInfo = localStorage.getItem('person-info');
// if (personInfo === null) {
//     const name = prompt('Proszę podaj swoje imię.');
//     const surname = prompt('Proszę podaj swoje nazwisko.');

//     const person = {
//         name,
//         surname,
//     };
//     localStorage.setItem('person-info', JSON.stringify(person));
// } else {
//     const oldPerson = JSON.parse(personInfo);
//     const {
//         name,
//         surname
//     } = oldPerson
//     h1.innerText = `${name} ${surname}`;
// }
// const btn1 = document.querySelector('.btn-1');
// const btn2 = document.querySelector('.btn-2');
// const span1 = document.querySelector('.spn-1');
// const span2 = document.querySelector('.spn-2');
// const p = document.querySelector('#p-1');
// const strong = document.querySelector('strong');
// strong.innerText = (Number(localStorage.getItem('btn-1')))
// btn1.addEventListener('click', () => {
//     span1.innerText = ++span1.innerText;
//     localStorage.setItem('btn-1', (Number(localStorage.getItem('btn-1'))) + 1);
//     p.innerText = `Stary do tej pory kliknąłeś ${(Number(localStorage.getItem('btn-1')))+1} razy, że świetnie i ${(Number(localStorage.getItem('btn-2')))+1} razy, że lepiej nie pytaj.`

// });

// btn2.addEventListener('click', () => {
//     span2.innerText = ++span2.innerText;
//     localStorage.setItem('btn-2', (Number(localStorage.getItem('btn-2'))) + 1);
//     p.innerText = `Stary do tej pory kliknąłeś ${(Number(localStorage.getItem('btn-1')))+1} razy, że świetnie i ${(Number(localStorage.getItem('btn-2')))+1} razy, że lepiej nie pytaj.`

// });

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const p = document.querySelector('#p-1');
const span1 = document.querySelector('.spn-1');
const span2 = document.querySelector('.spn-2');

let counter = localStorage.getItem('counter');
if (counter === null) {
    counter = {
        fajnie: 0,
        dupowato: 0,
    };
} else {
    counter = JSON.parse(counter)
};

function showInfo() {
    const {
        fajnie,
        dupowato
    } = counter;
    p.innerText = `Do tej pory czułeś się ${fajnie} razy i dupowato ${dupowato} razy.`
};

function saveInfo() {
    localStorage.setItem('counter', JSON.stringify(counter))
};
showInfo();

btn1.addEventListener('click', () => {
    span1.innerText = ++span1.innerText;
    counter.fajnie++;
    saveInfo();
    showInfo();

});

btn2.addEventListener('click', () => {
    span2.innerText = ++span2.innerText;
    counter.dupowato++;
    showInfo();
    saveInfo();

});