let numberIncrement = 0;

const number = document.getElementById("numbeR");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

plus.addEventListener("click", (e) => {
	e.preventDefault();
	if (plus) {
		number.innerHTML = numberIncrement++;
		increase.style.display = "block";
		decrease.style.display = "none";

	}
});

minus.addEventListener("click", (e) => {
	e.preventDefault();
	if (minus) {
		number.textContent = numberIncrement--;
		decrease.style.display = "block";
		increase.style.display = "none";

	}
});
