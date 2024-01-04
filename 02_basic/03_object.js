// singleton object

// object literals


const mySum = Symbol("key1")

const rkjs = {
    name: "Rahman khan",
    age : 23,
    [mySum] : "mykey1",

    Location: "Noida",
    email: "Rahmankhan8439604102@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"]
}

console.log(rkjs)
console.log(rkjs.email)
console.log(rkjs["email"])
console.log(rkjs[mySum]) //symbol


rkjs.email = "farman319@gmail.com"
console.log(rkjs)
Object.freeze(rkjs)
rkjs.email = "rahman786@gmail.com"
console.log(rkjs)


rkjs.greeting = function() {
    console.log("Hello js user")

}

rkjs.greetingtwo = function() {
    console.log(`Hello js user , ${this.name}`);
}

 console.log(rkjs.greeting())
console.log(rkjs.greetingtwo())