const user = {
    username : "Rahmankhan",
    price: 9999,

    welcomeMessage: function () {
        console.log (`${this.username}, welcome to company`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "RahmanSaniya"
user.welcomeMessage()

function drink() {
    let name = "rahmankhan"
    console.log(this.name) //this work only object
}
drink();


const chai = () => {
    let name = "Rahman Khan"
    console.log(this.username)
}

chai()


// arrow function

const chaione = (num1 , num2) => {
    return num1 + num2
   
}
console.log(chaione(7,5))

//  implicit return

const chaitwo = (num1 , num2) => (num1 + num2)

console.log(chaitwo(5,8))

const drinkchai = () => ({username: "SaniyaRahman"})

console.log(drinkchai())