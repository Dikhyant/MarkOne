const readLineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.log( chalk.yellow("Hi there"));
const username = readLineSync.question(chalk.yellow("Tell us your name please\n"));

console.log(chalk.blue("Lets see how well do you know Dikhyant"));

class Question{
  constructor( question , a , b , c , d , answer ) {
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer;
  }
}

const questionList = [
  new Question(
    "What's my favorite color ?",
    "Red",
    "Green",
    "Black",
    "Blue",
    'c'
  ),
  new Question(
    "Which is my favorite dish ?",
    "Paneer Curry",
    "Chicken Biriyani",
    "Fish fry",
    "Gobi manchurian",
    'b'
  ),
  new Question(
    "Can you guess my favorite car ?",
    "Ford mustang",
    "Lamborghini aventador",
    "Nissan GTR",
    "Dodge challenger",
    'a'
  ),
  new Question(
    "Who is my favorite Harry Potter Character ?",
    "Harry Potter",
    "Severus Snape",
    "Albus Dumbledore",
    "Hermione Granger",
    'b'
  ),
  new Question(
    "Who is my favorite Superhero ?",
    "Iron Man",
    "Superman",
    "Batman",
    "Captain America",
    'c'
  )
]

const play = ( question ) => {
  console.log(chalk.green(question.question));
  console.log(chalk.green('a : ') + chalk.green(question.a));
  console.log(chalk.green('b : ') + chalk.green(question.b));
  console.log(chalk.green('c : ') + chalk.green(question.c));
  console.log(chalk.green('d : ') + chalk.green(question.d));

  const userAnswer = readLineSync.question();

  if(userAnswer == question.answer){
    console.log(chalk.blue("Correct Answer"));
    score++;
  } else {
    console.log(chalk.red("Oops . Wrong answer"));
    console.log( chalk.yellow("Correct answer is " + question.answer));
  }

  console.log(chalk.blue("Score = " + score));
} 

//iterating all questions
questionList.forEach( (value) =>{
  play(value);
})

console.log( chalk.yellow(username + " your score is " + score));
console.log(chalk.blue("Thank you " + username + " for playing with us"));

if(score >= questionList.length - 1) {
  console.log(chalk.blue("Woah congratulation for acheiving " + score + "/" + questionList.length));
}
