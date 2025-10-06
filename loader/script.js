const btn = document.getElementById("toggle-btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        btn.innerHTML = "🌜Dark mode";
    } else {
        btn.innerHTML = "🌞Light mode";
    }
});