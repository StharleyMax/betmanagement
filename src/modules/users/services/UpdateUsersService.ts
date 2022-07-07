import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UpdateUserDto } from '../dto/user.dto';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

export class UpdateUsersService {
  public async execute({
    id,
    name,
    email,
    password,
    oldPassword,
  }: UpdateUserDto) {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(id);

    if (!user) throw new AppError('User not found');

    const userUpdateEmail = await usersRepository.findByEmail(email);

    if (userUpdateEmail && userUpdateEmail.id !== user.id)
      throw new AppError('Email already exists');

    if (password && !oldPassword) {
      throw new AppError('Old password is required');
    }
    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old password does not match');
      }
      user.password = await hash(password, 8);
    }

    user.name = name;
    user.email = email;
    return usersRepository.save(user);
  }
}
