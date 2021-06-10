var A = document.querySelector("#btnA");
var B = document.querySelector("#btnB");
var C = document.querySelector("#btnC");
var D = document.querySelector("#btnD");

var start = document.querySelector("#startBtn");
var button = document.querySelector("#Quest");

var scoreBoard = document.querySelector("#score");

var questionsArray = ["click/enter to target an:", "1000ms is a standard:", "use querySelectors to assign a:", "JavaScript is a language of:"];


//Purple Question Button Random Question from Question Array

button.addEventListener("click", function() {
    console.log("clicked")
    var question = questionsArray[Math.floor(Math.random() * questionsArray.length)];

    console.log("question", question)
    document.getElementById("questions").textContent = question;

});


// Redundant Button Functions For Next Question

A.addEventListener("click", function() {
  console.log("clicked")
  var question = questionsArray[Math.floor(Math.random() * questionsArray.length)];

  console.log("question", question)
  document.getElementById("questions").textContent = question;

});

B.addEventListener("click", function() {
  console.log("clicked")
  var question = questionsArray[Math.floor(Math.random() * questionsArray.length)];

  console.log("question", question)
  document.getElementById("questions").textContent = question;

});

C.addEventListener("click", function() {
  console.log("clicked")
  var question = questionsArray[Math.floor(Math.random() * questionsArray.length)];

  console.log("question", question)
  document.getElementById("questions").textContent = question;

});

D.addEventListener("click", function() {
  console.log("clicked")
  var question = questionsArray[Math.floor(Math.random() * questionsArray.length)];

  console.log("question", question)
  document.getElementById("questions").textContent = question;

});


// Timer Countdown

var timerEl = document.querySelector("#countdown");


start.addEventListener("click", function() {
    var timeLeft = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  });

  
//Correct Answer Validation

var score = 0
var questionField = document.querySelector("h4").textContent;

var container = document.querySelector(".card-body");

container.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("#btnA") && questionField == questionsArray[3]) {
        document.getElementById("h2").textContent = (score + 1)
    }

    else if (element.matches("#btnB") && questionField == questionsArray[2]) {
        document.getElementById("h2").textContent = (score + 1)
    }

    else if (element.matches("#btnC") && questionField == questionsArray[1]) {
        document.getElementById("h2").textContent = (score + 1)
    }

    else if (element.matches("#btnD") && questionField == questionsArray[0]) {
        document.getElementById("h2").textContent = (score + 1)
    }

    else { (timeLeft -=5)}
})



// Show Scores

var highScore = document.querySelector("h1");

highScore.addEventListener("click", function() {
  
  var x = document.querySelector(".score");
  
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else 
  {x.style.display = "none";}
});




// Score Storage

function renderScore() {
  scoreBoard.innerHTML = "";
  
  for (var i = 0; i < scores.length; i++) {
    var scores = scores[i];

    var li = document.createElement("li");
    li.textContent = scores;
    li.setAttribute("data-index", i);

    scoreBoard.appendChild(li);

}

localStorage.setItem("score", JSON.stringify(scores));


}