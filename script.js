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
    correctAnswer: 'b', 'c'
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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}