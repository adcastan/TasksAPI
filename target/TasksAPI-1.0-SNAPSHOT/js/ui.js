const list = document.getElementById('taskList');

export const render = (tasks) => {
    list.innerHTML = "";
    tasks.forEach(t => {
        //crear elemento li

        //clase para saber si esta completaada
        li.className = `task-item ${t.complete ? `complete` : ``}`

        //guardar ID
        li.dataset.id = t.id;
        li.innerHTML = `
        <span>${t.text}</span>
        <div class="actions">
            <button class="btn-add">+</button>
            <button class="btn-edit">/</button>
            <button class="btn-delete">x</button>
        </div>`;

        list.appendChild(li);
    });
};