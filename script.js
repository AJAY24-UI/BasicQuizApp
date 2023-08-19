const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-btn");
    optionsElement.appendChild(optionButton);
    optionButton.addEventListener("click", () => checkAnswer(option, question.answer));
  });
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong. The correct answer is: " + correctAnswer);
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert("Quiz completed!");
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert("Quiz completed!");
  }
});

// Initial question
showQuestion(questions[currentQuestionIndex]);
