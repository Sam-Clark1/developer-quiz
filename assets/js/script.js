// All HTML id's and class's selected
var mainPage = document.querySelector("#main-page");
var h1 = document.querySelector(".h1");
var questionOptions = document.querySelector("#question-options");
var intro = document.querySelector("#intro");
var listBox = document.querySelector("#list-box");
var optionListA = document.querySelector(".option-list-A")
var optionListB = document.querySelector(".option-list-B")
var optionListC = document.querySelector(".option-list-C")
var optionListD = document.querySelector(".option-list-D")
var optionA = document.querySelector(".option-A");
var optionB = document.querySelector(".option-B");
var optionC = document.querySelector(".option-C");
var optionD = document.querySelector(".option-D");
var beginBtnBox = document.querySelector("#begin-btn-box" );
var beginBtn = document.querySelector("#begin-btn")
var qStatusBox = document.querySelector("#q-status-box");
var qBreak = document.querySelector("#q-break");
var qStatus = document.querySelector("#q-status");
var timerBox = document.querySelector("#timer-box");
var timer = document.querySelector("#timer");
var highScoreBox = document.querySelector("#high-score-box");
var highScore = document.querySelector("#high-score");
var highScoreDisplay = document.querySelector("#highScoreDisplay");
var initialsForm = document.querySelector("#initials-form");
var initials = document.querySelector("#initials");
var initialsSubmit = document.querySelector("#initials-submit");
var restartBtnBox = document.querySelector("#restart-btn-box");
var restartBtn = document.querySelector("#restart-btn");

// List of questions
var questions = [    
{
    question: "HTML stands for -",
    A: "HighText Machine Language",
    B: "HyperText and links Markup Language",
    C: "HyperText Markup Language",
    D: "None of these",
    correct: "C"
},
{
    question: "The correct sequence of HTML tags for starting a webpage is - ",
    A: "Head, Title, HTML, body",
    B: "HTML, Body, Title, Head",
    C: "HTML, Head, Title, Body",
    D: "HTML, Head, Title, Body",
    correct: "D"
},
{
    question: "The property in CSS used to change the background color of an element is -",
    A: "bgcolor",
    B: "color",
    C: "background-color",
    D: "All of the above",
    correct: "C"
},
{
    question: "Which built-in method returns the character at the specified index?",
    A: "characterAt()",
    B: "getCharAt()",
    C: "charAt()",
    D: "None of the above.",
    correct: "C"
},
{
    question: "Which built-in method returns the calling string value converted to lower case?",
    A: "toLowerCase()",
    B: "toLower()",
    C: "changeCase(case)",
    D: "None of the above.",
    correct: "A"
},
]
// variables used throughout
var currentQ = 0;
var lastQ = questions.length - 1;
var timeLeft = 75; 
var timeCount;
var scoreIdCounter = 0;
var scoreList = []

// begins timer and starts question generation process
var begin = function() {
    intro.style.display = "none";
    beginBtnBox.style.display = "none";
    highScoreBox.style.display = "none";
    listBox.style.display = "block";
    nextQuestion();
    timeCount = setInterval(countdown,1000);
}
 
// timer function
var countdown = function () {
      if (timeLeft > 1) {
        timer.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timer.textContent = timeLeft;
        timeLeft--;
      } else {
        timer.textContent = '';
        clearInterval(timeCount);
        postQuizHSPage();
      }
  }

// displays questions based on the questions array index
var nextQuestion = function() {
    optionA.style.display = "block";
    optionB.style.display = "block";
    optionC.style.display = "block";
    optionD.style.display = "block"; 
    qStatusBox.style.display = "block";
    timerBox.style.display = "block";
    
    var q = questions[currentQ];
    h1.innerHTML = q.question;
    h1.className = "question-asked"
    optionA.innerHTML = q.A;
    optionB.innerHTML = q.B;
    optionC.innerHTML = q.C;
    optionD.innerHTML = q.D;
}
 
// when html buttons clicked, checks to see if answer matches answer in question object in questions array
function checkAnswer(answer){
    if( answer == questions[currentQ].correct){
        correctAnswer();
    }else{
        incorrectAnswer();
    }
    if(currentQ < lastQ){
        currentQ++;
        nextQuestion();
    }else{
        clearInterval(timeCount);
        postQuizHSPage();
    }}

// indicator if you chose correct answer 
function correctAnswer(){
    qStatusBox.style.display = "block"
    qStatus.innerHTML = "Correct";
}

// indicator if you chose incorrect answer and subtracts time 
function incorrectAnswer(){
    timeLeft -= 10;
    qStatusBox.style.display = "block";
    qStatus.innerHTML = "Incorrect";
}

// shows your score and allows input of initials to be stored as high scores
var postQuizHSPage = function() {
optionA.style.display = "none";
 optionB.style.display = "none";
 optionC.style.display = "none";
 optionD.style.display = "none"; 
 qStatusBox.style.display = "none";
 timerBox.style.display = "none";
 initialsForm.style.display = "block";

h1.textContent = `Finished! Your score was ${timeLeft}. Enter your initials.`;
h1.className = "h1";
}

// handles the input of initials and score. Puts them into an object 
var initialsFormHandler = function (event) {
    event.preventDefault();
    var initialsInput = document.querySelector("input[name='initials']").value;
    if (!initialsInput) {
        alert("You need to input your initials!");
        return false;
    } 
    document.querySelector("input[name='initials']").value = "";
    var scorePackage = {
        initials: initialsInput,
        score: timeLeft
    }
    createHighScoreEl(scorePackage);
}

// uses created object to create a visual list of score
var createHighScoreEl = function(scorePackage) {
    h1.textContent = "Your Score";
    initialsForm.style.display = "none";
    restartBtnBox.style.display = "block";
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "high-score-item";
    listItemEl.setAttribute("data-task-id", scoreIdCounter);

    var listContentEl = document.createElement("div");
    listContentEl.className = "high-score-div";
    listContentEl.innerHTML = "<h3>" + scorePackage.initials + "<br>" + scorePackage.score + "</h3>";
    
    listItemEl.appendChild(listContentEl);
    highScoreDisplay.style.display = "block";
    highScoreDisplay.appendChild(listItemEl);

    scorePackage.id = scoreIdCounter;
    scoreList.push(scorePackage);
    saveTasks();
    scoreIdCounter++;
}

// displays all stored scores when high score button is pressed
var retrieveHSListEl = function(savedScores){
    h1.textContent = "High Scores"
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "high-score-item";
    listItemEl.setAttribute("data-task-id", scoreIdCounter);

    var listContentEl = document.createElement("div");
    listContentEl.className = "high-score-div";
    listContentEl.innerHTML = "<h3>" + savedScores.initials + "<br>" + savedScores.score + "</h3>";
    listItemEl.appendChild(listContentEl);
    highScoreDisplay.style.display = "block";
    highScoreDisplay.appendChild(listItemEl);

}

// saves score and initials object to local storage
var saveTasks = function() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
  };
 
//   calls function to display all locally stored score objects
var loadTasks = function() {
    var savedScores = localStorage.getItem("scoreList");
    if (!savedScores) {
      return false;
    }
    savedScores = JSON.parse(savedScores);
    for (var i = 0; i < savedScores.length; i++) {
        retrieveHSListEl(savedScores[i]);
    }
  };
  
// when high score button is pressed, displays all logged scores
var displayHSPage = function() {
    highScoreDisplay.style.display = "block";
    restartBtnBox.style.display = "block";
    intro.style.display = "none";
    beginBtnBox.style.display = "none";
    highScoreBox.style.display = "none";
    loadTasks();
}

// brings you back to main menu so you can take quiz again
var displayMainMenu = function() {
    h1.textContent = "Web Developer Quiz";
    intro.style.display = "block";
    beginBtnBox.style.display = "block";
    highScoreBox.style.display = "block";
    highScoreDisplay.style.display = "none";
    restartBtnBox.style.display = "none";
    // removes all list items so they arent duplicated when called from high score button
    highScoreDisplay.innerHTML = "";
    // resets index # used to call questions so quiz can be taken again.
    if (currentQ > 0) {
        currentQ -= lastQ;
    }
    timeLeft = 75;
}

// starts quiz
beginBtn.addEventListener("click", begin)
// shows locally stored high scores
highScore.addEventListener("click", displayHSPage);
// takes you back to main menu so quiz can be taken again
restartBtn.addEventListener("click", displayMainMenu);
// creates list item of score and stores it locally
initialsForm.addEventListener("submit", initialsFormHandler);