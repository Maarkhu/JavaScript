const bookNum = prompt('Wpisz numer ISBN swojej książki');

fetch(`https:www.googleapis.com/books/v1/volumes?q=isbn:${bookNum}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(` Autor: ${data.items[0].volumeInfo.authors[0]}, Tytuł: ${data.items[0].volumeInfo.title}`)
    })
    .catch((err) => console.log('Coś jest nie tak', err))