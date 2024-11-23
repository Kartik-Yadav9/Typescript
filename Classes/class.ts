
    class Car{

        color: string
        brand: string
        price: number

        constructor(color:string, brand:string, price:number){
            this.color=color
            this.brand=brand
            this.price=price
        }

        myfun(){
            console.log(`color: ${this.color}, brand: ${this.brand}, price: ${this.price}`);
        }
    }

    let user1= new Car('red','audi', 1)
    user1.myfun()




    //-----------------------------Inheritance-----------------------------------------

    class BMW extends Car{

        stylish : number

        constructor(color:string, brand:string, price:number ,style: number){
            super(color,brand, price )
            this.stylish= style
        }

        // myfun2(){
        //     super.myfun()                //inherit
        // }

        myfun2(){
            console.log(`color: ${this.color}, brand: ${this.brand}, price: ${this.price}, style: ${this.stylish}`)
        }
    }


    let user2= new BMW('white', 'BMW', 4,1)
    user2.myfun2()