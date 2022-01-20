//let count = 5;
//count += 1;
//console.log(count);


/*function increment() {
	
	count += 1;
	
	countEl.textContent = count;
	
}

// eslint-disable-next-line

function save() {
	
	let countStr = count + " - ";
	
	saveEl.textContent += countStr;
	
	countEl.textContent = 0;
} 

save();

let num1 = 8;
let num2 = 5;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
	let sum = num1 + num2;
	sumEl.textContent += " " + sum;
}

function subtract() {
	let sub = num1 - num2;
	
	sumEl.textContent += ", " + sub; 
}
function divide() {
	let total = num1 / num2;
	
	sumEl.textContent += ", " + total;
}
function multi() {
	let total = num1 * num2;
	
	sumEl.textContent += ", " + total;
}
*/

let firstCard = 10;
let secondCard = 11;
let hasBlackJack = false;
let isAlive = true;
let sum = firstCard + secondCard;

if (sum <= 20 ) {
	console.log("Do you want to draw a new card?");
} 

else if (sum === 21 ) {
	console.log("Wohoo! you have blackjack!");
	hasBlackJack = true;
} 

else {
	console.log("Sorry, you're out of the game!");
	isAlive = false;
}

console.log(isAlive);