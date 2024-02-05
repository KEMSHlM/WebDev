export {}

class User {}

interface IUserService {
    create(user: User): User;
    findById(id: string): User;
}

class UserController {
    constructor(private userService: IUserService) {
        this.userService = userService;
    }

    create(user: User) {
        return this.userService.create(user);
    }

    findById(id: string): User {
        return this.userService.findById(id);
    }
}

interface IUserRepository {
    create(user: User): User;
    findById(id: string): User;
}

class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    create(user: User): User {
        return this.userRepository.create(user);
    }

    findById(id: string): User {
        return this.userRepository.findById(id);
    }
}

class UserRdbRepository implements IUserRepository {
    create(user: User): User {
        console.log("RDBにUserを登録");
        return user;
    }

    findById(id: string): User {
        console.log(`ID: ${id}のユーザーを検索`);
        return new User();
    }
}

class TestRdbRepository implements IUserRepository {
    create(user: User): User {
        console.log("RDBにUserを登録");
        return user;
    }

    findById(id: string): User {
        console.log(`TestID: ${id}のユーザーを検索`);
        return new User();
    }
}

function run() {
    // const repository = new UserRdbRepository();
    const repository = new TestRdbRepository();
    const service = new UserService(repository);
    const userController = new UserController(service);
    userController.findById("123");
}

run();