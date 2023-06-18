const form = document.querySelector("#form");
const gameOver = document.querySelector("#gameOver");
const startOver = document.querySelector("#startOver");
const countDownElement = document.querySelector("#count-down");
const wordHistoryElement = document.querySelector("#wordHistory");
const levelSelect = document.querySelector("#select");
const currentWordElement = document.querySelector("#input");

let level = "1";
let currentWord;
let wordHistory;
let countDown;
let countDownId;

const initialiseNewGame = () => {
	currentWord = "";
	currentWordElement.value = "";

	wordHistory = [];
	gameOver.style.display = "none";
	startOver.style.display = "none";
	initialiseCountDown();
};

const initialiseCountDown = () => {
	switch (level) {
		case "1":
			countDown = 30;
			break;
		case "2":
			countDown = 20;
			break;
		case "3":
			countDown = 10;
			break;
	}
	countDownElement.textContent = countDown.toString();
};

const startCountDown = () => {
	countDownId = setInterval(() => {
		countDown--;
		countDownElement.textContent = countDown.toString();
		if (countDown == 0) endGame();
	}, 1000);
};

const endGame = () => {
	gameOver.style.display = "block";
	startOver.style.display = "block";
	clearInterval(countDownId);
};

const updateWordHistoryInHtml = () => {
	wordHistoryElement.innerHTML = "";
	wordHistory.forEach((word) => {
		wordHistoryElement.innerHTML += `<p>${word}</p>`;
	});
};

initialiseNewGame();

startOver.addEventListener("click", () => {
	initialiseNewGame();
	updateWordHistoryInHtml();
});

levelSelect.addEventListener("change", function () {
	level = levelSelect.value;
	clearInterval(countDownId);
	initialiseNewGame();
});

form.addEventListener("submit", (event) => {
	event.preventDefault(); // Prevent default form submission behavior

	currentWord = currentWordElement.value;

	if (!wordHistory.length) {
		wordHistory.push(currentWord);
		updateWordHistoryInHtml();
		startCountDown();
	} else {
		let lastWordInHistory = wordHistory[wordHistory.length - 1];
		let lastCharacterOfLastWordInHistory = lastWordInHistory[lastWordInHistory.length - 1];

		let firstCharOfCurrentWord = currentWord[0];

		if (lastCharacterOfLastWordInHistory == firstCharOfCurrentWord) {
			wordHistory.push(currentWord);
			updateWordHistoryInHtml();
			initialiseCountDown();
		} else {
			endGame();
		}
	}

	currentWord = "";
	currentWordElement.value = "";
});
