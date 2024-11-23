

//------------------------------------PUBLIC---- PROTECTED ----PRIVATE--------------------------------------------


class Parent{

    public name: string
    protected rollno: number
    private age: number

    constructor(name:string, rollno:number, age: number){
        this.name= name
        this.rollno= rollno
        this.age= age
    }

    myfun2(){
        console.log(`name: ${this.name}, rollno: ${this.rollno} age: ${this.age}`)
        
    }
}



class Child extends Parent{
    section: number

    constructor(name:string, rollno:number, age: number){
        super(name,age,rollno)
    }

    myfun(){
        console.log(`name: ${this.name}, rollno: ${this.rollno} `);    //age: ${this.age}, cannot acces age becoz it is prvt.
        
    }

}


let user11= new Parent("kartik", 2,4)  //roolno and age  will not be printed bcoz protected and  prvt
console.log(user11.name);


