const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => { 
  return num > 4; 
} )

console.log(newNums)

const books = [

  {title: "Book One" , genre: "Fiction" , publish: 1981, edition: 2004},
  {title: "Book two" , genre: "Non-Fiction" , publish: 1992, edition: 2008},
  {title: "Book three" , genre: "History" , publish: 1999, edition: 2007},
  {title: "Book Four" , genre: "Non-Fiction" , publish: 1989, edition: 2010},
  {title: "Book five" , genre: "Science" , publish: 2009, edition: 2014},
  {title: "Book Six" , genre: "Fiction" , publish: 1987, edition: 2010},
  {title: "Book Seven" , genre: "History" , publish: 2000, edition: 2024},
  {title: "Book Eight" , genre: "Science" , publish: 2011, edition: 2023 },


]

const userBooks = books.filter( (bk) => bk.genre === "History" )

console.log(userBooks)


let myBooks = books.filter( (bk) => {
   return bk.publish >= 2000
})

console.log(myBooks)