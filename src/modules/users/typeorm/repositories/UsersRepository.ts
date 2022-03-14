import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findCustom(type: string, operator: string, value: string) {
    if (operator === 'ilike') value = `'${value}%'`;
    const user = await this.query(
      `select * from users where ${type} ${operator} ${value}`,
    );
    return user;
  }

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
