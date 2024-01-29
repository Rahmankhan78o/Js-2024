const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date()

  clock.innerHTML = date.toLocaleTimeString()
  clock.style.backgroundColor = 'orange'
  clock.style.width = '100px'
},1000)