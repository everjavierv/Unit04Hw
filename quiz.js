var timer;
var score = 0;
var questionNum = -1;

//-----------------//
function start() {
  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
  nextQuestion();
}

//-----------------//

function nextQuestion() {
  questionNum++;

  if (questionNum > questions.length - 1) {
    endGame();
    return;
  }

  var currentQuestion = questions[questionNum].title;
  //   var currentAnswerChoices = questions[questionNum].answer;
  //   console.log(currentQuestion);
  //   console.log(typeof currentQuestion);
  //   console.log(questions[questionNum].answer);

  for (var i = 0; i < questions[questionNum].choices.length; i++) {
    var diffChoices = questions[questionNum].choices[i];

    var userChoice = "";
    console.log(diffChoices);

    var mbutton = document.createElement("button");
    mbutton.textContent = diffChoices;
    document.getElementsByTagName("button").innerHTML = diffChoices;
    //document.getElementById("quizTextB").textContent = diffChoices;

    mbutton.addEventListener("click", function () {
      var elementB = event.target.textContent;
      console.log(elementB);

      if (elementB === questions[questionNum].answer) {
        correct();
        console.log("you are right");
      } else {
        incorrect();
        console.log("you are wrong");
      }
    });
    //document.body.button.prepend();
  } //end of for loop

  document.getElementById("quizTextA").textContent = currentQuestion;
  document.getElementById("quizTextB").textContent = diffChoices;

  //   document.getElementById("optA").textContent =
  //     questions[questionNum].choices[0];
  //   document.getElementById("optB").textContent =
  //     questions[questionNum].choices[1];
}

//-----------------//
function incorrect() {
  var message = document.createElement("p");
  message.innerHTML = "Wrong";
  document.body.appendChild(message);
  timeLeft -= 15;
  nextQuestion();
}

function correct() {
  var message = document.createElement("p");
  message.innerHTML = "Right";
  document.body.appendChild(message);
  score += 20;
  nextQuestion();
}

//-----------------//

function endGame() {
  var quizResults =
    `
    <h1>All done!</h1>
    <h2>Your final score is ` +
    score +
    ` /100!</h2>
    
    <input type="text" id="player" placeholder="Enter Initials: "> 
    <button onclick="setScore()">Submit</button>`;

  document.getElementById("quizTextt").innerHTML = quizResults;
}

//-----------------//

var questions = [
  {
    title: "In Javascript, DOM stands for _____?",
    choices: [
      "A: Data Output Message",
      "B: Disk On Media",
      "C: Document Object Model",
      "D: Differential Object Marking",
    ],
    answer: "C: Document Object Model",
  },
  {
    title:
      "Which one of these is NOT a valid event to use with Event Listeners?",
    choices: ["A: click", "B: submit", "C: error", "D: down"],
    answer: "D: down",
  },
  {
    title:
      "The HTML tag under which one can write the JavaScript code is _____?",
    choices: ["A: javascript", "B: scripted", "C: script", "D: js"], //removed the <> in the answer choices
    answer: "C: <script>",
  },
  {
    title:
      "Which of the following function of Array object reverses the order of the elements of an array?",
    choices: [
      "A: reverse( )",
      "B: push( )",
      "C: reduce( )",
      "D: reduceRight( )",
    ],
    answer: "A: reverse( )",
  },
  {
    title:
      "Which built-in method combines the text of two strings and returns a new string?",
    choices: ["A: append( )", "B: concat( )", "C: attach( )", "D: add( )"],
    answer: "B: concat( )",
  },
];
