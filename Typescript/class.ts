class Car{
    speed : number;
    constructor(){
        this.speed=50;
    }
    acc():number{
        return this.speed+=70;
    }
    checkSpeed():void{
        console.log(`The Speed of Car is  ${this.speed}`)

    }

}
const obj=new Car();
obj.checkSpeed();
obj.acc();
obj.checkSpeed();