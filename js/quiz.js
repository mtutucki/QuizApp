// declaring global variables
let $question;
let $anwersButtons;
let $firstAnswerBtn;
let $secondAnsweBtn;
let $counter =0;
let $checkBtn;
let $nextBtn;
let $points = 0;
const $goodAnswerColor = "rgba(11, 175, 60, 0.815)";
const $badAnswerColor = "rgba(201, 18, 18, 0.582)";

// declaring global variables
const prepareDOMElements = () => {
    $question = document.body.querySelector(".question"); 
    $firstAnswerBtn = document.body.querySelector(".answerFirst");
    $secondAnsweBtn = document.body.querySelector(".answerSecond");
    $checkBtn = document.body.querySelector(".checkBtn");
    $anwersButtons = document.body.querySelector(".anwers");
    $nextBtn = document.body.querySelector(".nextBtn");
}

// events for quiz
const prepareDOMEvents = () => {
    $anwersButtons.addEventListener("click", whichButtonWasClicked);
    $checkBtn.addEventListener("click", checkAnswer);
    $nextBtn.addEventListener("click", startGame);
}

// check which button user choose
// if user choose one then button get style for active button
// when user try another button then remove active style from previous
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

// set check answer button invisible and analogously for next question button
const showNextQuestion = () => {
    $checkBtn.style.display = "none";
    $nextBtn.style.display = "block";
}

// this function send to check answer button listener
// if user choose god answer then button style = good answer = green
// if user choose bad answer then button style = bad answer = red
// then call out showNextQuestion function
const checkAnswer = (e) => {
    if ($firstAnswerBtn.classList.contains("choosedBtn")){
        $counter++;
        $points++;
        $firstAnswerBtn.style.backgroundColor = $goodAnswerColor;
        showNextQuestion();
    }
    else if ($secondAnsweBtn.classList.contains("choosedBtn")){
        $counter++;
        $secondAnsweBtn.style.backgroundColor = $badAnswerColor;
        showNextQuestion();
    }
}

// function for shuffle answers buttons. 
// create 2 variable and init then with random numbers from 1 to 2
// when variables are same then flex order is set to -1 
// this causes that second button sometimes set as first 
const shuffleAnswer = () => {
    const min = 0;
    const max = 3;
    const firstRandom = (Math.floor(Math.random() * (max - min)) + min);
    const secondRandom = (Math.floor(Math.random() * (max - min)) + min);
    const secondAnswer = document.body.querySelector(".answerSecond");

    if (firstRandom == secondRandom){
        secondAnswer.style.order = "-1"
    }
    else{
        secondAnswer.style.order = "0";
    }
}

// when user click next question then are of styles has to be reset to default
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

// set text inside button to "try again" and reset counter and points
const endGameButton = () => {
    $nextBtn.innerHTML = "Spróbuj jeszcze raz";
    $counter = 0;
    $points = 0;
}

// show earned points and hide buttons except "try again"
const endGame = () => {
    $question.innerHTML = `Twój wynik to: ${$points} / 5`;
    $firstAnswerBtn.style.display = "none";
    $secondAnsweBtn.style.display = "none";
    endGameButton();
}

// main function of app
// here all of questions are created, then they are convert to objects
// question array stores Quiz objects
// if counter is less than questions lengts then next question show up
// else it show endGame function
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
            shuffleAnswer()
        }
    }
    
    else if ($counter >= questions.length) {
        endGame();
    }
}

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    startGame();
}
addEventListener("DOMContentLoaded", main);





