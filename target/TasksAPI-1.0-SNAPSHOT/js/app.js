import * as state from "./state.js"
import * as ui from "./uiiii/ui.js"


document.addEventListener('DOMContentLoader', () => {
    const input = document.querySelector('taskInput');
    const addBtn = document.getElementById('addBtn');
    const list = document.getElementById("taskList");

    const tasks = await state.fetchTasks;
    ui.render(tasks);


    addBtn.addEventListener('click', async() => {
        if (!input.value.trim()) return;
        state.addTask(input.value());
        input.value = "";
        ui.render(state.tasks);

    });

    input.addEventListener('keydown', async(e) => {
        if (e.key == 'Enter') addTask();
    })

    list.addEventListener('click', (e) => {
        const id = parseInt(e.target.closest('li').dataset.id);

        if (e.target.classList.contains('btn-delete')) {
            state.deleteTask(id);
            return;
        }

        if (e.target.classList.contains('btn-edit')) {
            const task = tasks.find(t => t.id === id);
            const newText = prompt("Editar: ", task.text);
            if (newText) state.editTask(id, newText);
            return;
        }

        if (e.target.tagName !== 'BUTTON') {
            state.toggleTask();
        }

        ui.render(state.tasks);
    });
});
