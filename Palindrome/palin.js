const verifyBtn = document.getElementById("verify");
const palindrome = document.getElementById("palindrome");
const completion = document.getElementById("completion");

const reverse = (s) => {
	return s.split("").reverse().join("");
};

const checkIfPalindrome = (word) => {
	return reverse(word) == word ? true : false;
};

const setResultInUi = (isPalindrome) => {
	isPalindrome
		? (completion.innerText = "The word is a palindrome")
		: (completion.innerText = "The word is not a palindrome");
};

verifyBtn.addEventListener("click", () => {
	setResultInUi(checkIfPalindrome(palindrome.value));
});
