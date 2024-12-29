const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-add-task');
const taskList = document.querySelector('.task-list');

function createTask(taskInput) {
    const li = document.createElement('li');
    li.innerHTML = taskInput;
    taskList.appendChild(li);
    createButtonDelete(li);
    saveTasks();
}
function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}
function addTask(taskInput) {
    createTask(taskInput);
    clearInput();
}

function createButtonDelete(li) {
    li.innerHTML += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Apagar';
    btnDelete.setAttribute('class', 'btn-delete');
    btnDelete.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(btnDelete);
}

inputTask.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && inputTask.value) {
        if (!inputTask.value) return;
        addTask(inputTask.value);
    }
});

btnAddTask.addEventListener('click', function(e) {
    if (!inputTask.value) return;
    addTask(inputTask.value);
    clearInput();
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('btn-delete')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = taskList.querySelectorAll('li');
    const tasks = [];
    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        tasks.push(taskText);
    }
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksJSON = JSON.parse(tasks);
    for (let task of tasksJSON) {
        createTask(task);
    }
}

loadTasks();