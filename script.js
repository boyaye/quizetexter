var startgameDiv = document.querySelector("#startgameDIV");
var startgamebtn = document.querySelector("#startgame");
var highscorebtn = document.querySelector("#highscorecheck");
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
var savescorebtn = document.querySelector("#savescore")
var displayinfoDIV = document.querySelector("#highscore")
var scoreinitial = document.querySelector("#initiallist")
var highscoreValue = document.querySelector("#highscorelist")
var playagainBTN = document.querySelector("#playagain")
var clearscore = document.querySelector("#clearscore")
var remainsecond = document.querySelector("#remainsecond")
var alertmessagestart= document.querySelector("#alertmessage")
var homepageBTN = document.querySelector("#homepage")
var successaudio = document.querySelector("#audioplay")
var wrongaudio = document.querySelector("#successaudio")
var playback = document.querySelector("#playback")
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
        choiceA: "1. <div>",
        ChoiceB: "2. <link>",
        choiceC: "3. <head>",
        choiceD: "4. <script>",
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
var todo = []
var secondleft = 60;
var currentquestionindex = 0
var questionlenght = quizquestion.length
var timerinterval
var disable = true
var score = 0
var currentuser
var i;
var correct


function quizquestiontag(){

    enterinitialDiv.style.display = "none";
    if(currentquestionindex === questionlenght){
        showscore()
    }
   
    var currentquestion = quizquestion[currentquestionindex]
    buttonA.textContent = currentquestion.choiceA
    buttonB.textContent = currentquestion.ChoiceB
    buttonC.textContent = currentquestion.choiceC
    buttonD.textContent = currentquestion.choiceD
    questionEl.textContent = currentquestion.question
    
}

function playquiz(value){
  correct = quizquestion[currentquestionindex].correctanswer
  if(value === correct && currentquestionindex !== questionlenght){
  score++
  currentquestionindex++;
  message("success","Correct !!!")
  quizquestiontag()

successaudio.play()

  }else if(value !== correct && currentquestionindex !== questionlenght){
 message("error","Wrong !!!") 
 currentquestionindex++
 quizquestiontag()
   wrongaudio.play()
   
}  else{
    showscore()
}
}

function settimer(){
    secondleft = 60
timerinterval = setInterval(function(){
    secondleft--;
    if(secondleft === 3){
        remainsecond.textContent = "Seconds Left"
    }else if(secondleft === 1){
        remainsecond.textContent = "Second Remaining"
    }
        if(secondleft === 0){
            clearInterval(timerinterval)
            showscore()
        }
    
    timecount.innerHTML =  secondleft  
},1000)
}


function showscore(){
    inputinitial.value = "";
    displaypoint.textContent = "you score"+" "+ score +" "+" of total"+" "+questionlenght
    questionDiv.style.display="none"
    enterinitialDiv.style.display = "block"   
}


savescorebtn.addEventListener("click", function(event){
    event.preventDefault()
 
    var initialname = inputinitial.value.trim()
    if(initialname === ""){
        alert("Cannot be blank \n Enter initial to save highscore")
        return;
    }else{
        currentuser = {
            name:initialname,
            score:score
           }
     todo.push(currentuser)
     localStorage.setItem("savevalue",JSON.stringify(todo))
    }
    displayinfoDIV.style.display = "block"
    enterinitialDiv.style.display = "none"
    generateinfo()
}
)


function generateinfo(){
    highscoreValue.textContent = "";
    scoreinitial.textContent = "";
   for(i = 0; i < todo.length;i++){
     var Namescorein = document.createElement("li")
     var highscorenum = document.createElement("li")
     Namescorein.textContent = todo[i].name
     highscorenum.textContent = todo[i].score
     scoreinitial.appendChild(Namescorein) 
     highscoreValue.appendChild(highscorenum)
   }
}
   

function message(type,message){
    answermessage.textContent = message
    answermessage.setAttribute("class",type)
}

function startquiz(event){
    event.preventDefault()
   var text = "press ok to start \n or Cancel "
   if(confirm(text) == true){
    text = "start quiz";
   }else {
    text = "Accept ok to beginning quiz"
    alertmessagestart.textContent = text
    return;
   }
   enterinitialDiv.style.display = "none"  
    startgameDiv.style.display = "none"
    questionDiv.style.display="flex"
    playback.play()
    settimer()
    quizquestiontag()
    
}

startgamebtn.addEventListener("click", startquiz)

highscorebtn.addEventListener("click", highscore)

function highscore(event){
    event.preventDefault()
    displayinfoDIV.style.display = "block"
    startgameDiv.style.display = "none"
    var savetodo = JSON.parse(localStorage.getItem("savevalue"))
    if(savetodo !== null){
        todo = savetodo
    }
    generateinfo() 

}



playagainBTN.addEventListener("click",function(event){
    event.preventDefault()
    event.preventDefault()
    secondleft = 60
    currentquestionindex = 0
    score = 0
   var message = "are you ready to play"
    if(confirm(message) === true){
        alert("start game")
    }else{
       alert("you cancel")
        return
    }
    displayinfoDIV.style.display = "none";
    questionDiv.style.display="flex"
    quizquestiontag()
    settimer()
    playback.play()
    
})


clearscore.addEventListener("click",function clearscore(event){
    event.preventDefault()
    scoreinitial.textContent = "";
    highscoreValue.textContent = "";
    window.localStorage.clear()
  
})


homepageBTN.addEventListener("click",function(event){
    event.preventDefault()
    playback.play()
    enterinitialDiv.style.display = "none"  
    displayinfoDIV.style.display = "none";
    startgameDiv.style.display = "flex"
    alertmessagestart.textContent = "";
    answermessage.textContent = "";
})

