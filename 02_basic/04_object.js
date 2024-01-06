const tinderuser = {}

tinderuser.id = "1234"
tinderuser.name = "Rahman"
tinderuser.location = "Deoband"

console.log(tinderuser);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {4 : "c" , 3 : "d"}

// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2};

console.log(obj3)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))


const course = {
    coursename: "js",
    price : "9999",
    courseuser : "Rahman"

}
const {courseuser : user} = course

// console.log(courseuser)

console.log(user);

// json => JavaScript Object Notation 

{
    "name": "Mohmmad Rahman",
    "age": "23"
}