const tempretur = 41;

if(2 < 3) {
    console.log("tempretur is very cool" )
}
else{
    console.log("tempreture is very hot")
}

const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`rahman coder and , ${power}`)
}
// console.log(`user ${power}`) not required for const and let for block scope 

const UserLogedIn = true;
const debitCard = true;
const UserGoggleLogedIn = false;
const UserEmailLogedIn =  true;

if(UserLogedIn && debitCard) {
    console.log("user buy a Course from Rahman khan ")
}

if(UserEmailLogedIn || UserGoggleLogedIn ){
       console.log("user loged in ")
}
else{
    console.log("Password Incorrect")
}