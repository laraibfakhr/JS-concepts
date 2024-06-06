//Method 1 to call an object
var student = new Object();
student.firstName="Laraib";
//student.subjects={'maths',"science","urdu"}
student.age=19;
console.log(student.firstName);

//Method 2 to call an object
var home={
    address:'Block 15',
    size:25,
    city:'Karachi',
    popularPlace:['PIA Planetarium','Expo','Alamgir']
}
console.log(home.popularPlace);

for(var value in home){
    console.log("The values in the Home objects against key " + value + " is: "+ home[value]);
}