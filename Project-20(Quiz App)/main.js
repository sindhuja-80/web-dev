const questions = [
  {
    question: "Which language runs in the browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler"
    ],
    correct: 2
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Google", "Oracle"],
    correct: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "<!-- -->", "#", "**"],
    correct: 0
  },
  {
    question: "Which HTML tag is used to create a link?",
    answers: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  },
  {
    question: "Which CSS property changes text color?",
    answers: ["font-style", "text-color", "color", "background-color"],
    correct: 2
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    answers: [
      "querySelectorAll()",
      "getElementById()",
      "getElementsByClass()",
      "selectById()"
    ],
    correct: 1
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "int", "string", "define"],
    correct: 0
  },
  {
    question: "Which operator is used to compare both value and type?",
    answers: ["==", "=", "===", "!="],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

nextBtn.style.display = "none";

function loadQuestion() {
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;

    btn.addEventListener("click", () => selectAnswer(index));

    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === questions[currentQuestion].correct) {
      btn.classList.add("correct");
    }

    if (i === index && i !== questions[currentQuestion].correct) {
      btn.classList.add("wrong");
    }
  });

  if (index === questions[currentQuestion].correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.innerText = "Quiz Completed 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreEl.innerText = "";
  restartBtn.style.display = "none";
  loadQuestion();
});

loadQuestion();