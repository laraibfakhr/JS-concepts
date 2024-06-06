// class Car{
//     stop(){
//         console.log("I am a stop function within the class CAR")
//     }

//     start(){
//         console.log("I am a start function within the class CAR")
//     }
// }
// class Toyota extends Car{
//     constructor(color){
//       //  super();
//         this.color="Blue";
//     }
// }

// let ToyotaObj = new Toyota();

class User{
    constructor(name,email){
    this.name=name;
    this.email=email;
    }
    viewDate(){
        console.log(`The name of the user is ${this.name} & the email address of the user is: ${this.email} `)
    }
}

