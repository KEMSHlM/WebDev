export {}

interface MessageApp {
    send(): void;
}

class LINE implements MessageApp {
    send() {
        console.log("LINE");
    }
}

class Twitter implements MessageApp {
    send() {
        console.log("Twitter");
    }
}

class Facebook implements MessageApp {
    send() {
        console.log("Facebook");
    }
}

abstract class OS {
    protected app: MessageApp | null = null;
    
    setApp(app: MessageApp) {
        this.app = app;
    }
    
    abstract sendMessage(): void;
}

class IOS extends OS {
    sendMessage() {
        console.log("iOSでメッセージ送信");
        
        if (this.app) {
            this.app.send();
        } else {
            throw new Error("アプリが指定されていません．");
        }
    }
}

class Android extends OS {
    sendMessage() {
        console.log("Androidでメッセージ送信");
        
        if (this.app) {
            this.app.send();
        } else {
            throw new Error("アプリが指定されていません．");
        }
    }
}

function run() {
    const line = new LINE();
    const twitter = new Twitter();
    const facebook = new Facebook();
    
    const ios = new IOS();
    const android = new Android();
    
    ios.setApp(line);
    ios.sendMessage();
    android.setApp(facebook);
    android.sendMessage();
}

run();