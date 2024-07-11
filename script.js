// 1.
const recipeNameRef = document.querySelector("#recipe-name");
let recipeName = recipeNameRef.textContent;
console.log(recipeName);
// 2.
let recipeTag = recipeNameRef.tagName;
console.log(recipeTag);
// 3.
const descriptionRef = document.querySelector(".description");
let descriptionFontSize = window.getComputedStyle(descriptionRef).fontSize;
console.log(descriptionFontSize);
// 4.
const imageRef = document.querySelector("img");
let imageAlt = imageRef.getAttribute("alt");
console.log(imageAlt);
// 5.
let imageObj = {
  url: imageRef.getAttribute("src"),
  height: imageRef.clientHeight,
  width: imageRef.clientWidth,
};
console.log(imageObj);
// 6.
const pasteRef = document.querySelector(".ingredients-list-paste");
let pasteChildCount = pasteRef.childElementCount;
console.log(pasteChildCount);
// 7.
const pasteFourthChildRef = pasteRef.children[3];
let pasteFourthChildText = pasteFourthChildRef.textContent;
console.log(pasteFourthChildText);
// 8.
const instructionListRef = document.querySelector(".instructions-list");
let instructionList = [];
for (i = 0; i < instructionListRef.childElementCount; i++) {
  let instruction = {
    order: i + 1,
    text: instructionListRef.children[i].innerText,
  };
  instructionList.push(instruction);
}
instructionList.forEach((e) => {
  console.log(e);
});
