const quizData = [{
    question: "How old is my dog?",
    a: '1',
    b: '2',
    c: '3',
    d: 'You dont have a dog',
    correct: 'c'
}, {
    question: 'What is the best programming language?',
    a: 'Javascript',
    b: 'Java',
    c: 'HTML lol',
    d: 'Python',
    correct: 'b'
}, {
    question: 'Current president of USA?',
    a: "I'm russian",
    b: "Don't care",
    c: "Mr. Trump",
    d: "Dart Waider",
    correct: "c"
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Hamon Tea Melon Lemon',
    correct: 'a'
}, {
    question: 'Mana?',
    a: 'Mana',
    b: 'What?',
    c: 'Who is Mana?',
    d: 'Leave me alone',
    correct: 'a'
}]
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submitBtn')

let currentQuiz = 0;
//let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    deselect();
    // currentQuiz++;
}

const ul = document.getElementById('ul')

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        // console.log(answer.checked)
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    //console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //show results
            if (score == 5 && score >= 5) {
                quiz.innerHTML = `<h2> 🏆 You answered correctly at ${score}/${quizData.length} questions 🏆</h2>` + `<br/> <h2>Don't forget to follow me <a href="https://taplink.cc/dead__angel_" target="_blank"> follow me 🤗</a></h2>` +
                    `<h2> Would you like to do quiz one more time?</h2> <br/> <button onClick="window.location.reload(true)" class="reloadbtn" style=" background-image: linear-gradient(180deg, #bb3434 , #974f49 )"> Reload </button>`
            } else if (score <= 4 && score >= 3) {
                quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions 🥳</h2>` + `<br/> <h2> Don't forget to follow me <a href="https://taplink.cc/dead__angel_" target="_blank"> follow me 🤗</a> </h2>` +
                    `<h2> Would you like to do quiz one more time?</h2> <br/> <button onClick="window.location.reload(true)" class="reloadbtn" style=" background-image: linear-gradient(180deg, #bb3434 , #974f49 )"> Reload </button>`
            } else if (score <= 3) {
                quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions 😔</h2>` + `<br/> <h2>Don't forget to follow me <a href="https://taplink.cc/dead__angel_" target="_blank"> follow me 🤗</a> </h2>` +
                    `<h2> Would you like to do quiz one more time?</h2> <br/> <button onClick="window.location.reload(true)" class="reloadbtn" style=" background-image: linear-gradient(180deg, #bb3434 , #974f49 )"> Reload </button>`
            }
            // questionEl.innerText = "You a done with the test, reload page"
            // ul.style.display = "none"
        }
    }



})