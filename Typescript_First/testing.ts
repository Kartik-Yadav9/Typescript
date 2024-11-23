//-------------------------------------------------------NUMBER-------------------------------------------------

// let age:number = 25                             //let can be used in block scope({}) that's why using it

// // age= "kartik"                                   //it will show error because number is assigned not string
// console.log();

// export {}                                       //Adding export {} turns the file into a module, scoping all its variables to the file itself
                                             







//-------------------------------------------------------STRING--------------------------------------------------

// let str: string = "kartik"

// str.toUpperCase()                           //will give all methods related to string










//------------------------------------------------------BOOLEAN---------------------------------------------------

// let bool: boolean = false

// bool.valueOf()                            //will provide methods








//--------------------------------------------------ANY-------------------------------------------------------------

// function anyKeyword():any{
//     return "hi"
// }

// let ans =anyKeyword()
// console.log(ans);






// let ans                                 //declaring over here it is using any keyword

// let ans: string                            //here declared string means, u cannot return number or boolean

// function anyKeyword(){
//     return "hi"
// }
                                            
//  ans =anyKeyword()
// console.log(ans);











//-----------------------------------array-------------------------------------------------

// let arra: number[]= [1,2,3,4]                //number
// console.log(arra);   





// let str: string[]= ['i', 'am', 'kartik']        //string
// console.log(str);





//object into array

// let objArr: {}[]= [{}, {}, {}]
// console.log(objArr);




//declare type inside object, in array

// let inobj: {name:string, age:number}[]= [{name:"Kartik", age: 25}, {name:"Iswar", age: 14}]
// console.log(inobj[1].age);





















//-----------------------------------object-------------------------------------------------

// let obj1:{
//     name:string;
//     num?:number            //optional chaining, means passing num is optional(?)
// }= {
//     name:'kartik'
// }

// console.log(obj1.name);







// export default {}








//------------------------------------------------------Interface------------------------------------------------


 interface student {
    fname: string,
    age? : number,                // ?...it means it is not important to call  or not
    readonly lname: string        // readonly, property cannot be chnged
    myfun:()=> number
}


//---Re-opening of interface

interface student{
    year: number     //it means i can use it below
}



 {
    let kartik: student= {
        fname: "Kartik",
        lname: "yadav",
        year: 5,
        myfun: function(){                    //can also be done as...()=>{}
            return 1111
        }
    }

    kartik.fname= "Nalin"
    // kartik.lname= "singh"         //readonly wont allow to change


    console.log(kartik.fname);
    console.log(kartik.myfun());
    console.log(kartik.year);
    
    
 }

 
 
