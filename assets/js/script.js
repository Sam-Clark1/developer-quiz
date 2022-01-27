var main = document.querySelector("#main-page");
var questions = [    
{
    question: "pog",
    optionA: "poggers",
    optionB: "pog",
    optionC: "pog",
    optionD: "pog",
},
{
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
},
{
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
}
]
 
var lastQuestion = questions.length - 1;
var currentQuestion = 0;
 
// var displayQuestion = function() {
//     var ques = questions[currentQuestion]
 
//     questions.innerHMTL = "<p>" + ques.question+"</p>";
// }
 
var deleteMain = function() {
    var intro = document.querySelector("#intro");
    var beginBtn = document.querySelector("#begin-btn-box" );
    intro.style.display = "none";
    beginBtn.style.display = "none";
   
    var title = document.querySelector(".h1");
    title.innerHTML = questions[0].question;
 
    var questionBlock = document.createElement("div")
    questionBlock.className = "code-block"
    main.appendChild(questionBlock);
 
    var optionBlock = document.createElement("ol");
    questionBlock.appendChild(optionBlock);
 
   
    var option1 = document.createElement("li");
    option1.textContent = "pog" ;
    optionBlock.appendChild(option1);
}
 
document.querySelector(".begin-btn").addEventListener("click", deleteMain)
 
