function multiplieBy5(num) {
  return num*5

}

multiplieBy5.power = 2

console.log(multiplieBy5(5))
console.log(multiplieBy5.power)
console.log(multiplieBy5.prototype)

function createUser(username, score) {
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++

}

createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}




const chai = new createUser("chai" , 25)
const tea =   createUser("tea" ,250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used: 

A new object is created The new keyword initiates the creation of a new JavaScript object. 

A prototype is linked: The newly crated object gets linked to the prototype of the constructor function. This means that it has access to properties and methods defined on teh constructor's prototype, 

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object . If  no explicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be teh intended return value.

The new object is returned: After the cosntructor function has been called if it doesn't return a non-primitive value (Object, array, function ,etc.) , the newly created object is returned.



*/