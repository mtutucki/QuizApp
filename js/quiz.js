let $question;
let $anwersButtons;
let $firstAnswerBtn;
let $secondAnsweBtn;
let $counter =0;
let $checkBtn;
let $nextBtn;
let $points = 0;


const prepareDOMElements = () => {
    $question = document.body.querySelector(".question"); 
    $firstAnswerBtn = document.body.querySelector(".answerFirst");
    $secondAnsweBtn = document.body.querySelector(".answerSecond");
    $checkBtn = document.body.querySelector(".checkBtn");
    $anwersButtons = document.body.querySelector(".anwers");
    $nextBtn = document.body.querySelector(".nextBtn");
}

const prepareDOMEvents = () => {
    $anwersButtons.addEventListener("click", whichButtonWasClicked);
    $checkBtn.addEventListener("click", checkAnswer);
    $nextBtn.addEventListener("click", startGame);
}

const startGame = () => {
    class Quiz {
        constructor (question, firstAnswer, secondAnswer){
            this.question = question;
            this.firstAnswer = firstAnswer;
            this.secondAnswer = secondAnswer;
        }
    }
    const firstQuiz = new Quiz("Najlepszy klub w Premier League?", "Manchester United", "Arsenal Londyn");
    const secondQuiz = new Quiz("JavaScript jest językiem typowanym", "dynamicznie!", "Statycznie");
    const thirdQuiz = new Quiz("Jak nazywa się trzeci odcinek gry o tron", "lord snow","Winter is coming");
    const fourthQuiz = new Quiz("Najnowsza produkcja studia CD PROJECT RED", "cyberpunk 2077", "Wiedźmin 3");
    const fifthQuiz = new Quiz("W którym roku zatonął titanic?", "1912", "1921")

    const questions = [firstQuiz,secondQuiz,thirdQuiz,fourthQuiz,fifthQuiz];

    if ($counter<questions.length)
    {
        for (let i=0; i<=$counter; i++){
            resetButtons();
            $question.innerHTML = questions[i].question;
            $firstAnswerBtn.innerHTML = questions[i].firstAnswer;
            $secondAnsweBtn.innerHTML = questions[i].secondAnswer;
        }
    }
    
    else if ($counter >= questions.length) {
        endGame();
    }
}

const endGame = () => {
            $question.innerHTML = `Twój wynik to: ${$points} / 5`;
            $firstAnswerBtn.style.display = "none";
            $secondAnsweBtn.style.display = "none";
            endGameButton();
}

const endGameButton = () => {
        $nextBtn.innerHTML = "Spróbuj jeszcze raz";
        $counter = 0;
        $points = 0;
}

const resetButtons = () => {
    $firstAnswerBtn.classList.remove("choosedBtn");
    $firstAnswerBtn.classList.add("btn");
    $firstAnswerBtn.style.backgroundColor = "";
    $firstAnswerBtn.style.display = "block";
    $secondAnsweBtn.classList.remove("choosedBtn");
    $secondAnsweBtn.classList.add("btn");
    $secondAnsweBtn.style.backgroundColor = "";
    $secondAnsweBtn.style.display = "block";
    $nextBtn.style.display = "none";
    $checkBtn.style.display = "block";
    $nextBtn.innerHTML = "dalej";
}

const whichButtonWasClicked = (e) => {
        if (e.target.closest("button").classList.contains("answerFirst") ){
            e.target.closest("button").classList.toggle("choosedBtn");
            e.target.closest("button").classList.toggle("btn");
            $secondAnsweBtn.classList.remove("choosedBtn");
            $secondAnsweBtn.classList.add("btn");
        }
        else if (e.target.closest("button").classList.contains("answerSecond") ){
            e.target.closest("button").classList.toggle("choosedBtn");
            e.target.closest("button").classList.toggle("btn");
            $firstAnswerBtn.classList.remove("choosedBtn");
            $firstAnswerBtn.classList.add("btn");
        }
}

const checkAnswer = () => {
    if ($firstAnswerBtn.classList.contains("choosedBtn")){
        $counter++;
        $points++;
        $firstAnswerBtn.style.backgroundColor = "rgba(11, 175, 60, 0.815)";
        showNextQuestion();
    }
    else if ($secondAnsweBtn.classList.contains("choosedBtn")){
        $counter++;
        $secondAnsweBtn.style.backgroundColor = "rgba(201, 18, 18, 0.582)";
        showNextQuestion();
    }

    
}

const showNextQuestion = () => {
    $checkBtn.style.display = "none";
    $nextBtn.style.display = "block";
}

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    startGame();
}
addEventListener("DOMContentLoaded", main);





