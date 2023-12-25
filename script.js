const quizData = [
{
    question: "Kas Python on back-end või front-end keel?",
    a: "Back-end",
    b: "Front-end",
    c: "Mõlemad",
    d: "Kumbki",
    correct: "a"
},

{
    question: "Mis keelt kasutatakse veebilehtede struktuuri loomisel?",
    a: "Python",
    b: "CSS",
    c: "HTML",
    d: "JavaScript",
    correct: "c"
},
{
    question: "Kuidas märgitakse HTMLis pealkirju?",
    a: "<p></p>",
    b: "<e></e>",
    c: "<P></P>",
    d: "<h1></h1>",
    correct: "d"
},
{
    question: "Mille jaoks läheb vaja CSSi?",
    a: "Et veebilehele struktuur anda",
    b: "Et veebilehe kujundust muuta",
    c: "Et veebilehe struktuuri muuta",
    d: "Et veebileht saaks suhelda andmebaasiga",
    correct: "b"
},
{
    question: "Mis on full-stack?",
    a: "Kõikide keelte oskamine",
    b: "Nii back-end kui front-end valdamine",
    c: "Süvenenud kas front- või back-end keelte valdamine",
    d: "Ühe keele süvenenud valdamine",
    correct: "b"

}
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionEl.innerText = currentQuizData.question;
a_txt.innerText = currentQuizData.a;
b_txt.innerText = currentQuizData.b;
c_txt.innerText = currentQuizData.c;
d_txt.innerText = currentQuizData.d;
quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

// muuda valikut
function deselectAnswers() {
answerEl.forEach((answerEl) => {
    answerEl.checked = false;
});
}

// vali
function getSelected() {
let answer;
answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
    answer = answerEls.id;
    }
});
return answer;
}

btnSubmit.addEventListener("click", function () {
const answers = getSelected();

if (answers) {
    if (answers === quizData[currentQuiz].correct) {
    score++;
    }
    nextQuestion();
}
});

// järgmine
function nextQuestion() {
currentQuiz++;

if (currentQuiz < quizData.length) {
    loadQuiz();
} else {
    quiz.innerHTML = `<h2>Sa vastasid ${score}/${quizData.length} küsimust õigesti!</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
    footerEl.style.display = "none";
}
}