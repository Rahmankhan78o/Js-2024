const myobj = {
 js: "javascript",
 rb: "ruby",
 cpp: "c++",
 py: "python",
 swift: "Swift for mac"
 
}

for (const key in myobj) {
  console.log(`${key} shortcut for ${myobj[key]}`)
}

const programming  = ["js", "py" , "cpp" , "swift"]

for (const key in programming) {
  console.log(programming[key])

}
