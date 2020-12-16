// from video Building a Multiple Choice Quiz | Javascript | Tutorial 24
// Questions Array
var questions = [
    {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "a"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "c"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "a"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "c"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "a"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "c"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "a"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "c"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "a"
      },
      {
        prompt: "----?\n(a) --\n\(b) ---\n\(c) ----",
        answer: "c"
      },
]
// basic for loop structure
var score = 0;
for(var i=0 i < questions.length; i++){
  var response = window.prompt(questions[i].prompt)
  if(response == question[i].answer)
    score++;
    alert("Correct!");
  } else {
    alert("WRONG!");
  }
}


var startButton=document.getElementById("start-button")
function startQuiz(){
console.log("hello")
}
startButton.onclick=startQuiz
