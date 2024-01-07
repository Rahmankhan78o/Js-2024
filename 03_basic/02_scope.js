// Global Scope

let a = 300

// block scope

if(true){
    let a = 100
    const b = 300
    console.log("inner:" , a)


}
console.log(a)

// nested function

function one() {
    const username = "rahman"
    
    function two () {
        const webapp = "github"
        console.log(username)

    }
    // console.log(webapp) not required

    two()
}

one();


if(true) {
    const username = "RahmanKhan"

    if(username === "RahmanKhan"){
        const webapp = " github";
        console.log(username + webapp)

    }
    // console.log(webapp) not required 

}

function addone (num) {
    return num + 1
}

console.log(addone(5))

const addtwo = function (num){
    return num + 2
}
console.log(addtwo(5))
