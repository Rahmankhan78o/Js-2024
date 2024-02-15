const descripter = Object.getOwnPropertyDescriptor(Math , "PI")

console.log(descripter)


const rahman = {
  name: "saniya",
  email: "rahman@gmail.com",
  isAvailable: true,
  price: 1000
}

console.log(Object.getOwnPropertyDescriptor(rahman, "name"))

Object.defineProperty(rahman, 'name' , {
  // writable: false,
  enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(rahman , "name"))

for (let[ key, value] of Object.entries(rahman)) {

  if(typeof value !== "function")
  {
    console.log(`${key} : ${value}`)
  }

  

}