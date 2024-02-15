class User{
  constructor (email, password){
    this.email = email;
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
     this._email = value
  }

  get password(){
    return `${this._password}rahman`
  }

  set password(value) {
    this._password = value
  }

}

const rahman = new User("rahman@ai" , "123")
console.log(rahman.password)

console.log(rahman.email)