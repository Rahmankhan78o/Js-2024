// reduce array

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and Currval: ${currval}`)
  return acc + currval
},0)

console.log(myTotal)

const shopingCart = [
  {
    itemName:"js Course",
    price : 2999
  },
  {
    itemName:"py Course",
    price : 999
  },
  {
    itemName:"java Course",
    price : 1999
  },
  {
    itemName:"react js Course",
    price : 7999
  },
  {
    itemName:"mobile development Course",
    price : 17999
  },
]

const priceTotal = shopingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceTotal)