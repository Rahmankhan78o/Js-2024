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

function userMessage(username ="saniya") {

    if(username === undefined){
       console.log("rahman khan dev")
       return
    }
    return `${username} just logged in`
    
}

console.log(userMessage(""))


// function rest operator 

function userloginMessage(...num1)
{
    return num1;


}

console.log(userloginMessage(100,500,600))


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
handleObject({
    username: "rahmansaniya",
    price: 200
})


const newArray = [200,300,400,500]

function handleArray(anyArray) {
    return anyArray[1]

}

console.log(handleArray(newArray))


