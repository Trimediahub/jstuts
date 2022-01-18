
//document.getElementById("count-el").innerText = 5;

//let count = 5;
//count += 1;
//console.log(count);

// initialize the count as 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
	
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