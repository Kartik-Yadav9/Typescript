"use strict";
// function aa(add){
//     return add + 5
// }                               //this function has any keyword because no specific type is defined
Object.defineProperty(exports, "__esModule", { value: true });
// let ans =aa(5)
// console.log(ans);
function user(name, isDone, phNumber) {
    if (isDone === void 0) { isDone = true; }
    if (phNumber === void 0) { phNumber = 12345; }
    console.log("My name is ".concat(name, " and number is ").concat(phNumber));
}
user('Kartik'); //Sets a default value true and number if no value is provided when calling the function
function returnType(sub) {
    console.log(sub - 2);
    return 'kartik'; //in return pass string onlt otherwise there will be error
}
//arrow function
var secondExample = function () {
    return 123;
};
exports.default = {};
