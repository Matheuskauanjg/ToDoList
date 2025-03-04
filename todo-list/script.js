function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const taskList = document.getElementById('task-list');
    
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
}
