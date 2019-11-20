"use strict";

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");


const getRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
};
const randomNumber = getRandomNumber(100);
console.log(randomNumber);


const getAClue = function (event) {
    event.preventDefault();
    if (input.value < randomNumber) {
        document.querySelector(".js-paragraph1").innerHTML = "Pista: Demasiado bajo"
    }
    else if (input.value > randomNumber) {
        document.querySelector(".js-paragraph1").innerHTML = "Pista: Demasiado alto"
    }
    else {
        document.querySelector(".js-paragraph1").innerHTML = "¡Has ganado campeona!"
    }

}

button.addEventListener("click", getAClue);
