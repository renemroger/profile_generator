const readline = require('readline');

const questions = ["What's your name?", "What's an activity you like doing?", "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)", "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?", "What is your superpower? In a few words, tell us what you are amazing at!"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];


const recursiveQuestions = function (index) {
  if (index > 6) {
    console.log(`${arr[0]} loves listening to ${arr[2]} while ${arr[1]}, 
    devouring ${arr[4]} for ${arr[3]}, prefers ${arr[5]}over any other sport, 
    and is ${arr[6]}.`);
    rl.close();

  } else {
    rl.question(questions[index], (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      arr.push(`${answer}`);
      recursiveQuestions(++index);
    });
  }
}
recursiveQuestions(0);

