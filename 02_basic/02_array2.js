const bollywod_heros = ["salman" ,"sharukh khan", "john" ]

const south_heros = ["Allu Arjun" , "Ram Charan" , "Parbhas" , "Jr Ntr"]

const hollywod_heros = ["thor"]
 
// concat => add  array 

const all_heros = bollywod_heros.concat(south_heros);
console.log(all_heros)

// spread operator => add two or more array 


const all_new_heros = [...bollywod_heros , ...south_heros , ...hollywod_heros]
console.log(all_new_heros)

// flat => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1,88,66,45,32,56,[5,6,8,4,2,3] ,7,[8,9]]

const new_array = another_array.flat(Infinity)
console.log(new_array)

console.log(Array.from("Rahman"))

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1 , score2 , score3));