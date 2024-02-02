const promisesOne = new Promise(function (resolve, reject) {

  setTimeout(function () {
    console.log('Async task is complete');
    resolve();
  })

}, 1000)

promisesOne.then(function () {
  console.log("promise consumed")
})

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000)
}).then(function () {
  console.log("async 2 compelte")
})

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "rahman", email: "inforahman@gmail.com" })
  }, 1000)
})

promisethree.then(function (user) {
  console.log(user)

})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "rahmankhan", email: "inforahman@gmail.com" })

    }
    else {
      reject('Error: Somthing Went Wrong')

    }
  }, 1000)
})

promiseFour.then((user) => {
  console.log(user)
  return user.username

}).then((username) => {
  console.log(username);
}).catch(function (error) {
  console.log(error);
}).finally(() => {
  console.log("Promise finnaly sucessfull  complete")
})

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "saniya khan", email: "saniyakhan@gmail.com" })

    }
    else {
      reject('Error: Somthing Went Wrong')

    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);

  }
  catch (error) {
    console.log(error);
  }
}
consumePromiseFive();