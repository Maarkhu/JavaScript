//console

// const secondP = document.querySelector('p.second-p')
// undefined
// secondP
//     <
//     p class = ​"second-p" > ​"Cupiditate at veniam saepe. Commodi est veniam iusto quaerat suscipit vel porro voluptates, nesciunt soluta, labore maxime iure iste." < /p>​
// secondP.style.fontSize = '2em';
// '2em'
// secondP.style.color = 'blue';
// 'blue'

//const secondP = document.querySelector('p.second-p')
// undefined
// secondP.style.color = 'blue';
// 'blue'
// secondP.style.fontSize = '1.2em';
// '1.2em'
// secondP.style.innerText = 'Hello';
// 'Hello'
// secondP.innerText = 'Hello';
// 'Hello'
// secondP.innerHTML = 'Dokładnie <strong> tak jest </strong>';
// 'Dokładnie <strong> tak jest </strong>'
// InnerHTMl zmienia wszystko łącznie z dziećmi. Jaka zadziałamy na body to zmieni wszystko w środku.

// secondP.classList
// DOMTokenList(2) ['second-p', 'highlight', value: 'second-p highlight']
// secondP.classList.add('crazy-stuff');
// undefined
// secondP.classList.contains('crazy-stuff');
// true
// secondP.classList.contains('gjhgjhg');
// false
// secondP.classList.remove('highlight');
// undefined
// secondP.classList.contains('highlight');
// false
//Przełącznik
// secondP.classList.toggle('crazy-stuff');
// false
// secondP.classList.toggle('crazy-stuff');
// true


const btn = document.querySelector('.btn-toggle-color');
const h1 = document.querySelector('.counter');
const span = document.querySelector('.sp-1');
const body = document.body;
//localStorage changes

let i = Number(localStorage.getItem(`i`));
console.log(i);
h1.innerText = `A taki licznik: ${String(i)}`;

btn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-site');
    h1.innerText = `A taki licznik: ${String(++i)}`
    if (i < 20) {
        if (isDark) {
            btn.innerText = 'Turn to light mode';
        } else {
            btn.innerText = 'Turn to dark mode';
        }
    } else {
        btn.innerText = '!Alert, you strucked a fire!'
        body.classList.toggle('red-body');
    }
    localStorage.setItem('i', String(i));
})