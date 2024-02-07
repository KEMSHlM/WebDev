export {}

interface Server {
    handle(userID: string): void;
}

class RealServer implements Server {
    handle(userId: string) {
        console.log(userId + 'を実行しています．');
    } 
}

class Proxy implements Server {
    constructor(private server: Server) {
    }
    
    private authorize(userId: string) {
        const authorizeUserId = ["1", "2", "3"];
        if (!authorizeUserId.includes(userId)) {
            throw new Error("操作が許可されていません．");
        }
    }
    
    handle(userId:string) {
        this.authorize(userId);
        
        console.log("処理を開始します．");
        this.server.handle(userId);
        console.log("処理を終了しました．");
    }
}

function run () {
    const server = new RealServer();
    const proxy = new Proxy(server);

    proxy.handle("1");
}

run();