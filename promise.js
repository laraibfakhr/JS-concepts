//PROMISE FUNCTION TO CHECK TRUE OR FALSE
// function prom(complete){
//     return new Promise(function(resolve,reject){
//         console.log("Fetching Data, give me some time")
//         setTimeout(()=>{
//             if(complete){
//                 resolve("I am successful");
//             }
//             else{
//                 reject("I am failed!");
//             }
//         }, 3000)
//         });


//     }

//     let onfulfilment = (result) => {
//         console.log(result);
//     }
//     let onrejection = (error) => {
//         console.log(error)
//     }

//     prom(false).then(onfulfilment).catch(onrejection);
       

//PROMISE FUNCTION TO CHECK ANSWERS OF VALUES

function prom(a){
    return new Promise(function(resolve,reject){
        console.log("Fetching Data, give me some time")
        var c = a%5;
        setTimeout(()=>{
            if(c==0){
                resolve(`${a} is divisible by 5`);
            }
            else{
                reject(`${a} is not divisible by 5`);
            }
        }, 3000)
        });


    }

    let onfulfilment = (result) => {
        console.log(result);
    }
    let onrejection = (error) => {
        console.log(error)
    }

    prom(66).then(onfulfilment).catch(onrejection);
       
    

