// let myarray = "Saniya     "
// console.log(myarray.trueLength);



  let myHeros = ["thor" , "spiderman"]

let heroPower = {
  thor: "hammer", 
  spiderman: "sling",

  getSpiderPower: function(){
    console.log( `Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.rahman = function(){
  console.log( `rahman is present in all objects`);
}

Array.prototype.heyrahman = function(){
  console.log(`Rahman says Hello`)
}

// heroPower.rahman( )
myHeros.rahman()
myHeros.heyrahman();

const user = {
  name: "Rahman",
  email: "rahmankhan8439604102@gmail.com"
}

const Teacher = {
  makeVideo : true

}

const TeachingSupport = {
  isAvailable: false

}



const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true, 
  __proto__: TeachingSupport
}


Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "RahmanandSaniya    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()

"rahman".trueLength()
"icetea".trueLength()