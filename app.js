/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
/**
 * Example store structure
 */
const store = {
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
  quizStarted: false,
  questionNumber: 0,
  score: 0
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
  $('main').html(
    `<div>
      <h2 class="ready-header">Ready to start the quiz?</h2>
      <div>
        <button class="readyButt yes-butt"><span>Yes</span></button>
      </div>
    </div>`);
}
function questionScreen(){
  $('body').html(
    `<h2 class="question-counter">Question #1 out of #5</h2>
    <h3 class="question-spot">(question here)</h3>
  `);
}
function wrongOrRight(){
  $('body').html(
    `<h1>Wrong/Right</h1>
      <h2>Correct answer is!</h2>
      <h2>Good Job!</h2>
  `);
}
function answerSection(){
  $('body').html(
    `<form class="answers-sect">
      <label>hjeonlek</label>
      <label>ldknls</label>
      <label>lkansdlnsa</label>
      <label>osmdksdan</label>
      </form>
      <button class="submit-butt"><span>Submit</span></button>
    `);
}
/********** RENDER FUNCTION(S) **********/
function renderFunc(){
  welcomeScreen();
}
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)





$(renderFunc);