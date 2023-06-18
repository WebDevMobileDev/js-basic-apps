let input = document.querySelector("#input");
let form = document.querySelector("#form");
let vertical = document.querySelectorAll(".vertical");
let horizontal = document.querySelectorAll(".horizontal");
let topCenter = document.querySelector("#top_center");
let center = document.querySelector("#center");
let bottomCenter = document.querySelector("#bottom_center");
let topLeft = document.querySelector("#top-left");
let topRight = document.querySelector("#top-right");
let bottomLeft = document.querySelector("#bottom-left");
let bottomRight = document.querySelector("#bottom-right");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let number = input.value;

	horizontal.forEach((h) => (h.style.backgroundColor = "#eee"));
	vertical.forEach((v) => (v.style.backgroundColor = "#eee"));
	switch (number) {
		case "0":
			topCenter.style.backgroundColor = "black";
			bottomCenter.style.backgroundColor = "black";
			vertical.forEach((hor) => (hor.style.backgroundColor = "black"));
			break;
		case "1":
			topRight.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			break;
		case "2":
			horizontal.forEach((hor) => (hor.style.backgroundColor = "black"));
			topRight.style.backgroundColor = "black";
			bottomLeft.style.backgroundColor = "black";
			break;

		case "3":
			horizontal.forEach((hor) => (hor.style.backgroundColor = "black"));
			topRight.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			break;

		case "4":
			topRight.style.backgroundColor = "black";
			topLeft.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			center.style.backgroundColor = "black";
			break;

		case "5":
			horizontal.forEach((h) => (h.style.backgroundColor = "black"));
			topLeft.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			break;

		case "6":
			horizontal.forEach((h) => (h.style.backgroundColor = "black"));
			topLeft.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			bottomLeft.style.backgroundColor = "black";
			break;

		case "7":
			topLeft.style.backgroundColor = "black";
			topCenter.style.backgroundColor = "black";
			topRight.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			break;
		case "8":
			horizontal.forEach((h) => (h.style.backgroundColor = "black"));
			vertical.forEach((v) => (v.style.backgroundColor = "black"));

			break;
		case "9":
			topLeft.style.backgroundColor = "black";
			topCenter.style.backgroundColor = "black";
			topRight.style.backgroundColor = "black";
			bottomRight.style.backgroundColor = "black";
			center.style.backgroundColor = "black";
			bottomCenter.style.backgroundColor = "black";
			break;

		default:
			break;
	}
});
