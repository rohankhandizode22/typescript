var Car = /** @class */ (function () {
    function Car() {
        this.speed = 50;
    }
    Car.prototype.acc = function () {
        return this.speed += 70;
    };
    Car.prototype.checkSpeed = function () {
        console.log("The Speed of Car is  ".concat(this.speed));
    };
    return Car;
}());
var obj = new Car();
obj.checkSpeed();
obj.acc();
obj.checkSpeed();
