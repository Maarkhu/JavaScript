const {
  mkdir, rename, readdir, umlink, rm,
} = require('fs').promises;

// tworzenie katalogu
// (async () => {
//   await mkdir('./nowyFolder'), {
//     recursive: true,
//   };
// })();

// rename zmienia nazwy plików, ale też może je przenosić, bo zmiana nazwy to tak naprawdę przeniesienie
// (async () => {
//   try { await rename('./bomba.txt', './changedFolder/moved.txt'); } catch (e) {
//     if (e.code === 'ENOENT') {
//       console.log('Given file or directory name not exist.');
//     }
//   }
// })();

// rm kasuje całe drzewo katalogu ze wszystkim w środku
// (async () => {
//   await rm('D:/gry'), {
//     recursive: true,
//   };
// })();

// process.argv przydatne gdy chcemy udostępnić użytkownikowi możliwość zmiany danych  i operacji w progamie
// console.log(process.argv);
//
// const a = Number(process.argv[2]);
// const b = Number(process.argv[4]);
// const sign = process.argv[3];
// if (sign === '*') {
//   console.log(a * b);
// } else if (sign === '+') {
//   console.log(a + b);
// }

// zmiana nazwy pliku
(async () => {
  const oldFile = process.argv[2];
  const newFile = process.argv[3];

  try {
    await rename(oldFile, newFile);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log(`${oldFile} does not exist`);
    } else {
      console.log('Unnown error', e);
    }
  }
})();
