//message
let option1 = "1 = Addition\n";
let option2 = "2 = Subtraction\n";
let option3 = "3 = Multiplication\n";
let option4 = "4 = Division\n";
let concatMsg = option1 + option2 + option3 + option4;
var choice = window.prompt("Please enter the number corresponding to the operation to perform: \n" + concatMsg);

//getting input from the user
var num1 = window.prompt("Enter the first number: ");
var num2 = window.prompt("Enter the second number: ");

//converting the input into usable numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

//calculations
if (choice == "1") { //addition
    alert("Answer: " + (num1+num2));
} else if (choice == "2") { //subtration
    alert("Answer: " + (num1-num2));
} else if (choice == "3") { //multiplication
    alert("Answer: " + (num1*num2));
} else if (choice == "4") {
   alert("Answer: " + (num1/num2)); //division
} else {
    alert("Invalid option. Please enter a number for your option.");
}



