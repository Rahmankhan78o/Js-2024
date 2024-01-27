// for of

["" , "" , ""]
[{} , {} , {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
  console.log(num)
}

const greeting = "Rahman weds Saniya"

for (const greet of greeting) {
  console.log( `Each char is ${greet}`)

  
}

// maps

const map  = new Map()
map.set('In' , "India")
map.set('use' , "United State")
map.set('fr' , "france");

console.log(map)

for (const [key, value] of map) {
  console.log(key, '->', value)
} 