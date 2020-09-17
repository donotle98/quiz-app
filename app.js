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
        'All hail america!',
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
    ` <h2 class="question-counter">Question #${counter + 1} out of ${questionArr}</h2>
      <h3 class="question-spot">${currentQuestion}</h3>
      <div class="whereAns">
      </div>`;
  return template;
}
function answerSection(counter){
  let answer1 = store.questions[counter].answers[0];
  let answer2 = store.questions[counter].answers[1];
  let answer3 = store.questions[counter].answers[2];
  let answer4 = store.questions[counter].answers[3];
  const template = `
      <div class="answers-section">
        <form id="answers-form">
          <div class="answer"><label class="answer-selected"><input type="radio" class="answer-input" name="radio" value="${answer1}">${answer1}</label></div>
          <div class="answer"><label class="answer-selected"><input type="radio" class="answer-input" name="radio" value="${answer2}">${answer2}</label></div>
          <div class="answer"><label class="answer-selected"><input type="radio" class="answer-input" name="radio" value="${answer3}">${answer3}</label></div>
          <div class="answer"><label class="answer-selected"><input type="radio" class="answer-input" name="radio" value="${answer4}">${answer4}</label></div>
          <input type="submit" value="Submit">
        </form>
      </div>
      `;
    return template;
}

function rightAnswer(){
  const correctAnswer = 
  `<div class="result-section">
    <h1>Right!</h1>
    <h2>Good Job!</h2>
    <button class="next-question-butt"><span>Next Question</span></button>
  </div>
`;
$('body').html(correctAnswer);
}
function wrongAnswer(){
  const wrongAnswer = 
  `<div class="result-section">
    <h1>Sorry, but that is wrong!</h1>
    <h2>Correct answer is: ${store.questions[store.questionNumber].correctAnswer}</h2>
    <button class="next-question-butt"><span>Next Question</span></button>
  </div>
  `;
  $('body').html(wrongAnswer);
}
function nextQuestionButton(){
  $('.result-section').on('click', '.next-question-butt', function(){
    console.log('Next question button');
    store.quizStarted = true;
    render();
  });
}
// function wrongOrRight(counter, value){
//   const correctAnswer = 
//   `<div class="result-section">
//     <h1>Right!</h1>
//     <h2>Good Job!</h2>
//     <button class="next-question-butt"><span>Next Question</span></button>
//   </div>
// `;
//   const wrongAnswer = 
//   `<div class="result-section">
//     <h1>Sorry, but that is wrong!</h1>
//     <h2>Correct answer is: ${store.questions[counter].correctAnswer}</h2>
//     <button class="next-question-butt"><span>Next Question</span></button>
//   </div>
//   `;
//   if(value === 1){
//     return correctAnswer;
//   } else{
//     return wrongAnswer;
//   }
// }
function readyButtonPress(){
  $('.welcome-sect').on('click', '.readyButt', function(){
    console.log('Ready button');
    store.quizStarted = true;
    render();
  });
}

function checkAnswer(correctinput){
  let userAnswer = $('input[name="radio"]:checked').val();
  console.log('User Answer ' + userAnswer);
  if(userAnswer == correctinput){
    return rightAnswer();
  } else{
    return wrongAnswer();
  }
}

function subButt(){
  $('body').submit('#answers-form', function(event){
    event.preventDefault();
    let correctans = store.questions[store.questionNumber].correctAnswer;
    console.log('Correct Answer ' + correctans);
    checkAnswer(correctans);
    store.questionNumber += 1;
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
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function main(){
  render();
  readyButtonPress();
  subButt();
}
$(main);