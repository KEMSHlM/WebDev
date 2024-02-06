export {}

interface Component {
    getLogMessage(mas: string): string;
}

class Logger implements Component {
    getLogMessage(msg: string): string {
        return msg;
    }
}

abstract class Decorator implements Component {
    constructor(protected component: Component) {
    }
    
    abstract getLogMessage(msg: any): string;
}

class TimestampDecorator extends Decorator {
    getLogMessage(msg: any): string {
        const date = new Date();
        const timestamp = date.toLocaleDateString("ja-Jp");
        return this.component.getLogMessage(timestamp + ' ' + msg);
    }
}

class LogLevelDecorator extends Decorator {
    constructor(
        component: Component,
        private logLevel: string,
    ) {
        super(component);
    }
    
    getLogMessage(msg: any): string {
        return this.component.getLogMessage(this.logLevel + ' ' + msg);
    }
}

function run() {
    const logger = new Logger();
    const loglevel = new LogLevelDecorator(logger, "INFO");
    const timestamp = new TimestampDecorator(loglevel);

    console.log(logger.getLogMessage("Design Pattern"))
    console.log(loglevel.getLogMessage("Design Pattern"))
    console.log(timestamp.getLogMessage("Design Pattern"))
}

run();