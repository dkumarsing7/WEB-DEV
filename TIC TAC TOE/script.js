const boxes = document.querySelectorAll(".box");
const winner = document.querySelector("#winner");
const blur = document.querySelector(".blur");
const resetBtn = document.querySelector(".reset-btn");
const game = document.querySelector(".game");
const o = document.querySelector("#o");
const x = document.querySelector("#x");
const oo = document.querySelector("#oo");
const xx = document.querySelector("#xx");

let oScore = 0
let xScore = 0
let turn0 = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function reset() {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
        winner.innerText = '';
        turn0 = true;
    })
};

function grow() {
    let scale = 1.5;
    if (x.textContent > o.textContent) {
        xx.style.transform = `scale(${scale})`;
        x.style.transform = `scale(${scale})`;
    } else {
        oo.style.transform = `scale(${scale})`;
        o.style.transform = `scale(${scale}))`;
    }
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        const a = boxes[pattern[0]].textContent;
        const b = boxes[pattern[1]].textContent;
        const c = boxes[pattern[2]].textContent;
        if (a != '' && b != '' && c != '') {
            if (a === b && b === c) {
                grow();
                blur.classList.remove("hide");
                winner.textContent = `Winner is ${a}`;
                if (a === 'X') {
                    x.textContent = ++xScore;
                    winner.style.color = '#b0413e';
                } else {
                    o.textContent = ++oScore;
                    winner.style.color = 'rgb(8 94 8)';
                }
                boxes.forEach(box => {
                    box.disabled = true;
                });

            }
        }
    }
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.textContent = "O";
            box.style.color = 'rgb(2 90 2)';
            // box.style.border = "10px solid rgb(8 94 8)";
            turn0 = false;
        } else {
            box.textContent = "X";
            box.style.color = '#b0413e'
                // box.style.border = "10px solid #b0413e";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

    });
});

resetBtn.addEventListener("click", reset);

blur.addEventListener('click', () => {
    blur.classList.add("hide");
    reset();
});