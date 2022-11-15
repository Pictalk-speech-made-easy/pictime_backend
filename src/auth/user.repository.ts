import { AuthCredentialsDto } from './dto/AuthCredentialsDto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User) // This is a custom repository
export class UsersRepository extends Repository<User> {
  constructor() {
    super();
  }
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    
    const { username, password } = authCredentialsDto;

    const user = this.create({ username, password });
    await this.save(user);
  }
}
