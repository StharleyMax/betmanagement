import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService';
import { DeleteUsersService } from '../services/DeleteUsersService';
import { ListUsersService } from '../services/ListUsersService';
import { ShowUsersService } from '../services/ShowUsersService';
import { UpdateUsersService } from '../services/UpdateUsersService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsersService();
    const users = await listUsers.execute();
    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const userService = new ShowUsersService();
    const { value } = request.params;
    const { type, operator } = request.body;
    const showUser = await userService.execute(type, operator, value);
    return response.json(showUser);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, telephone } = request.body;
    const userService = new CreateUsersService();
    const user = await userService.execute({
      name,
      email,
      password,
      telephone,
    });
    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password, oldPassword, telephone } = request.body;
    const { id } = request.params;
    const updateService = new UpdateUsersService();
    const update = await updateService.execute({
      name,
      email,
      password,
      oldPassword,
      telephone,
      id: +id,
    });
    return response.json(update);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteService = new DeleteUsersService();
    await deleteService.execute(+id);
    response.status(200).end();
  }
}
