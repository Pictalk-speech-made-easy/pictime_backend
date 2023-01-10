import { AuthCredentialsDto } from './dto/AuthCredentialsDto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User) // This is a custom repository
export class UsersRepository extends Repository<User> {
  constructor() {
    super();
  }
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    //hash
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create();
    user.username= username;
    user.password = await bcrypt.hash(password, salt);
    try {
    await this.save(user);}
    catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException(`could not save user`);
      }
    }
  }
  async getUserDetails(user: User): Promise<User> {
    delete user.password;
    // delete user.salt;
    // delete user.collections;
    // delete user.resetPasswordToken;
    // delete user.resetPasswordExpires;
    // delete user.pictos;
    return user;
  }
}
