const language = ["js" , "ruby" , "java" , "python" , "cpp"]

// language.forEach(function (itms) {
//   console.log(itms)
// })

language.forEach( (item) =>{
  console.log(item)
})

function printcode(code){
  console.log(code)
}

language.forEach(printcode)

language.forEach((item, index, arr) =>{
  console.log(item, index, arr)
})

const mycoding = [
  {
    languagename: "javascrip",
    filename: "js"
  },
  {
    languagename: "python",
    filename: "py"
  },
  {
    languagename: "Java",
    filename: "jdk"
  },
  {
    languagename: "Php",
    filename: "echo"
  }
]
 
mycoding.forEach( (item) => {
  console.log(item.filename)
})