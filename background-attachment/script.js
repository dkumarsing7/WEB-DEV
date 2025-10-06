const d = document.querySelector(".Dragon")

document.addEventListener("keydown", function(e) {
    if (e.key == " ") {
        d.classList.add("jump")
    }
})

d.addEventListener("animationend", () => {
    d.classList.remove("jump")
})