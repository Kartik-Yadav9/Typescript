
// function aa(add){
//     return add + 5
// }                               //this function has any keyword because no specific type is defined

// let ans =aa(5)
// console.log(ans);











function user(name: string, isDone: boolean= true, phNumber: number = 12345){
    console.log(`My name is ${name} and number is ${phNumber}`);    
}

user('Kartik')  //Sets a default value true and number if no value is provided when calling the function












function returnType(sub): string{

    console.log(sub -2);
    
    return 'kartik'      //in return pass string onlt otherwise there will be error
}



//arrow function

let secondExample= () : number=> {
    return 123
}





export default {}

