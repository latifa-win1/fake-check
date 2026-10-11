// Вопросы для теста
const questions = [
{ text: "СРОЧНО!!! С завтрашнего дня все банковские карты заблокируют. Перешли всем!", answer: "fake" },
{ text: "Центробанк сообщил о решении по ключевой ставке. Подробности — в пресс-релизе на официальном сайте.", answer: "true" },
{ text: "Государство выплатит каждому 15 000 ₽. Чтобы получить деньги, введите данные карты по ссылке.", answer: "fake" },
{ text: "В метро закрыли вход из-за ремонта эскалаторов. Расписание опубликовано на сайте метрополитена.", answer: "true" },
{ text: "Вам звонит «служба безопасности банка»: назовите код из СМС.", answer: "fake" },
{ text: "Библиотеки продлили часы работы в выходные. Новый график на сайте администрации.", answer: "true" }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
if (currentQuestion < questions.length) {
document.getElementById("question-text").innerText = questions[currentQuestion].text;
document.getElementById("result-text").innerText = "";
document.getElementById("question-number").innerText = `ВОПРОС ${currentQuestion + 1}/${questions.length}`;
} else {
document.getElementById("question-text").innerText = "Тест завершен!";
document.getElementById("buttons-container").style.display = "none";
document.getElementById("result-text").innerText = `Твой результат: ${score} из ${questions.length}`;
document.getElementById("question-number").innerText = "ГОТОВО!";
document.getElementById("score-display").innerText = `СЧЁТ: ${score}`;
}
}

function checkAnswer(userAnswer) {
const correctAnswer = questions[currentQuestion].answer;

if (userAnswer === correctAnswer) {
score++;
document.getElementById("result-text").innerText = "✅ Верно!";
} else {
document.getElementById("result-text").innerText = "❌ Ошибка!";
}

document.getElementById("score-display").innerText = `СЧЁТ: ${score}`;
currentQuestion++;

setTimeout(() => {
showQuestion();
}, 1000);
}

function updateProgress() {
const total = 4; // Всего 4 галочки
const checked = document.querySelectorAll('.check-item input:checked').length;
const percent = Math.round((checked / total) * 100);

document.getElementById('progress-num').innerText = percent + '%';
document.getElementById('progress-fill').style.width = percent + '%';
}

// Запуск теста при загрузке
showQuestion();