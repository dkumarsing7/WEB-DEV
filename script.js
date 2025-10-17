const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const text = document.querySelector("input");

btn.addEventListener("click", () => {
    const inputText = text.value;
    if (!inputText) return;

    text.value = ''
    const task = document.createElement("div")
    task.classList.add('task')
    ul.appendChild(task)

    const checkBox = document.createElement("div")
    checkBox.classList.add('checkBox')
    task.appendChild(checkBox)

    const content = document.createElement("div")
    content.classList.add('content')
    content.textContent = inputText;
    task.appendChild(content)



    const close = document.createElement("div")
    close.classList.add('close');
    close.textContent = 'X'

    done = false;
    task.addEventListener("click", () => {
        if (!done) {
            content.style.textDecoration = 'line-through'
            checkBox.style.background = "lightgreen";
            task.style.background = "lightgrey";
            close.style.display = "none";
        } else {
            content.style.textDecoration = 'line-through'
            checkBox.style.background = "lightgreen";
            task.style.background = "lightgrey";
            close.style.display = "none";
        }
    });

    task.appendChild(close);
    close.addEventListener("click", () => {
        task.remove();
    });


});