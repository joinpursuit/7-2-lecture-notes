// Giving the H1 tag a random number from 1 - 10
document.getElementById('randomNum').innerText = Math.floor(Math.random()* 10 + 1)

// Develop a feature that takes in a user's number input
// and multiple that number with the number inside of the h1 after clicking
// a button event.
// Then replace the h1 text with the product of those two numbers.
// Write your solution using querySelector

const multiply = () => {
    let h1 = document.querySelector("#randomNum");
    let number = Number(document.querySelector("#numInput").value);
    let randomNum = Number(document.querySelector("#randomNum").textContent);
    h1.textContent = number + randomNum
}