const score = 400;

console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const anotherNumber = 23.8999
console.log(anotherNumber.toPrecision(3))

const hundreads = 1000000

console.log(hundreads.toLocaleString('en-IN'));

//Math
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))


console.log(Math.min(4,5,9,10))
console.log(Math.max(99,45,10,15))

console.log(Math.random())

console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)
