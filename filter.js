let marks=[87,14,164,65,94];
let filterMarks=marks.filter((val)=>{
    return val>100;
})
console.log(`The marks greater than 100 are: ${filterMarks}`);