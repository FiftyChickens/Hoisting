/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let desitination = "Ancient Egypt";
console.log(desitination);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
desitination = "Medieval Europe";
console.log(desitination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
// travelDate = "2025-05-23";

/*
 * Observations:
 * TODO: Explain here.
 * TypeError: Assignment to constant variable
 * This is because constant variables can not have values reassigned
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel);
var timeMachineModel = "T-800";
/*
 * Observations:
 * TODO: Explain here.
 * An error is thrown because timeMachineModel has not been defined in a variable.
 * 
 * Due to hoisting, timeMachineModel variable is created prior to console.log but not assigned a value till after console.log(timeMachineModel) is called.
 */
