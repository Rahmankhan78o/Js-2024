const userdata = []

if(userdata){
    console.log("user a login data")
}
else {
    console.log("user not loged in")
}

// falsy values

// false, 0 , -0 , BigInt on,  "" , null  , undefined , nan

// truthy values

// "0" , "false" , " " , [] , {} , function(){}

if(userdata.length === 0){
    console.log("array is empty")
}
else{
    console.log("array is not empty")
}

const objempty = {}

if(Object.keys(objempty).length === 0){
    console.log("obj is empty")
}

// nullish coalescing operator (??) : null undefined

let val1;
val1 = null ?? 10
// val1  = undefined ?? 15;

console.log(val1)

// ternary operator

let iceteaprice = 100

iceteaprice >=80 ? console.log("less then 80") : console.log("more than 80")