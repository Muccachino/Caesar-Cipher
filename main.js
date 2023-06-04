"use strict";

let input = document.getElementById("input");
let output = document.getElementById("output");
let shift = document.getElementById("shiftNumber");
let button = document.getElementById("shiftButton");

const cipher = () => {
  let textInput = input.value;
  let shiftNum = parseInt(shift.value);
  let textList = [];
  for (let i = 0; i < textInput.length; i++) {
    let afterShift = textInput.charCodeAt(i);
    console.log(afterShift);
    if (afterShift != 32) {
      if (afterShift > 64 && afterShift < 91) {
        afterShift = (afterShift - 65 + shiftNum) % 26;
        console.log(afterShift);
        if (afterShift < 0) {
          afterShift += 26;
        }
        afterShift += 65;
      } else if (afterShift > 96 && afterShift < 123) {
        afterShift = (afterShift - 97 + shiftNum) % 26;
        if (afterShift < 0) {
          afterShift += 26;
        }
        afterShift += 97;
      }
    }
    textList.push(String.fromCharCode(afterShift));
  }
  output.value = textList.join("");
  return output;
};

button.addEventListener("click", cipher);
