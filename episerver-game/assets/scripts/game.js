$(document).ready(function() {
  var quiz = [{
  "question": "Whats the minimum required database version?",
  "choices": ["Microsoft SQL Server 2014", "Microsoft SQL Server 2012", "Microsoft SQL Server 2008", "Microsoft SQL Server 2004 R2"],
  "correct": "Microsoft SQL Server 2008"
}, {
  "question": "Whats the minmum required operation systems supported in production for CMS 9+?",
  "choices": ["Windows 7", "Windows 8", "Windows Server 2012", "Windows Server 2012 R2"],
  "correct": "Windows Server 2012"
}, {
  "question": "What is the name of the file that contains what you have licensed and all restrictions? And where do you place it?",
  "choices": ["License.config, bin folder", "License.config, root folder", "Certificate.config, root folder", "Certificate.config, bin folder"],
  "correct": "License.config, root folder"
}, {
  "question": "How is the friendly URL to a page constructed?",
  "choices": ["The page name", "The page name + parent up to start", "The page name + childrens"],
  "correct": "The page name + parent up to start"
}, {
  "question": "Where can you change the URL to a page?",
  "choices": ["Change in the page properties", "Admin mode", "other"],
  "correct": "Change in the page properties"
}, {
  "question": "What happens with the URL to a page when you move a page to another location in the page tree?",
  "choices": ["The URL wont be affected", "The URL will be affected"],
  "correct": "The URL wont be affected"
}, {
  "question": "Will internal links to a page break when you move a page in the page-tree?",
  "choices": ["Yes", "No", "Depends"],
  "correct": "No"
}, {
  "question": "Will external links to a page break when you move a page in the page-tree?",
  "choices": ["Yes", "No", "Depends"],
  "correct": "Yes"
}, {
  "question": "How does the Simple adress property work?",
  "choices": ["The site gets a new adress ex www.dom.com/parent/simple-adress", "The site gets a new adress ex www.dom.com/simple-adress", "other"],
  "correct": "The site gets a new adress ex www.dom.com/simple-adress"
}, {
  "question": "Is the name-in-url static or dynamic?",
  "choices": ["Dynamic", "Static"],
  "correct": "Change in the page properties"
}, {
  "question": "What is the difference between fallback and replacement language?",
  "choices": ["Fallback = language shown if the page isnt translated, Replacement  =", "", "other"],
  "correct": "Change in the page properties"
}, {
  "question": "Where can you change the URL to a page?",
  "choices": ["Change in the page properties", "Admin mode", "other"],
  "correct": "Change in the page properties"
}, {
  "question": "Where can you change the URL to a page?",
  "choices": ["Change in the page properties", "Admin mode", "other"],
  "correct": "Change in the page properties"
}, {
  "question": "Where can you change the URL to a page?",
  "choices": ["Change in the page properties", "Admin mode", "other"],
  "correct": "Change in the page properties"
}, {
  "question": "Where can you change the URL to a page?",
  "choices": ["Change in the page properties", "Admin mode", "other"],
  "correct": "Change in the page properties"
}, {
  "question": "Where can you change the URL to a page?",
  "choices": ["Change in the page properties", "Admin mode", "other"],
  "correct": "Change in the page properties"
}
];


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");

// init vars
var currentQuestion = 0,
  score = 0,
  askingQuestion = true;

function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  // load the question
  questionContainer.textContent = "Q" + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "Score: 0 right answers out of " +
      quiz.length + " possible.";
    submitBtn.textContent = "Submit Answer";
  }
}

function checkAnswer() {
  // are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Next Question";
    askingQuestion = false;

    // determine which radio button they clicked
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // if this radio button is checked
        userpick = radios[i].value;
      }

      // get index of correct answer
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    // setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }

    scoreContainer.textContent = "Score: " + score + " right answers out of " +
      quiz.length + " possible.";
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Submit Answer";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}

function showFinalResults() {
  content.innerHTML = "<h2>You've complited the quiz!</h2>" +
    "<h2>Below are your results:</h2>" +
    "<h2>" + score + " out of " + quiz.length + " questions, " +
    Math.round(score / quiz.length * 100) + "%<h2>";
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
});
