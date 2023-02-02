function getFullname(person) {
    if (person.mname) {
        return "".concat(person.fname, " ").concat(person.mname, " ").concat(person.lname);
    }
    else {
        return "".concat(person.fname, "  ").concat(person.lname);
    }
}
var rohan = { fname: 'rohan', mname: 'rahul', lname: 'khandizode' };
console.log(getFullname(rohan));
