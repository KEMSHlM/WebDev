import { Task, TaskList } from './task.js';
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskListElement = document.getElementById('taskList');
    const tasks = new TaskList();
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const task = new Task(taskInput.value);
            const taskId = tasks.addTask(task);
            taskInput.value = '';
            displayTask(taskId, task);
        }
    });
    // タスク表示関数の定義
    function displayTask(taskId, task) {
        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = task.description;
        const statusSelect = document.createElement('select');
        const statuses = ['Pending', 'In Progress', 'Completed', 'On Hold', 'Cancelled'];
        statuses.forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.textContent = status;
            option.selected = task.getTaskStatus() === status;
            statusSelect.appendChild(option);
        });
        // ステータス変更イベントリスナー
        statusSelect.addEventListener('change', () => {
            tasks.setStatus(taskId, statusSelect.value);
        });
        li.appendChild(textSpan);
        li.appendChild(statusSelect);
        taskListElement.appendChild(li);
    }
    // タスク追加イベントの処理
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const task = new Task(taskInput.value);
            const taskId = tasks.addTask(task); // タスクを追加し、taskIdを受け取る
            taskInput.value = ''; // 入力フィールドをクリア
            displayTask(taskId, task); // タスクを表示
        }
    });
});
