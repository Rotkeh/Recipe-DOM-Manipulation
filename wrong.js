// 1.
const logoTextRef = document.querySelector(".logo-text");
logoTextRef.style.color = "#384241";
// 2.
const headerRef = document.querySelector("body > header");
headerRef.style.justifyContent = "start";
// 3.
headerRef.style.borderColor = "lightgray";
// 4.
const recipeNameRef = document.querySelector("#recipe-name");
recipeNameRef.textContent = "Frozen Cheesecake";
// 5.
const iconRef = document.querySelector(".time-container").firstElementChild;
iconRef.classList.add("material-icons");
// 6.
const timeRef = document.querySelector(".time");
timeRef.textContent = "60+ min";
// 7.
const imageRef = document.querySelector("img");
imageRef.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");
// 8.
const ingredientsRef = document.querySelector(".ingredients-container");
ingredientsRef.style.backgroundColor = "#f9f9f9";
// 9.
const ingredientsListBottomRef = document.querySelector(
  ".ingredients-list-bottom"
);
ingredientsListBottomRef.removeChild(
  ingredientsListBottomRef.firstElementChild
);
let ingredient1 = document.createElement("li");
ingredient1.textContent = "15st digestivetex";
let ingredient2 = document.createElement("li");
ingredient2.textContent = "Lite smör";
ingredientsListBottomRef.appendChild(ingredient1);
ingredientsListBottomRef.appendChild(ingredient2);
// 10.
const ingredientsListPastemRef = document.querySelector(
  ".ingredients-list-paste"
);
ingredientsListPastemRef.children[2].textContent = "3tsk vaniljsocker";
// 11.
let ingredient3 = document.createElement("li");
ingredient3.textContent = "400g naturell philadelphiaost";
ingredientsListPastemRef.appendChild(ingredient3);
// 12.
const instructionsRef = document.querySelector(".instructions");
instructionsRef.classList.remove("shadow");
// 13.
const instructionListRef = document.querySelector(".instructions-list");
instructionListRef.children[0].textContent =
  "Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen.";
instructionListRef.children[1].textContent =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionListRef.children[8].textContent = "Ställ in i frysen över natten.";
