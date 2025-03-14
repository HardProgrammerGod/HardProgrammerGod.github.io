// Дані для квізів
const quizzes = {
    quiz1: {
      questions: [
        {
          question: "Де народився Роман Щербан?",
          options: ["Київ", "Львів", "Бусовисько", "Одеса"],
          correct: 2
        },
        {
          question: "Яку освіту має Роман Щербан?",
          options: ["Вчитель", "Журналіст", "Інженер", "Художник"],
          correct: 0
        },
        {
          question: "Коли Роман почав професійно займатися стендапом?",
          options: ["2015", "2017", "2019", "2020"],
          correct: 1
        },
        {
          question: "Що є головною роботою Романа Щербана на YouTube?",
          options: ["Ведучий новин", "Актор", "Учасник каналу 'Леві на джипі'", "Відеоблогер"],
          correct: 2
        },
        {
          question: "Яке хобі має Роман Щербан?",
          options: ["Фотографія", "Створення колажів", "Моделювання", "Риболовля"],
          correct: 1
        }
      ],
      currentQuestionIndex: 0,
      score: 0,
      loadQuestion: function() {
        const questionContainer = document.getElementById("quiz1-question-container");
        const questionData = this.questions[this.currentQuestionIndex];
        
        questionContainer.innerHTML = `
          <p class="question">${questionData.question}</p>
          <div class="answer-options">
            ${questionData.options.map((option, index) => `
              <button class="answer-btn" onclick="handleAnswer('quiz1', ${index})">${option}</button>
            `).join('')}
          </div>
        `;
      },
      handleAnswer: function(selectedIndex) {
        const correctAnswer = this.questions[this.currentQuestionIndex].correct;
        if (selectedIndex === correctAnswer) {
          this.score++;
        }
  
        if (this.currentQuestionIndex + 1 < this.questions.length) {
          this.currentQuestionIndex++;
          this.loadQuestion();
        } else {
          this.showResults();
        }
      },
      nextQuestion: function() {
        if (this.currentQuestionIndex + 1 < this.questions.length) {
          this.currentQuestionIndex++;
          this.loadQuestion();
        } else {
          this.showResults();
        }
      },
      showResults: function() {
        document.getElementById("quiz1-score").textContent = `Ваш результат: ${this.score} з ${this.questions.length}`;
        document.getElementById("quiz1-result-container").style.display = "block";
        document.getElementById("quiz1-next-btn").style.display = "none";
      },
      restartQuiz: function() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.loadQuestion();
        document.getElementById("quiz1-result-container").style.display = "none";
        document.getElementById("quiz1-next-btn").style.display = "inline-block";
      }
    }
  };
  
  function startQuiz(quizId) {
    document.querySelector(".quiz-selection-container").style.display = "none";
    document.getElementById(`${quizId}-container`).style.display = "block";
    quizzes[quizId].loadQuestion();
  }
  
  function handleAnswer(quizId, selectedIndex) {
    quizzes[quizId].handleAnswer(selectedIndex);
  }
  
  function nextQuestion(quizId) {
    quizzes[quizId].nextQuestion();
  }
  
  function restartQuiz(quizId) {
    quizzes[quizId].restartQuiz();
  }
  
// Функція для 2 квіза
function showHeart() {
    const heartMessage = document.getElementById('heart-message');
    heartMessage.style.display = 'block';
  
    setTimeout(() => {
      heartMessage.style.display = 'none';
    }, 2000);
  }

  function startQuiz(quizId) {
    document.querySelector(".quiz-selection-container").style.display = "none";
    document.getElementById(`${quizId}-container`).style.display = "block";
    quizzes[quizId].loadQuestion();
  }
  
