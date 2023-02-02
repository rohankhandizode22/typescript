var Person = /** @class */ (function () {
    function Person(fname1, lname1) {
        this.fname1 = fname1;
        this.lname1 = lname1;
    }
    Person.prototype.toJSON = function () {
        return JSON.stringify({ fname: this.fname1, lname: this.lname1 });
    };
    return Person;
}());
var obj = new Person('rohan', 'singh');
console.log(obj.toJSON());
