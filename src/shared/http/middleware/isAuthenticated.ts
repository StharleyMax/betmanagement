import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface ITokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }
  const [, token] = authHeader.split(' ');
  try {
    if(!authConfig.jwt.secret) throw new AppError('Secret JWT not fount');
    const decodedToken = verify(token, authConfig.jwt.secret);
    const { sub } = decodedToken as ITokenPayload;
    request.user = {
      id: +sub,
    };
    return next();
  } catch {
    throw new AppError('invalid JWT Token');
  }
}
