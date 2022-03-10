import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';
import '@shared/typeorm';
import routes from '@shared/http/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`server is listenin on ${process.env.PORT}`);
});
