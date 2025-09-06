// Declare a variable to store the user's name
let userName = prompt("Please enter your name:");

// Declare a variable to store the user's age using parseInt to ensure it's a number
const userAge = parseInt(prompt("Please enter your age:"), 10);

// Use a conditional statement to check if the user is old enough to vote
if (userAge >= 18) {
  console.log(`Hello, ${userName}! You are ${userAge} years old and are eligible to vote.`);
  // Use a DOM interaction to modify the webpage content
  document.getElementById("message").textContent = `Welcome, ${userName}! You are old enough to vote.`;
} else {
  console.log(`Hello, ${userName}! You are ${userAge} years old and are not eligible to vote.`);
  document.getElementById("message").textContent = `Hello, ${userName}. You're not yet old enough to vote.`;
}

// Declare a boolean variable based on a comparison
let isAdult = userAge >= 18;
console.log(`Is the user an adult? ${isAdult}`);

// A function that calculates the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// A function that formats a string and displays it on the webpage
function formatAndDisplayMessage(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  document.getElementById("fullNameDisplay").textContent = `Formatted Name: ${fullName}`;
}

// Example usage of the functions
let area = calculateRectangleArea(10, 5);
console.log(`The area is: ${area}`);

formatAndDisplayMessage("John", "Doe");

// `for` loop to iterate through an array
const colors = ["red", "green", "blue", "yellow"];

console.log("Here are the available colors:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// `forEach` loop to add list items to a webpage
const fruitList = document.getElementById("fruitList");
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(fruit) {
  // Use a DOM interaction to create and append a new element
  const newListItem = document.createElement("li");
  newListItem.textContent = fruit;
  fruitList.appendChild(newListItem);
});

// DOM Interaction: Change text on a button click
const textButton = document.getElementById("changeTextButton");
const dynamicParagraph = document.getElementById("dynamicParagraph");

textButton.addEventListener("click", () => {
  dynamicParagraph.textContent = "The text has been changed!";
});

// DOM Interaction: Toggle a CSS class on an element
const toggleClassButton = document.getElementById("toggleClassButton");
const boxElement = document.getElementById("box");

toggleClassButton.addEventListener("click", () => {
  boxElement.classList.toggle("highlight");
});

// DOM Interaction: Create and add a new element
const createButton = document.getElementById("createButton");
const contentDiv = document.getElementById("content");

createButton.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph created by JavaScript!";
  contentDiv.appendChild(newParagraph);
});