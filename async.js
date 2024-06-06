let a=6;
let b=10;


async function testAsync(){
    let resultfromServer= await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await resultfromServer.json());
}

testAsync();
console.log(a+b)
console.log(a-b)