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
    `<div class="welcome-sect"">
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
function wrongOrRight(){
  const template = 
      `<h1>Wrong/Right</h1>
        <h2>Correct answer is!</h2>
        <h2>Good Job!</h2>
        <button class="next-question-butt"><span>Next Question</span></button>
  `;
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
          <div class="answer"><label><input type="radio" name="radio" class="answer-selected">${answer1}</label></div>
          <div class="answer"><label><input type="radio" name="radio" class="answer-selected">${answer2}</label></div>
          <div class="answer"><label><input type="radio" name="radio" class="answer-selected">${answer3}</label></div>
          <div class="answer"><label><input type="radio" name="radio" class="answer-selected">${answer4}</label></div>
          <button class="submit-butt "type="submit">Submit</button>
        </form>
      </div>
      `;
    return template;
}

function readyButtonPress(){
  $('.welcome-sect').on('click', '.readyButt', function(){
    alert('Ready button');
    store.quizStarted = true;
    render();
  });
}
function subButt(){
  $('.answers-section').on('click', '.submit-butt', function(){
    alert('Submit button');
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
    store.questionNumber += 1;
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