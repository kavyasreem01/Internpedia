document.getElementById("addTaskBtn").addEventListener("click", addTask);

let pendingTasks = [];
let completedTasks = [];

function updateUI() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");

    // Clear previous lists
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    // Display pending tasks
    pendingTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} 
        <button class="complete" onclick="completeTask(${index})">✔</button>
        <button class="edit" onclick="editTask(${index})">✎</button>
        <button class="delete" onclick="deleteTask(${index})">🗑</button>`;
        pendingTasksList.appendChild(li);
    });

    // Display completed tasks
    completedTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} 
        <button class="delete" onclick="deleteCompletedTask(${index})">🗑</button>`;
        completedTasksList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task) {
        pendingTasks.push(task);
        taskInput.value = ""; // Clear input
        updateUI();
    }
}

function completeTask(index) {
    const task = pendingTasks.splice(index, 1)[0];
    completedTasks.push(task);
    updateUI();
}

function deleteTask(index) {
    pendingTasks.splice(index, 1);
    updateUI();
}

function deleteCompletedTask(index) {
    completedTasks.splice(index, 1);
    updateUI();
}

function editTask(index) {
    const newTask = prompt("Edit your task:", pendingTasks[index]);

    if (newTask) {
        pendingTasks[index] = newTask;
        updateUI();
    }
}
