//------------------------------------PUBLIC---- PROTECTED ----PRIVATE--------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(name, rollno, age) {
        this.name = name;
        this.rollno = rollno;
        this.age = age;
    }
    Parent.prototype.myfun2 = function () {
        console.log("name: ".concat(this.name, ", rollno: ").concat(this.rollno, " age: ").concat(this.age));
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, rollno, age) {
        return _super.call(this, name, age, rollno) || this;
    }
    Child.prototype.myfun = function () {
        console.log("name: ".concat(this.name, ", rollno: ").concat(this.rollno, " ")); //age: ${this.age}, cannot acces age becoz it is prvt.
    };
    return Child;
}(Parent));
var user11 = new Parent("kartik", 2, 4); //roolno and age  will not be printed bcoz protected and  prvt
console.log(user11.name);
