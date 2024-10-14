//-------------------------------------------------------NUMBER-------------------------------------------------

let age:number = 25                             //let can be used in block scope({}) that's why using it

// age= "kartik"                                   //it will show error because number is assigned not string
console.log();

export {}                                       //Adding export {} turns the file into a module, scoping all its variables to the file itself
                                             







//-------------------------------------------------------STRING--------------------------------------------------

let str: string = "kartik"

// str.toUpperCase()                           //will give all methods related to string










//------------------------------------------------------BOOLEAN---------------------------------------------------

let bool: boolean = false

// bool.valueOf()                            //will provide methods








//--------------------------------------------------ANY-------------------------------------------------------------

// function anyKeyword(){
//     return "hi"
// }

// let ans =anyKeyword()
// console.log(ans);





// let ans                                 //declaring over here it is using any keyword

let ans: string                            //here declared string means, u cannot return number or boolean

function anyKeyword(){
    return "hi"
}
                                            
 ans =anyKeyword()
console.log(ans);


