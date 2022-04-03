const city = 'bielsko biała'

const citySplit = city.split('') //zamienia city na tablicę, każda litera to osobny index


const newArray = citySplit.filter((element) => {
    if (element !== ' ') {
        return true
    } else {
        return false
    }
}) //funkcja zwraca tablicę bez spacji
const arrayToString = newArray.join('') //łączy tablicę w stringa

console.log(arrayToString) //zwraca stringa bielskobiała