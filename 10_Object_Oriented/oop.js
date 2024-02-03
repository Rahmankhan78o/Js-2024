// object literals

const user = {
  username: "rahman",
  logingCount: '18',
  signedIn: true,

  getUserDetails: function () {
    console.log("Rahman khan get Logged in ")
  }
}

console.log(user.username)
console.log(user.getUserDetails())


// constructre function- new keyword

function User(username, loginCount, isLoogedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoogedIn = isLoogedIn
  return this
}


const userOne = new User("Rahman" , 12 , true)
const usertwo = new User("saniya" , 12 , true)

console.log(userOne)
console.log(usertwo)