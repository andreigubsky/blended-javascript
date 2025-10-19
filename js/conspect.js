function sayHello(name){
    console.log(name);
}

function processUserInput(callback){
    const userName = "Mark";
    callback(userName)
}

processUserInput(sayHello)

const numbers = [1,2,3,4,5]
const double = numbers.map((num)=>{
    return num*2;
})


const doubled = numbers.reduce((acc,num,index,arr)=>{
    if(num%2===0){
        console.log(acc)
        //acc.push(num)
        if(!acc){
            console.log("error")
        }
        
    }
    
},[])
console.log(doubled)