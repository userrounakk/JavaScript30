const addTasks = document.querySelector('#add-task');
const newTask = document.querySelector('#new-task');
const tasksList = document.querySelector('#tasks-list');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];




addTasks.addEventListener('submit', addTask);
tasksList, addEventListener('click', checked);



showTasks();

function addTask(e) {
    e.preventDefault();
    if (newTask.value == '') return;
    tasks.push({
        task: newTask.value,
        isCompleted: false,
    });
    showTasks();
    this.reset();
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showTasks(e) {
    var allTasks = tasks.map((task, index) => {
        return `
        <li class="task" index="${index}">
            <div class="content">
                <input type="checkbox" ${task.isCompleted ? 'checked' : ''} id="task-${index}" index="${index}">
                <label for="task-${index}">${task.task}</label>
            </div>
            <button id="delete"><i class="fa fa-trash" aria-hidden="true" onclick="deleteTask(${index})"></i></button>
        </li>`
    }).join('');
    tasksList.innerHTML = allTasks;
}

function checked(e) {
    if (e.target['type'] != 'checkbox') return
    let index = e.target.getAttribute('index');
    if (tasks[index].isCompleted) {
        tasks[index].isCompleted = false;
    } else {
        tasks[index].isCompleted = true;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTasks();
}
