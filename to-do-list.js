document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        
        const listItem = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        span.addEventListener('click', toggleComplete);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(span);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function deleteTask(e) {
    const listItem = e.target.parentElement;
    listItem.remove();
}

function toggleComplete(e) {
    const listItem = e.target.parentElement;
    listItem.classList.toggle('completed');
}
