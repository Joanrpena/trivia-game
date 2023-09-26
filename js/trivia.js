/*Call the first variable questionDiv and select the DOM element containing the #question id.
Call the second variable answerDiv and select the DOM element containing the #answer id.
Call the third variable feedbackDiv and select the DOM element containing the #feedback id.
Create a fourth variable using let and call it currentQuestion, and give it an initial value of null. This variable will store the question that is returned from the Promise. */


const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');

let currentQuestion = null;

function getTriviaQuestion() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        const index = Math.floor(Math.random() * questions.length);
        const question = questions[index];
        if(index > questions.length) {
            reject('An error has occured while fetching the trivia question.');
        } else {
            resolve(question);
        }
        }, 1000);
    });
}

function displayQuestion (triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = '';
    feedbackDiv.textQuestion = '';
}

document.getElementById('questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) => {
        console.error(error);
    })
})

document.getElementById('answerBtn').addEventListener('click', () => {
    let feedbackMessage;
    const userAnswer = answerDiv.value.trim().toLowerCase();
    console.log(userAnswer, currentQuestion.answer);
    if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
        feedbackDiv.style.color = 'green';
        feedbackDiv.style.fontWeight = '500';
        feedbackMessage = "Great job! Your answer is correct. ";
    } else{
        feedbackDiv.style.color = 'red';
        feedbackDiv.style.fontWeight = '500';
        feedbackMessage = `Sorry that was incorrect. The answer is ${currentQuestion.answer} try again!`;
    }
    feedbackDiv.textContent = feedbackMessage;
})