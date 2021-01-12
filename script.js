var myQuestions = [
  {
    question: "Who is my all time favorite band?",
    answers: {
      a: 'The Who',
      b: 'Creed',
      c: 'KoRn',
      d: 'Slipknot'
    },
    correctAnswer: 'c'
  },
  {
    question: "What is my all time favorite cartoon?",
    answers: {
      a: 'Family Guy',
      b: 'South Park',
      c: 'Bobs burgers',
      d: 'The Simpsons'
    },
    correctAnswer: 'b'
  },
  {
    question: "Where was I born?(multiple answers)",
    answers: {
      a: 'Flint, Michigan',
      b: 'in a hospital',
      c: 'Phoenix Az',
      d: 'in a dumpster'
    },
    correctAnswer: 'b',
  },
  {
    question: "When did I move to Seattle, WA?",
    answers: {
      a: 'January 1st 2021',
      b: 'August 19th 2013',
      c: 'December 16th 2013'
    },
    correctAnswer: 'b'
  },
  {
    question: "Why didn't I finish my assignment on time?",
    answers: {
      a: 'My Cat Deleted the Files',
      b: 'I was dead at the time',
      c: 'Poor Time Management'
    },
    correctAnswer: 'c'
  }

];

//var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var time=60;
var timer;
var currentQ=0;
// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz() {

  // function showQuestions(questions, quizContainer) {
  //   // we'll need a place to store the output and the answer choices
  //   var output = [];
  //   var answers;

  //   // for each question...
  //   for (var i = 0; i < questions.length; i++) {

  //     // first reset the list of answers
  //     answers = [];

  //     // for each available answer...
  //     for (letter in questions[i].answers) {

  //       // ...add an html radio button
  //       answers.push(
  //         '<label>'
  //         + '<input type="radio" name="question' + i + '" value="' + letter + '">'
  //         + letter + ': '
  //         + questions[i].answers[letter]
  //         + '</label>'
  //       );
  //     }

  //     // add this question and its answers to the output
  //     output.push(
  //       '<div class="question">' + questions[i].question + '</div>'
  //       + '<div class="answers">' + answers.join('') + '</div>'
  //     );
  //   }
  //   // finally combine our output list into one string of html and put it on the page
  // .innerHTML = output.join('');
  // }
  // show questions right away
  // showQuestions(questions, quizContainer);
  // on submit, show results
  var startSection=document.getElementById('startScreen')
  startSection.classList.add("hidden")
  var questionSection=document.getElementById('questions')
  questionSection.classList.remove("hidden")
  document.getElementById('timer').innerHTML = time

  timer=setInterval(startTimer, 1000); 
  showQuestions()
}
  function showQuestions() {
    var question = document.getElementById('question')
    var choices = document.getElementById('choices')
    var current = myQuestions[currentQ]
    var answers = current.answers
    // question.innerHTML = ""
    choices.innerHTML = ""
    question.textContent = current.question
    for(var key in answers) {
      var btn = document.createElement('button')
      btn.textContent = answers[key]
      btn.onclick = function(){
        checkAnswer(key)
      }
      choices.appendChild(btn)
    }
  }
  function checkAnswer(key) {
    var current = myQuestions[currentQ]
    var correct = current.correctAnswer
    if (key !== correct){
      time = time-10
      document.getElementById('timer').innerHTML = time;
    }
    currentQ = currentQ+1
    if (currentQ === myQuestions.length){
      gameOver()
    }
    else {
      showQuestions()
    }
  }
  function startTimer() {
    time--;
    document.getElementById('timer').innerHTML = time;
    if (time <=0){
      time=0;
      document.getElementById('timer').innerHTML = time;
      gameOver()
    }
    
  }

  function gameOver() {
    console.log("game over")
      clearInterval(timer)
      var questionSection=document.getElementById('questions')
  questionSection.classList.add("hidden")
  var endSection=document.getElementById('endscreen')
  endSection.classList.remove("hidden")
  document.getElementById('results').textContent = time
  }
  function showScore(){
    var initials = document.getElementById('initials').value
    console.log(initials)
  }
document.getElementById("submit").onclick = generateQuiz
document.getElementById("submitInit").onclick = showScore