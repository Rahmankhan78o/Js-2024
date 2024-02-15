const User = {
  _email: 'r@hm.com',
  _password : "rahman",


  get email(){
    return this._email.toUpperCase()
  },
 
  
  set email(value) {
     this._email = value
  }
}

const tea = Object.create(User)
console.log(tea.email);
  
  