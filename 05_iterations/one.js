// for loop

for(let i = 0; i<=10; i++ ){
    const element = i; 
    console.log(element)
}


for(i = 0; i<=10; i++){
    console.log(`Outer loop value: ${i}`)

    for(j=0; j<=10; j++){
        // console.log(`Inner loop value : ${j} , outer loop value: ${i}`)
        console.log(i + "*" + j + "=" + i*j)
    }
    const myArr = ["bollywod" , "south" , "hollywod"]
    console.log(myArr.length);
    for (let index = 0; index < myArr.length; index++) {
       
        const element = myArr[index];
        console.log(element)
        
        
    }
}

// break and continue

for (let index = 0; index < 20; index++) {

    if(index == 5){
        console.log(`detected is 5`)
        break;
    }
console.log(`value of i is : ${index}`)
    
}

for (let index = 0; index < 20; index++) {

    if(index == 5){
        console.log(`detected is 5`)
        continue;
    }
console.log(`value of i is : ${index}`)
    
}