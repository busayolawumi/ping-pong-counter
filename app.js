const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#p1score'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#p2score'),
}


const resetbtn = document.querySelector('#resetbtn');
const gamePoint = document.querySelector('#gamepoint');
let gamePointValue = 3;
let isGameOver = false;

p1.display.innerText = p1.score;
p2.display.innerText = p2.score;

function updateScores(home, away) {
    if (!isGameOver) {
        home.score += 1;
        if (home.score === gamePointValue) {
            isGameOver = true;
            home.display.classList.add('has-text-success');
            away.display.classList.add('has-text-danger');
            home.button.disabled = true;
            away.button.disabled = true;
        }
        home.display.innerText = home.score;
    }
}

p1btn.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2btn.addEventListener('click', function() {
    updateScores(p2, p1);
});

resetbtn.addEventListener('click', reset);

gamePoint.addEventListener('change', function() {
    gamePointValue = parseInt(this.value);
    reset();
});

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

// p2.score = 0;
// p2.display.innerText = p2.score;
// p2score.classList.remove('has-text-success', 'has-text-danger');
// p2btn.disabled = false;