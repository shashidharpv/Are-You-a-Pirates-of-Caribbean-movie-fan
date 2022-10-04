var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question

  ("Hi!.What is your name?");

console.log("Welcome to my app " + userName);

// play function

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Right!");

    score = score + 2;


  }

  else {
    console.log("Wrong!");
    score = score - 1

  }
  console.log("current score:", score);
  console.log("-----------------")

}


//Array
var questions = [{

  question: "What did Depp seriously changed in his look for the role of Jack Sparrow?",

  answer: "Teeth"

}, {

  question: "What is the name of Jack Sparrow's ship?",

  answer: "Black Pearl"

}, {

  question: "Whose blood did pirates need to break the curse?",

  answer: "Will Turner"

}, {

  question: "Where does the royal family of Elizabeth Swann live and rule?",

  answer: "Port Royal"

},
{
  question: "What is Will Turner father’s nickname?",

  answer: "Bootstrap"

}]

//Loops

for (var i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("That's Great! Your Final score is:", score);