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
var Car = /** @class */ (function () {
    function Car(color, brand, price) {
        this.color = color;
        this.brand = brand;
        this.price = price;
    }
    Car.prototype.myfun = function () {
        console.log("color: ".concat(this.color, ", brand: ").concat(this.brand, ", price: ").concat(this.price));
    };
    return Car;
}());
var user1 = new Car('red', 'audi', 1);
user1.myfun();
//-----------------------------Inheritance-----------------------------------------
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(color, brand, price, style) {
        var _this = _super.call(this, color, brand, price) || this;
        _this.stylish = style;
        return _this;
    }
    // myfun2(){
    //     super.myfun()                //inherit
    // }
    BMW.prototype.myfun2 = function () {
        console.log("color: ".concat(this.color, ", brand: ").concat(this.brand, ", price: ").concat(this.price, ", style: ").concat(this.stylish));
    };
    return BMW;
}(Car));
var user2 = new BMW('white', 'BMW', 4, 1);
user2.myfun2();
