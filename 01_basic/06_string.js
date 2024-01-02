const name = "Rahman"
const gitrepo = "44"

// console.log(name +  " khan" +  gitrepo )

console.log(`my name is ${name} and my git hub repo is ${gitrepo} and iam a javascript developer`)


const gameName = new String('Rahmankhan')
console.log(gameName[0])


console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,6)
console.log(newString)

const anothertrim = "      Rahman      "
console.log(anothertrim)
console.log(anothertrim.trim())

const data = "Rahman khan Weds Samreen"
console.log(data.replace('Samreen', 'Saniya'))

console.log(data.includes('Rahman'))