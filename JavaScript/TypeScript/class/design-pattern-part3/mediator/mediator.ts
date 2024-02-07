export {}

interface Mediator {
    registerUser(user: User);
    sendMessage(msg: string, sendUser: User);
}

class ChatRoom implements Mediator {
    private members: User[] = [];
    
    registerUser(user: User) {
        this.members.push(user);
    }
    
    sendMessage(msg: string, sendUser: User) {
        this.members.forEach(member => {
            if (member !== sendUser) {
                member.receive(msg);
            }
        })
    }
}

abstract class User {
    constructor(
        protected mediator: Mediator,
        protected name: string,
    ) {}
    
    abstract send(msg: string);
    abstract receive(msg: string);
}

class ChatUser extends User {
    send(msg: string) {
        console.log(`${this.name} -> メッセージ送信`);
        this.mediator.sendMessage(msg + ` from ${this.name}`, this);
    }

    receive(msg: string) {
        console.log(`${this.name} -> メッセージ受信: ${msg}`);
    }
}

function run() {
    const chatRoom1 = new ChatRoom();

    const yamada = new ChatUser(chatRoom1, "yamada");
    const suzuki = new ChatUser(chatRoom1, "suzuki");
    const tanaka = new ChatUser(chatRoom1, "tanaka");
    
    chatRoom1.registerUser(yamada);
    chatRoom1.registerUser(suzuki);
    chatRoom1.registerUser(tanaka);
    
    yamada.send('ヤッホ');
    tanaka.send('ヤッホい');
}

run();