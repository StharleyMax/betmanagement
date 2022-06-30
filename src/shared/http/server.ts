import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import '@shared/typeorm';
import routes from '@shared/http/routes';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error ${error}`,
    });
  },
);
app.listen(process.env.PORT, () => {
  console.log(`server is listenin on ${process.env.PORT}`);
});
