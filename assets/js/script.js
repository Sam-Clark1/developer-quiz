var mainPage = document.querySelector("#main-page");
var header = document.querySelector("#header");
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
var beginBtn = document.querySelector(".begin-btn")
var qStatusBox = document.querySelector("#q-status-box");
var qBreak = document.querySelector("#q-break");
var qStatus = document.querySelector("#q-status");
var timerBox = document.querySelector("#timer-box");
var timer = document.querySelector("#timer");
var highScoreBox = document.querySelector("#high-score-box");
var highScore = document.querySelector("#high-score");
 
var index = 0;
var timeLeft = 75;
 
var questions = [    
{
    question: "HTML stands for -",
    options: {
    A: "HighText Machine Language",
    B: "HyperText and links Markup Language",
    C: "HyperText Markup Language",
    D: "None of these",
    },
    correct: "A"
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
    correct: "B"
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
 
var begin = function() {
    intro.style.display = "none";
    beginBtnBox.style.display = "none";
    listBox.style.display = "block";
    countdown();
    nextQuestion();
   
}
 
var countdown = function () {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timer.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timer.textContent = timeLeft;
        timeLeft--;
      } else {
        timer.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
 
var nextQuestion = function() {
    // index++
    // h1.textContent = questions[index].question;
    // h1.className = "question-asked"
    // optionA.textContent = questions[index].optionA;
    // optionB.textContent = questions[index].optionB;
    // optionC.textContent = questions[index].optionC;
    // optionD.textContent = questions[index].optionD;
    // header.appendChild(h1);
    // optionListA.appendChild(optionA);
    // optionListB.appendChild(optionB);
    // optionListC.appendChild(optionC);
    // optionListD.appendChild(optionD);
   
}
 
beginBtn.addEventListener("click", begin)
// optionA.addEventListener("click", nextQuestion)
// highScore.addEventListener("click", begin)
 
 
 
 
 
// Data Attributes
// var container = document.querySelector(".container");
 
// container.addEventListener("click", function(event) {
//   var element = event.target;
 
//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");
 
//     // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//       // If the card is clicked while the state is "hidden", we set .textContent to the number
//       element.textContent = element.dataset.number;
//       // Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
//       // 'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
//       // Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
//     }  
//   }
// });
 
// Local Storage
// var firstNameInput = document.querySelector("#first-name");
// var lastNameInput = document.querySelector("#last-name");
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
 
// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();
 
//   // create user object from submission
//   var user = {
//     firstName: firstNameInput.value.trim(),
//     lastName: lastNameInput.value.trim(),
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim()
//   };
//   // set new submission to local storage
//   localStorage.setItem("user", JSON.stringify(user));
 
