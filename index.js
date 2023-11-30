const express = require('express');
const app = express();
const port = 3000;

const myStore = { "1": { id: 1, name: "producto 1", price: 1000 }, "2": { id: 2, name: "producto 2", price: 2000 }, "3": { id: 3, name: "producto 3", price: 3000 } }

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  //res.json([{ name: "producto 1", price: 1000 }, { name: "producto 2", price: 2000 }]);
  res.json(myStore);
});
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  var product = myStore[id];
  //res.send(product)
  if (id in myStore) {
    res.json(myStore[id]);
  } else {
    res.status(404).json({ message: 'Not Found' })
  }
});


app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});