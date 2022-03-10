import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Estou aqui e isso vai funcionar');
});

app.listen(process.env.PORT, () => {
  console.log(`server is listenin on ${process.env.PORT}`);
});
