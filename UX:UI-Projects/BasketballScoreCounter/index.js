let countEl = document.getElementById("count-el")
let countEl2 = document.getElementById("count-el2")
let resetButton = document.getElementById("reset-btn")
let count = 0

function increment1() {
    count += 1
    countEl.textContent = count
}

function increment2() {
    count += 2
    countEl.textContent = count
}

function increment3() {
    count += 3
    countEl.textContent = count
}

function increment4() {
    count += 1
    countEl2.textContent = count
}

function increment5() {
    count += 2
    countEl2.textContent = count
}

function increment6() {
    count += 3
    countEl2.textContent = count
}


function reset() {
    countEl.textContent = 0
    countEl2.textContent = 0
    count = 0
}