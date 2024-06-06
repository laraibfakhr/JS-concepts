let stringVowels =prompt("Enter a string to check the vowels");
let count =0;
for(let char in stringVowels){
if(char=='a' || char=='e' || char=='i' || char=='o'|| char=='u'){    
    count++
}


}
console.log(`The number of vowels in ${stringVowels} are ${count}`);
