const buttons =  document.querySelectorAll('.button')

const body = document.querySelector("body")


buttons.forEach(function(color) {
  console.log(color)
  color.addEventListener('click' , function(saniya) {

    console.log(saniya)
    console.log(saniya.target)
    if (saniya.target.id === 'grey') {
      body.style.backgroundColor = saniya.target.id
    }
    if (saniya.target.id === 'white') {
      body.style.backgroundColor = saniya.target.id
    }
    if (saniya.target.id === 'blue') {
      body.style.backgroundColor = saniya.target.id
    }
    if (saniya.target.id === 'yellow') {
      body.style.backgroundColor = saniya.target.id
    }
    if (saniya.target.id === 'purple') {
      body.style.backgroundColor = saniya.target.id
    }

  })

})