import { Task, TaskList } from './task.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
    const taskListElement = document.getElementById('taskList') as HTMLElement;
    const tasks = new TaskList();

    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const task = new Task(taskInput.value);
            const taskId = tasks.addTask(task);
            taskInput.value = '';
            displayTask(taskId, task);
        }
    });

    function displayTask(taskId: string, task: Task) {
        const li = document.createElement('li');
        li.textContent = task.description + ' - ' + task.getTaskStatus();
        taskListElement.appendChild(li);
    }
});