function SetUsername(username){
  this.username = username

}

function createUser(username, email, password){
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}

const rahman = new createUser("rahman" , "rahman@fb.com" , "6156")
console.log(rahman)