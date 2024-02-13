import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, status } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hasPassword = await bcrypt.hash(password, salt);
    const user = this.create({ username, password, status });

    await this.save(user);
    return user;
  }
}
