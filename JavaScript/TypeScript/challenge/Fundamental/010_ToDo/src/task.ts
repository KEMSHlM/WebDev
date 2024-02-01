// To Do アプリ
export type Status = 'Pending' | 'In Progress' | 'Completed' | 'On Hold' | 'Cancelled';

export class Task {
    constructor(public readonly description: string, private taskStatus: Status = 'Pending') {
        this.description = description;
        this.taskStatus = taskStatus;
    }
    
    setTaskStatus(taskStatus: Status) {
        this.taskStatus = taskStatus;
    }
    
    getTaskStatus(): Status {
        return this.taskStatus;
    }
}

export class TaskList extends Map<string, Task> {
    constructor() {
        super();
    }
    
    addTask(task: Task): string {
        const DisplayDigit = 5;
        const min = 0;
        const max = 10 ** DisplayDigit;

        const randomId: string = (() => Math.floor(Math.random() * (max - min +1) + min).toString())();
        super.set(randomId, task);
        
        console.log(this);

        return randomId;
    }
    
    setStatus(key: string, taskStatus: Status): boolean {
        const task = this.get(key);
        if (task) { 
            task.setTaskStatus(taskStatus);
            return true;
        } 
        return false;
    }
}