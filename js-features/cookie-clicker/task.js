const image = document.getElementById("cookie");
const counterText = document.getElementById("clicker__counter");
let counterNumber = Number(counterText.textContent);

image.onclick = function() {
	if (image.width === 200) {
		image.width = 250;

	} else {
		image.width = 200;

	}
	counterNumber += 1;
	counterText.textContent = counterNumber;
}