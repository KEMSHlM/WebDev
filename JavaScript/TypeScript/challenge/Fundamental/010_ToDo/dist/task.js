export class Task {
    constructor(description, taskStatus = 'Pending') {
        this.description = description;
        this.taskStatus = taskStatus;
        this.description = description;
        this.taskStatus = taskStatus;
    }
    setTaskStatus(taskStatus) {
        this.taskStatus = taskStatus;
    }
    getTaskStatus() {
        return this.taskStatus;
    }
}
export class TaskList extends Map {
    constructor() {
        super();
    }
    addTask(task) {
        const DisplayDigit = 5;
        const min = 0;
        const max = Math.pow(10, DisplayDigit);
        const randomId = (() => Math.floor(Math.random() * (max - min + 1) + min).toString())();
        super.set(randomId, task);
        console.log(this);
        return randomId;
    }
    setStatus(key, taskStatus) {
        const task = this.get(key);
        if (task) {
            task.setTaskStatus(taskStatus);
            return true;
        }
        return false;
    }
}
