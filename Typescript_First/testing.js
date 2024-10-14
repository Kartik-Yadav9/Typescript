"use strict";
//-------------------------------------------------------NUMBER-------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var age = 25; //let can be used in block scope({}) that's why using it
// age= "kartik"                                   //it will show error because number is assigned not string
console.log();
//-------------------------------------------------------STRING--------------------------------------------------
var str = "kartik";
// str.toUpperCase()                           //will give all methods related to string
//------------------------------------------------------BOOLEAN---------------------------------------------------
var bool = false;
// bool.valueOf()                            //will provide methods
//--------------------------------------------------ANY-------------------------------------------------------------
// function anyKeyword(){
//     return "hi"
// }
// let ans =anyKeyword()
// console.log(ans);
// let ans                                 //declaring over here it is using any keyword
var ans; //here declared string means, u cannot return number or boolean
function anyKeyword() {
    return "hi";
}
ans = anyKeyword();
console.log(ans);
