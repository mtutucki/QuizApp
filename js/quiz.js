let $question;
let $anwersButtons;
let $firstAnswerBtn;
let $secondAnsweBtn;
let $counter = 4;
let $anwerCounter = 0;
let $checkBtn;
const prepareDOMElements = () => {
    $question = document.body.querySelector(".question"); 
    $firstAnswerBtn = document.body.querySelector(".answerFirst");
    $secondAnsweBtn = document.body.querySelector(".answerSecond");
    $checkBtn = document.body.querySelector(".checkBtn");
    $anwersButtons = document.body.querySelector(".anwers");
}

const prepareDOMEvents = () => {
    $anwersButtons.addEventListener("click", whichButtonWasClicked);
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

    $question.innerHTML = questions[0].question;
    $firstAnswerBtn.innerHTML = questions[0].firstAnswer;
    $secondAnsweBtn.innerHTML = questions[0].secondAnswer;

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



const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    startGame();
}
addEventListener("DOMContentLoaded", main);





