var startgameDiv = document.querySelector("#startgameDIV");
var startgamebtn = document.querySelector("#startgame");
var highscorebtn = document.querySelector("#highscore");
var questionDiv = document.querySelector("#questiondiv");
var timecount = document.querySelector("#timecount");
var questionEl = document.querySelector("#questionmessage");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var answerDiv = document.querySelector("#displaymessage")
var answermessage = document.querySelector("#correct-answer")
var enterinitialDiv = document.querySelector("#enterinitial")
var displaypoint = document.querySelector("#displaypoint")
var inputinitial = document.querySelector("#inputvalue")
var savescoreBTN = document.querySelector("#savescore")
var displayinfoDIV = document.querySelector("#displayinfo")
var scoreinitial = document.querySelector("#highscore-inital")
var highscoreValue = document.querySelector("#highscore-score")
var playagainBTN = document.querySelector("#playagain")
var clearscore = document.querySelector("#clearscore")
var remainsecond = document.querySelector("#remainsecond")

var quizquestion = [{
        question:"How many elements can you appply and 'ID' attribute to ?_______",
        choiceA: "a. As many as you want",
        ChoiceB: "b. 3",
        choiceC: "c. 1",
        choiceD: "d. 128",
        correctanswer: "c",
    },
    {
        question: "whats does 'DOM' stand for?_______",
        choiceA: "1. Document Object Model",
        ChoiceB: "2. Display Object Management",
        choiceC: "3. Digital Ordinance Model",
        choiceD: "4. Desktop Oriented Mode",
        correctanswer: "a",
    },
    {
        question: "What is used primarily to add styling to a web page?______",
        choiceA: "1. HTML",
        ChoiceB: "2. CSS",
        choiceC: "3. python",
        choiceD: "4. React.js",
        correctanswer: "b",
    },
    {
        question:" What HTML tag are Javascript code wrapped in?_______",
        choiceA: "1. &lt;div&gt;",
        ChoiceB: "2. &lt;link&gt",
        choiceC: "3. &lt;head&gt;",
        choiceD: "4. &lt;,script&gt",
        correctanswer:"d",
    },
    {
        question: "when is localStorage data cleared?_______",
        choiceA: "1. No expiration time",
        ChoiceB: "2. On page reload",
        choiceC: "3. On browser close",
        choiceD: "4. On computer restart",
        correctanswer: "a"
    },
    {
        question: "what HTML attibute reference an external Javascript file?_____",
        choiceA: "1. href",
        ChoiceB: "2. src",
        choiceC: "3. class",
        choiceD: "4. index",
        correctanswer: "b"
    },
    {
        question: "what does 'WWW' stand for?_____",
        choiceA: "1. Web World Workings",
        ChoiceB: "2. Weak Winter Wind",
        choiceC: "3. World Wide Web",
        choiceD: "4. Wendy Wants Waffle",
        correctanswer: "c"

    }
]

var secondleft = 60;
var currentquestionindex = 0
var questionlenght = quizquestion.length
var timerinterval

console.log(quizquestion)


function quizquestiontag(){
    enterinitialDiv.style.display = "none";
    if(currentquestionindex === questionlenght){
        showscore()
    }
    var currentquestion = quizquestion[currentquestionindex]
    questionEl.innerHTML = currentquestion.question
    buttonA.innerHTML = currentquestion.choiceA
    buttonB.innerHTML = currentquestion.ChoiceB
    buttonC.innerHTML = currentquestion.choiceC
    buttonD.innerHTML = currentquestion.choiceD
}
quizquestiontag()

function settimer(){
    secondleft = 60
timerinterval = setInterval(function(){
    secondleft--;
    if(secondleft === 3){
        remainsecond.textContent = "Seconds Left"
    }
        if(secondleft === 0){
            clearInterval(timerinterval)
            showscore()
        }
    
    timecount.innerHTML =  secondleft  
},1000)
}
settimer()