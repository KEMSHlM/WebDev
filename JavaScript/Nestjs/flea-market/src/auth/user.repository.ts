import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, status } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // create には，同じ変数名で渡してやる必要がある．
    // 期待される変数名：実際の変数で渡せる．
    const user = this.create({ username, password: hashPassword, status });

    await this.save(user);
    return user;
  }
}
