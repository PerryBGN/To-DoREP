document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var BotonAgregar = document.getElementById('addTaskButton');
    var taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            var listItem = document.createElement('li');

            var taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);

            var completeButton = document.createElement('button');
            completeButton.textContent = 'Completar';
            completeButton.className = 'complete';
            completeButton.addEventListener('click', function() {
                listItem.classList.toggle('completed');
            });
            listItem.appendChild(completeButton);

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});