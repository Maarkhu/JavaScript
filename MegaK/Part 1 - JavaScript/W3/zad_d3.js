const bookNum = prompt(Number('Wpisz numer ISBN swojej książki'));

async function responsable() {
  const response = await fetch((`https:www.googleapis.com/books/v1/volumes?q=isbn:${bookNum}`)).catch((err) => console.log('Coś jest nie tak', err));
  const data = await response.json();
  console.log(`${data.ems[0].volumeInfo.authors[0]} jest autorem książki o tytule: ${data.items[0].volumeInfo.title}`);
}
responsable();
