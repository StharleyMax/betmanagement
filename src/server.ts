import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Estou aqui e isso vai funcionar');
});

app.listen(port, () => {
  console.log(`server is listenin on ${port}`);
});
