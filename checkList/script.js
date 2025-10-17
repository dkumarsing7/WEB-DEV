const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const text = document.querySelector("input");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const isFirstLaunch = !localStorage.getItem("initialized");

if (isFirstLaunch) {
    tasks.push({ text: "YOUR DATA WILL AUTOMATICALLY SAVED HERE", done: false });
    tasks.push({ text: "WEEKLY UPDATE BY DEVELOPER FOR BEST USER EXPERIENCES", done: false });
    tasks.push({ text: "SAMPLE TASK", done: false });
    tasks.push({ text: "21 OCT DRIVE", done: false });
    tasks.push({ text: "PRACTICE PYTHON", done: false });
    tasks.push({ text: "APTITUDE WORK PROBLEM", done: false });
    tasks.push({ text: "APTITUDE BLOOD RELATION PROBLEM", done: false });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("initialized", "true");
}

function renderTasks() {
    ul.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (task.done) taskDiv.style.background = "lightgrey";

        const checkBox = document.createElement("div");
        checkBox.classList.add("checkBox");
        if (task.done) checkBox.style.background = "lightgreen";

        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = task.text;
        if (task.done) content.style.textDecoration = "line-through";

        const close = document.createElement("div");
        close.classList.add("close");
        close.textContent = "X";

        taskDiv.addEventListener("click", () => {
            task.done = !task.done;
            saveTasks();
            renderTasks();
        });

        close.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(content);
        taskDiv.appendChild(close);
        ul.appendChild(taskDiv);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

btn.addEventListener("click", () => {
    const inputText = text.value.trim();
    if (!inputText) return;

    tasks.push({ text: inputText, done: false });
    text.value = "";
    saveTasks();
    renderTasks();
});

renderTasks();