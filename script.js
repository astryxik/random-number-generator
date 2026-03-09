function generateNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    let display = document.getElementById("numberDisplay");

    display.textContent = randomNumber;
}