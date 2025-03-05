// Αρχικοποίηση μεταβλητών
let currentQuestion = 0;
let score = 0;
let timeLeft = 1200; // 20 minutes in seconds
let timer;
let selectedAnswer = null;
let startTime;
let endTime;
let answeredQuestions = new Set(); // Keep track of answered questions

// Αρχικοποίηση του quiz όταν φορτώσει η σελίδα
window.onload = function() {
    startTime = new Date();
    startTimer();
    createQuestionNavigation();
    loadQuestion();
    updateProgress();
};

// Δημιουργία της μπάρας πλοήγησης ερωτήσεων
function createQuestionNavigation() {
    const navContainer = document.getElementById('questions-nav');
    for (let i = 0; i < questions.length; i++) {
        const numberButton = document.createElement('div');
        numberButton.className = 'question-number';
        if (i === currentQuestion) {
            numberButton.classList.add('current');
        }
        numberButton.textContent = i + 1;
        numberButton.addEventListener('click', () => {
            if (!document.getElementById('options-container').classList.contains('processing')) {
                jumpToQuestion(i);
            }
        });
        navContainer.appendChild(numberButton);
    }
}

// Ενημέρωση της εμφάνισης των κουμπιών πλοήγησης
function updateQuestionNavigation() {
    const navButtons = document.querySelectorAll('.question-number');
    navButtons.forEach((button, index) => {
        button.classList.remove('current');
        if (answeredQuestions.has(index)) {
            button.classList.add('answered');
        }
        if (index === currentQuestion) {
            button.classList.add('current');
        }
    });
}

// Μετάβαση σε συγκεκριμένη ερώτηση
function jumpToQuestion(questionIndex) {
    if (questionIndex >= 0 && questionIndex < questions.length) {
        currentQuestion = questionIndex;
        loadQuestion();
        updateProgress();
        updateQuestionNavigation();
    }
}

// Ερωτήσεις του quiz
const questions = [
    {
        question: "Ποιο σχήμα ολοκληρώνει τη σειρά;",
        image: "./images/q1.png",
        options: [
            "./images/q1_a.png",
            "./images/q1_b.png",
            "./images/q1_c.png",
            "./images/q1_d.png",
            "./images/q1_e.png",
            "./images/q1_f.png"
        ],
        correct: 2
    },
    {
        question: "Ποιο σχήμα λείπει στο μοτίβο;",
        image: "./images/q2.png",
        options: [
            "./images/q2_a.png",
            "./images/q2_b.png",
            "./images/q2_c.png",
            "./images/q2_d.png",
            "./images/q2_e.png",
            "./images/q2_f.png"
        ],
        correct: 1
    },
    {
        question: "Βρείτε τον αριθμό που συνεχίζει τη σειρά:",
        image: "./images/q3.png",
        options: [
            "./images/q3_a.png",
            "./images/q3_b.png",
            "./images/q3_c.png",
            "./images/q3_d.png",
            "./images/q3_e.png",
            "./images/q3_f.png"
        ],
        correct: 1
    },
    {
        question: "Ποιο σχήμα είναι το αντίθετο;",
        image: "./images/q4.png",
        options: [
            "./images/q4_a.png",
            "./images/q4_b.png",
            "./images/q4_c.png",
            "./images/q4_d.png",
            "./images/q4_e.png",
            "./images/q4_f.png"
        ],
        correct: 3
    },
    {
        question: "Συμπληρώστε την ακολουθία:",
        image: "./images/q5.png",
        options: [
            "./images/q5_a.png",
            "./images/q5_b.png",
            "./images/q5_c.png",
            "./images/q5_d.png",
            "./images/q5_e.png",
            "./images/q5_f.png"
        ],
        correct: 0
    },
    {
        question: "Ποιο γράμμα λείπει από τη σειρά:",
        image: "./images/q6.png",
        options: [
            "./images/q6_a.png",
            "./images/q6_b.png",
            "./images/q6_c.png",
            "./images/q6_d.png",
            "./images/q6_e.png",
            "./images/q6_f.png"
        ],
        correct: 2
    },
    {
        question: "Βρείτε τον αριθμό που αντιστοιχεί στη λέξη:",
        image: "./images/q7.png",
        options: [
            "./images/q7_a.png",
            "./images/q7_b.png",
            "./images/q7_c.png",
            "./images/q7_d.png",
            "./images/q7_e.png",
            "./images/q7_f.png"
        ],
        correct: 1
    },
    {
        question: "Ποιο σχήμα ταιριάζει στο κενό;",
        image: "./images/q8.png",
        options: [
            "./images/q8_a.png",
            "./images/q8_b.png",
            "./images/q8_c.png",
            "./images/q8_d.png",
            "./images/q8_e.png",
            "./images/q8_f.png"
        ],
        correct: 2
    },
    {
        question: "Βρείτε το μοτίβο:",
        image: "./images/q9.png",
        options: [
            "./images/q9_a.png",
            "./images/q9_b.png",
            "./images/q9_c.png",
            "./images/q9_d.png",
            "./images/q9_e.png",
            "./images/q9_f.png"
        ],
        correct: 0
    },
    {
        question: "Ποιος αριθμός λείπει από το τετράγωνο;",
        image: "./images/q10.png",
        options: [
            "./images/q10_a.png",
            "./images/q10_b.png",
            "./images/q10_c.png",
            "./images/q10_d.png",
            "./images/q10_e.png",
            "./images/q10_f.png"
        ],
        correct: 2
    },
    {
        question: "Ποια μέρα θα είναι σε 100 μέρες:",
        image: "./images/q11.png",
        options: [
            "./images/q11_a.png",
            "./images/q11_b.png",
            "./images/q11_c.png",
            "./images/q11_d.png",
            "./images/q11_e.png",
            "./images/q11_f.png"
        ],
        correct: 1
    },
    {
        question: "Ποια εικόνα συνεχίζει το μοτίβο;",
        image: "./images/q12.png",
        options: [
            "./images/q12_a.png",
            "./images/q12_b.png",
            "./images/q12_c.png",
            "./images/q12_d.png",
            "./images/q12_e.png",
            "./images/q12_f.png"
        ],
        correct: 3
    },
    {
        question: "Συμπληρώστε την ακολουθία:",
        image: "./images/q13.png",
        options: [
            "./images/q13_a.png",
            "./images/q13_b.png",
            "./images/q13_c.png",
            "./images/q13_d.png",
            "./images/q13_e.png",
            "./images/q13_f.png"
        ],
        correct: 2
    },
    {
        question: "Ποιο σχήμα δεν ταιριάζει με τα υπόλοιπα;",
        image: "./images/q14.png",
        options: [
            "./images/q14_a.png",
            "./images/q14_b.png",
            "./images/q14_c.png",
            "./images/q14_d.png",
            "./images/q14_e.png",
            "./images/q14_f.png"
        ],
        correct: 1
    },
    {
        question: "Αν ABC = 123 και DEF = 456, τότε CFE = ?",
        image: "./images/q15.png",
        options: [
            "./images/q15_a.png",
            "./images/q15_b.png",
            "./images/q15_c.png",
            "./images/q15_d.png",
            "./images/q15_e.png",
            "./images/q15_f.png"
        ],
        correct: 0
    },
    {
        question: "Ποιο σχήμα λείπει από την ακολουθία;",
        image: "./images/q16.png",
        options: [
            "./images/q16_a.png",
            "./images/q16_b.png",
            "./images/q16_c.png",
            "./images/q16_d.png",
            "./images/q16_e.png",
            "./images/q16_f.png"
        ],
        correct: 2
    },
    {
        question: "Βρείτε τον επόμενο αριθμό:",
        image: "./images/q17.png",
        options: [
            "./images/q17_a.png",
            "./images/q17_b.png",
            "./images/q17_c.png",
            "./images/q17_d.png",
            "./images/q17_e.png",
            "./images/q17_f.png"
        ],
        correct: 1
    },
    {
        question: "Ποιο γράμμα συνεχίζει τη σειρά:",
        image: "./images/q18.png",
        options: [
            "./images/q18_a.png",
            "./images/q18_b.png",
            "./images/q18_c.png",
            "./images/q18_d.png",
            "./images/q18_e.png",
            "./images/q18_f.png"
        ],
        correct: 2
    },
    {
        question: "Ποιο σχήμα ολοκληρώνει το παζλ;",
        image: "./images/q19.png",
        options: [
            "./images/q19_a.png",
            "./images/q19_b.png",
            "./images/q19_c.png",
            "./images/q19_d.png",
            "./images/q19_e.png",
            "./images/q19_f.png"
        ],
        correct: 3
    },
    {
        question: "Αν 3 μήλα κοστίζουν 6 ευρώ και 5 πορτοκάλια κοστίζουν 8 ευρώ, πόσο κοστίζουν 2 μήλα και 3 πορτοκάλια;",
        image: "./images/q20.png",
        options: [
            "./images/q20_a.png",
            "./images/q20_b.png",
            "./images/q20_c.png",
            "./images/q20_d.png",
            "./images/q20_e.png",
            "./images/q20_f.png"
        ],
        correct: 2
    }
];

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishTest();
        }
    }, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateProgress() {
    const progress = document.getElementById('quiz-progress');
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${progressPercentage}%`;
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        finishTest();
        return;
    }

    // Εμφάνιση του speed popup μετά την 6η ερώτηση
    if (currentQuestion === 5 && answeredQuestions.has(5)) {
        showSpeedPopup();
        return;
    }

    const question = questions[currentQuestion];
    
    // Update question number display
    document.getElementById('current-question').textContent = currentQuestion + 1;
    
    // Load question text and image
    document.getElementById('question-text').textContent = question.question;
    const questionImage = document.getElementById('question-image');
    if (question.image) {
        questionImage.innerHTML = `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        questionImage.style.display = 'flex';
    } else {
        questionImage.style.display = 'none';
    }
    
    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    optionsContainer.className = 'options-container';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        if (option.startsWith('./images/')) {
            // If option is an image path
            optionElement.innerHTML = `<img src="${option}" alt="Option ${index + 1}">`;
        } else {
            // If option is text
            optionElement.textContent = option;
        }
        
        optionElement.addEventListener('click', () => {
            if (!optionsContainer.classList.contains('processing')) {
                selectOption(index);
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation
    updateQuestionNavigation();
    updateProgress();
}

function selectOption(index) {
    const optionsContainer = document.getElementById('options-container');
    const question = questions[currentQuestion];
    
    // Prevent multiple clicks
    if (optionsContainer.classList.contains('processing')) return;
    optionsContainer.classList.add('processing');
    
    // Add selected class to clicked option
    const options = optionsContainer.children;
    options[index].classList.add('selected');
    
    // Handle answer selection
    if (index === question.correct) {
        score++;
    }
    
    // Mark question as answered
    answeredQuestions.add(currentQuestion);
    
    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        selectedAnswer = null;
        
        if (currentQuestion < questions.length) {
            loadQuestion();
            updateProgress();
        } else {
            finishTest();
        }
        optionsContainer.classList.remove('processing');
    }, 150);
}

function showSpeedPopup() {
    document.getElementById('speed-popup').style.display = 'flex';
    document.getElementById('continue-btn').addEventListener('click', () => {
        document.getElementById('speed-popup').style.display = 'none';
        jumpToQuestion(6); // Μετάβαση στην 7η ερώτηση
    });
}

function calculateIQ() {
    const baseIQ = 100;
    const maxScore = questions.length;
    const scorePercentage = (score / maxScore);
    
    let iqScore = Math.round(baseIQ + (scorePercentage * 60 - 30));
    return Math.min(Math.max(iqScore, 70), 160);
}

function getScoreInterpretation(iq) {
    if (iq >= 140) {
        return "Εξαιρετικά Υψηλή Νοημοσύνη - Ανήκετε στο κορυφαίο 2% του πληθυσμού.";
    } else if (iq >= 120) {
        return "Πολύ Υψηλή Νοημοσύνη - Έχετε εξαιρετικές νοητικές ικανότητες.";
    } else if (iq >= 110) {
        return "Άνω του Μέσου Όρου - Οι νοητικές σας ικανότητες είναι πάνω από το μέσο όρο.";
    } else if (iq >= 90) {
        return "Μέσος Όρος - Έχετε τυπικές νοητικές ικανότητες.";
    } else if (iq >= 80) {
        return "Κάτω του Μέσου Όρου - Υπάρχει περιθώριο βελτίωσης των νοητικών σας ικανοτήτων.";
    } else {
        return "Χαμηλό - Προτείνεται η εξάσκηση των νοητικών σας ικανοτήτων.";
    }
}

function showLoadingScreen() {
    document.getElementById('quiz-container').style.display = 'none';
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'block';
    
    // Ξεκινάμε το animation του progress bar
    const progress = loadingScreen.querySelector('.progress');
    const metrics = loadingScreen.querySelectorAll('.metric');
    let currentProgress = 0;
    
    const interval = setInterval(() => {
        if (currentProgress >= 100) {
            clearInterval(interval);
            setTimeout(showResults, 500);
            return;
        }
        
        currentProgress += 2;
        progress.style.width = `${currentProgress}%`;
        
        // Ενημερώνουμε τα checkmarks
        const completedMetrics = Math.floor((currentProgress / 100) * metrics.length);
        metrics.forEach((metric, index) => {
            if (index < completedMetrics) {
                metric.classList.add('completed');
            }
        });
    }, 100);
}

function calculateIQ(correctAnswers, timeInSeconds) {
    // Βασικό σκορ βασισμένο στις σωστές απαντήσεις (0-20 ερωτήσεις)
    const baseScore = (correctAnswers / 20) * 100;
    
    // Υπολογισμός bonus/penalty βασισμένο στο χρόνο
    // Θεωρούμε ότι 15 λεπτά (900 δευτερόλεπτα) είναι ο μέσος χρόνος
    const timeBonus = Math.max(0, Math.min(20, ((900 - timeInSeconds) / 900) * 20));
    
    // Το τελικό IQ score κυμαίνεται από 70 έως 130
    // Χρησιμοποιούμε τη βαθμολογία και το χρονικό bonus για να το υπολογίσουμε
    const rawIQ = 70 + (baseScore * 0.4) + (timeBonus * 2);
    
    // Στρογγυλοποίηση στον πλησιέστερο ακέραιο
    return Math.round(Math.min(130, Math.max(70, rawIQ)));
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showResults() {
    const loadingScreen = document.getElementById('loading-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    endTime = new Date();
    const timeInSeconds = Math.floor((endTime - startTime) / 1000);
    const iqScore = calculateIQ(score, timeInSeconds);
    
    document.getElementById('final-iq-score').textContent = iqScore;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('completion-time').textContent = formatTime(timeInSeconds);
    
    loadingScreen.style.display = 'none';
    resultsScreen.style.display = 'block';
}

function finishTest() {
    showLoadingScreen();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1200;
    selectedAnswer = null;
    answeredQuestions.clear();
    
    const resultsScreen = document.getElementById('results-screen');
    const quizContainer = document.getElementById('quiz-container');
    
    if (resultsScreen && quizContainer) {
        resultsScreen.style.display = 'none';
        quizContainer.style.display = 'block';
    }
    
    startTimer();
    loadQuestion();
}


function finishTest() {
    showLoadingScreen();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1200;
    selectedAnswer = null;
    answeredQuestions.clear();
    
    const resultsScreen = document.getElementById('results-screen');
    const quizContainer = document.getElementById('quiz-container');
    
    if (resultsScreen && quizContainer) {
        resultsScreen.style.display = 'none';
        quizContainer.style.display = 'block';
    }
    
    startTimer();
    loadQuestion();
}


function finishTest() {
    showLoadingScreen();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1200;
    selectedAnswer = null;
    answeredQuestions.clear();
    
    const resultsScreen = document.getElementById('results-screen');
    const quizContainer = document.getElementById('quiz-container');
    
    if (resultsScreen && quizContainer) {
        resultsScreen.style.display = 'none';
        quizContainer.style.display = 'block';
    }
    
    startTimer();
    loadQuestion();
}
