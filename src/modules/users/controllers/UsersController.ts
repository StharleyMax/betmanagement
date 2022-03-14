import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService';
import { ListUsersService } from '../services/ListUsersService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsersService();
    const users = await listUsers.execute()
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, confirmPassword, telephone } = request.body;
    const userService = new CreateUsersService();
    const user = await userService.execute({
      name,
      email,
      password,
      confirmPassword,
      telephone,
    });
    return response.json(user);
  }
}
