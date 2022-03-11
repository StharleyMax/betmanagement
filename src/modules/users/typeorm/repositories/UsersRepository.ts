import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findById(id: number) {
    return this.findOne(id);
  }

  public async findByName(name: string) {
    return await this.findOne(name);
  }

  public async findByEmail(email: string) {
    const user = await this.findOne({ where: { email } });
    return user;
  }
}
