//Wiek
const num = prompt('Wpisz swoje imię.').trim();
const sur = prompt('Wpisz swoje nazwisko.').trim();
const age = prompt('Proszę wpisz swój wiek.').trim();

if (age < 18) {
    console.log('Proszę opuść tę stronę. Przeczytaj książkę, pograj w piłkę z kolegami, łotever.')
};

if (age >= 18) {
    console.log(num + ' ' + sur + ' Jesteś zwycięzcą!')
    console.log('W nagrodę możesz skorzystać z naszego nowoczesnego kalkulatora dla dorosłych!')
    //kalkulator
    let nu1 = Number(prompt('Podaj pierwszą liczbę'));
    for (nu1; isNaN(nu1); nu1 = Number(prompt('Podaj ponownie pierwszą liczbę.'))) {
        console.log('Nie wpisałeś cyfry, spróbuj jeszcze raz.')
    }
    let nu2 = Number(prompt('A teraz drugą'));
    for (nu1; isNaN(nu2); nu2 = Number(prompt('Podaj drugą liczbę, tylko się znowu nie pomyl, bo pętla się nie skończy:)'))) {
        console.log('Nie wpisałeś cyfry, spróbuj jeszcze raz')
    }
    const sign = prompt('Podaj znak działania');
    if (sign === '-') {
        console.log(nu1 - nu2);
    } else
    if (sign === '+') {
        console.log(nu1 + nu2);
    } else
    if (sign === '*') {
        console.log(nu1 * nu2);
    } else
    if (sign === '/' && nu2 !== 0) {
        console.log(nu1 / nu2)
    } else {
        console.log('Nie rób tego, nie dziel przez zero.')
    }
}