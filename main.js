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
    if (afterShift != 32) {
      afterShift += shiftNum;
    }
    textList.push(String.fromCharCode(afterShift));
  }
  output.value = textList.join("");
  console.log(output);
  return output;
};

button.addEventListener("click", cipher);
