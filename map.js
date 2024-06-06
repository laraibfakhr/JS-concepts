let nums=[12,31,45];
let newarr=nums.map((val)=>{
    return val+3;
})

let even=[2,3,5,6,8,10,12,31];
let evenArray=even.map((val)=>{
    if(val%2===0)
        return val;
})
console.log(evenArray);


let even1=[2,3,5,6,8,10,12,31];
let evenArray1=even.filter((val)=>{
   return val%2===0
})
console.log(evenArray);
