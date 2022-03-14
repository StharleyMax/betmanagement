import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';
import '@shared/typeorm';
import routes from '@shared/http/routes';
import { errors } from 'celebrate';
import 'express-async-errors'

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors);

app.listen(process.env.PORT, () => {
  console.log(`server is listenin on ${process.env.PORT}`);
});
