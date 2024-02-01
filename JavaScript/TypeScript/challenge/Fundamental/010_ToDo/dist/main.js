"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_js_1 = require("./task.js");
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskListElement = document.getElementById('taskList');
    const tasks = new task_js_1.TaskList();
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const task = new task_js_1.Task(taskInput.value);
            const taskId = tasks.addTask(task);
            taskInput.value = '';
            displayTask(taskId, task);
        }
    });
    function displayTask(taskId, task) {
        const li = document.createElement('li');
        li.textContent = task.description + ' - ' + task.getTaskStatus();
        taskListElement.appendChild(li);
    }
});
