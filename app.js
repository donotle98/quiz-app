/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
/**
 * Example store structure
 */
const store = {
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  // 5 or more questions are required
  questions: [
    {
      question: 'Oranges and Lemons say the bells of St Clements. What does the great bell of Bow say?',
      answers: [
        'Vegemite is alright',
        'lets go drink some tea',
        'boats are nice, yachts are nicer',
        'i do not know'
      ],
      correctAnswer: 'i do not know'
    },
    {
      question: 'What famous address is located at postcode SW1A 2AA?',
      answers: [
        '10 Downing Street',
        '21st Jump Street',
        'Lil Marco Street',
        'La Croix Avenue'
      ],
      correctAnswer: '10 Downing Street'
    },
    {
      question: 'What was the name of Dirty Den\'s poodle?',
      answers: [
        'Rolly',
        'Tootsie',
        'Jamesy',
        'Heleny'
      ],
      correctAnswer: 'Rolly'
    },
    {
      question: 'Canary Wharf is in what London borough?',
      answers: [
        'Tower Hamlets',
        'Compton',
        'Hamlet',
        'The Wharf'
      ],
      correctAnswer: 'Tower Hamlets'
    },
    {
      question: 'What football club is the oldest in London?',
      answers: [
        'Fulham',
        'Wilham',
        'Danzie',
        'Chamomile'
      ],
      correctAnswer: 'Fulham'
    },
  ],
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates


function welcomeScreen(){
  const template = 
    `<div class="welcome-sect">
      <h2 class="ready-header">Ready to start the quiz?</h2>
      <div>
        <button class="readyButt yes-butt"><span>Yes</span></button>
      </div>
    </div>`;
    return template;
}

function questionScreen(counter){
  let currentQuestion = store.questions[counter].question;
  let questionArr = store.questions.length;
  const template = 
    ` <div class="question-div">
        <h2 class="question-counter">Question #${counter + 1} out of ${questionArr}</h2>
        <h3 class="question-spot">${currentQuestion}</h3>
      </div>
      
      <div class="whereAns">
      </div>`;
  return template;
}
function answerSection(counter){
  const template = `
      <div class="answers-section">
        <form id="answers-form">
          ${store.questions[counter].answers
            .map(
              (answer) =>
                `<div class="answer"><label class="answer-selected strikethrough"><input type="radio" class="answer-input" name="radio" value="${answer}" aria-pressed="false">${answer}</label></div><div class="check"><div class="inside"></div></div>`
            )
            .join('')}
          <input type="submit" value="Submit" class="submit-button hvr-buzz">
        </form>
      </div>
      `;
      const pressedBool = $('.answer-selected').attr('aria-pressed') === true;
  return template;
}

function rightAnswer(){
  const correctAnswer = 
  `
  <div class="result-section">
    <div class="container">
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    </div>
    <div class="confetti"></div>
    <h1 class="wrong-right" style="color:green" st>Right!</h1>
    <h2 class="correct-ans">Good Job!</h2>
    <button class="next-question-butt">Next Question</button>
  </div>
`;
store.score += 1;
store.questionNumber += 1;
return correctAnswer;
}
function wrongAnswer(){
  const wrongAnswer = 
  `<div class="result-section">
    <h1 class="wrong-right" style="color:red">Sorry, but that is wrong!</h1>
    <h2 class="correct-ans">Correct answer is: ${store.questions[store.questionNumber].correctAnswer}</h2>
    <button class="next-question-butt"><span>Next Question</span></button>
  </div>
  `;
  store.questionNumber += 1;
  return wrongAnswer;
}
function checkAnswer(correctinput){
  let userAnswer = $('input[name="radio"]:checked').val();
  console.log('User Answer: ' + userAnswer);
  if(userAnswer == correctinput){
    return rightAnswer();
  } else{
    return wrongAnswer();
  }
}
function endPage(){
  let userAnswer = $('input[name="radio"]:checked').val();
  let correctans = store.questions[store.questionNumber].correctAnswer;
  const endPageRightAnswer = 
  `
  <h2>Correct!</h2>
  `;
  const endPageWrongAnswer = 
  `
  <h2>Wrong!</h2>
  <h3>Correct answer is: ${store.questions[store.questionNumber].correctAnswer} </h3>
  `;
  const endpage = `
  <h2>End of quiz!!</h2>
  <h2>Your score is: ${store.score} out of ${store.questions.length}</h2>
  <div class="end-page-button"><button class="restart-button">Restart?</button></div>

  `;
  if(userAnswer === correctans){
    store.quizStarted = false;
    return endPageRightAnswer + endpage;
  } else{
    store.quizStarted = false;
    return endPageWrongAnswer + endpage;
  }
}
function restartButton(){
  $('.end-page-button').on('click', '.restart-button', function(){
    console.log('Restart Button Pressed!');
    store.quizStarted = true;
    store.questionNumber = 0;
    render();
  });
}
function readyButtonPress(){
  $('.welcome-sect').on('click', '.readyButt', function(){
    console.log('Ready button');
    store.quizStarted = true;
    render();
  });
  $('.welcome-sect')
}
function subButt(){
  $('body').submit('#answers-form', function(event){
    event.preventDefault();
    let correctans = store.questions[store.questionNumber].correctAnswer;
    let userAnswer = $('input[name="radio"]:checked').val();
    console.log('Correct answer: ' + `${correctans}`)
    console.log('Submit button press');
    if(!userAnswer){
      alert('Please select an answer');
    } else{
      if(store.questionNumber + 1 === store.questions.length){
        renderEndPage();
      } else{
        renderResults();
      }
    }
  });
}
function nextQuestionButton(){
  $('.result-section').on('click', '.next-question-butt', function(){
    console.log('Next question button');
    store.quizStarted = true;
    render();
  });
}
/********** RENDER FUNCTION(S) **********/

function render(){
  let page = '';
  if(store.quizStarted === false){
    page += welcomeScreen();
  }
  if(store.quizStarted === true){
    page += questionScreen(store.questionNumber) + answerSection(store.questionNumber);
  }
  $('main').html(page);

}
function renderResults(){
  let page = '';
  let correctans = store.questions[store.questionNumber].correctAnswer;
  page += checkAnswer(correctans);
  $('main').html(page);
  nextQuestionButton();
}
function renderEndPage(){
  let page = '';
  page += endPage();
  $('main').html(page);
  restartButton();
}
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function main(){
  render();
  readyButtonPress();
  subButt();
  nextQuestionButton();
}
$(main);