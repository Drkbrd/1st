const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.send('Hola, soy una la ruta products');
});


app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});