const userinput1 = prompt("first number");
const userinput2 = prompt("second number");

const choice = prompt("choose an option (add, subtract, multiple, divide):");

let result;
switch (choice()) {
    case "add":
      console.log(input1 + input2);
      break;
    case "subtract":
      console.log(input1 - input2);
      break;
    case "multiply":
      console.log(input1 * input2);
      break;
    case "divide":
      console.log(input1 / input2);
      break;