interface Person{
    fname:string;
    mname?:string;
    lname:string;
}
function getFullname(person:Person){
    if(person.mname){
        return `${person.fname} ${person.mname} ${person.lname}`;
    }
    else{
        return `${person.fname}  ${person.lname}`;
    }
}

let rohan={fname:'rohan', mname:'rahul', lname:'khandizode'}
console.log(getFullname(rohan));