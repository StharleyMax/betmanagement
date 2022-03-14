import AppError from '@shared/errors/AppError';
import { UserDto } from '../dto/user.dto';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

export class CreateUsersService {
  public async execute({
    name,
    email,
    password,
    telephone,
  }: UserDto) {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExist = await usersRepository.findByEmail(email);
    if (emailExist) throw new AppError(`Email: ${email} already exist`);
    const hashPassword = await hash(password, 8);
    const user = await usersRepository.save({
      name,
      email,
      password: hashPassword,
      telephone,
    });
    return user;
  }
}
