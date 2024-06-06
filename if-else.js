let score=prompt("Enter the score of students:");
let grade;
if(score>=90 && score<=100){
grade="A"
console.log(`The grade of the student is ${grade}`)
}
else if(score>=70 && score <=89){
    grade="B"
    console.log(`The grade of the student is ${grade}`)
}
else{
    grade="C"
    console.log(`The grade of the student is ${grade}`) 
}