// localStorage.setItem('courseName', 'Mega Kurs');
// localStorage.getItem('courseName');
const lastSavedVisitDate = localStorage.getItem('last-visit');
if (lastSavedVisitDate === null) {
    console.log('You are first time here');
} else {
    console.log(`You were here on ${lastSavedVisitDate}`);
}
//Set last visit date
const date = new Date();
const dateString = date.toString();
//localStorage przechowuje tylko string tak dla pewności
localStorage.setItem('last-visit', dateString);