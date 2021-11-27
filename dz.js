                      // Абстрактный класс
class Transport {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;
    }
}

const car = new Transport("Car", "Grey", "Hyundai")
const helicopter = new Transport("Helicopter", "Red", "Boeing" )
console.log(car)
console.log(helicopter)



                     // Car
// class Car extends Transport{
//     constructor(name, color, type, model) {
//         super(name, color, type);
//         this.model = model
//     }
//
//     startEngine(){
//         console.log(this.model)
//     }
// }
//
// const car = new Car("Hyundai", "Grey", "Earthy", "Sonata")
// console.log(car)
// car.startEngine()



                     // Helicopter
// class Helicopter extends Transport{
//     constructor(name, color, type, model) {
//         super(name, color, type);
//         this.model = model
//     }
//
//     startEngine(){
//         console.log(this.model)
//     }
// }
//
// const helicopter = new Helicopter("Boeing", "Red", "Airy", "AH-64")
// console.log(helicopter)
// helicopter.startEngine()
