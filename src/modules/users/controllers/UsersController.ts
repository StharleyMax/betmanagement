import { Request, Response } from 'express';

export default class UsersController {
  public async index(request: Request, response: Response) {
    return response.send('controller user');
  }

  public create(request: Request, response: Response) {
    const { name, email } = request.body;

    return { name, email };
  }
}
