import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

export class DeleteUsersService {
  public async execute(id: number) {
    const userService = getCustomRepository(UsersRepository);

    const user = await userService.findOne(id);

    if (!user) throw new AppError('user not found');

    return userService.softDelete(id);
  }
}
