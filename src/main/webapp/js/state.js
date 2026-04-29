const API_URL = "http://localhost.8080/TasksAPI/api/task"

export let tasks = [];


export const fetchTasks= async ()=>{
    const response = await fetch(API_URL);
    tasks=await response.json();
    return tasks;
};

//Añadir tarea
export const addTask = (text) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text, completed: false })
    });

    const task = await response.json();
    tasks.push(task);
    return tasks;
};

//borrar tarea
export const deleteTask = (text) => {
    const response = await fetch(API_URL, {
        method: 'DELETE'
    });

    tasks = tasks.filter(t => t.id !== id);
    return tasks;
}

// PUT Alternan
export const toggleTask = (id) => {

    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const updatedTask = { ...task, completed: !task.completed };

    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedTask })
    });

    const savedTask = await response.json();
    task.completed = savedTask.completed;
    return tasks;
}


//Editar tarea
export const editTask = (id, newTask) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const updatedTask = { ...task, text: newText };

    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedTask })
    });
    const savedTask = await response.json();
    task.completed = savedTask.completed;
    return tasks;
    // if (task) task.text = newTask;
}