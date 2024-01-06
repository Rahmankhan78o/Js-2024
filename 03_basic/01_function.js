function sayheros() {
    console.log("Salman")
    console.log("sharukh ")
    console.log("john")
}

sayheros();

function addtwonumber(number1 , number2) {
     return number1 + number2
}


const result = addtwonumber(5, 4)
console.log(result)

function loginUsrMessage(username) {
    return `${username} just logged in`
}

console.log(loginUsrMessage("Rahman"))

function userMessage(username) {

    if(username === undefined){
       console.log("rahman khan dev")
       return
    }
    return `${username} just logged in`
    
}

console.log(userMessage())