import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

export class ListUsersService {
  public async execute(): Promise<User[]> {
    return await getCustomRepository(UsersRepository).find();

  }
}
