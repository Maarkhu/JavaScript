const express = require('express');
const {readFile} = require('fs').promises;
const app = express();

app.get ('/', async (req, res) => {
  console.log('<h1>Hello from backend</h1>')
  const html = await readFile('./zad.html', 'utf8');
  res.write(`${html}`);
  res.end('<h1>No co tam</h1>');
});
app.listen(3000, 'localhost');