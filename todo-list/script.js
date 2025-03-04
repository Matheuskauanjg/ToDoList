function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const taskList = document.getElementById('task-list');
    
    // Criar item de tarefa
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    // Criar botão de excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Adicionar botão de excluir ao item
    listItem.appendChild(deleteButton);

    // Adicionar tarefa à lista
    taskList.appendChild(listItem);

    // Limpar input
    taskInput.value = '';
}
