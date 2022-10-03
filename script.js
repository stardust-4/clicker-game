////////////////////////////////
// Global Variables Here
const cookie = document.querySelector('.cookie')
let counter = document.querySelector('.counter')
let wallet = 0

const upgrade1 = document.querySelector('#upgrade1')
const upgrade1HTML = document.querySelector('.upgrade1HTML')
let upgrade1activation = false

const upgrade2 = document.querySelector('#upgrade2')
const upgrade2HTML = document.querySelector('.upgrade2HTML')
let upgrade2activation = false

const upgrade3 = document.querySelector('#upgrade3')
const upgrade3HTML = document.querySelector('.upgrade3HTML')
let upgrade3activation = false

const upgrade4 = document.querySelector('#upgrade4')
const upgrade4HTML = document.querySelector('.upgrade4HTML')
let upgrade4activation = false

const upgrade5 = document.querySelector('#upgrade5')
const upgrade5HTML = document.querySelector('.upgrade5HTML')
let upgrade5activation = false

const upgrade6 = document.querySelector('#upgrade6')
const upgrade6HTML = document.querySelector('.upgrade6HTML')
let upgrade6activation = false

////////////////////////////////
// Functions For Game Logic Here
const addOne = () => {
  wallet += 1
  console.log(wallet)
  counter.innerHTML = wallet
}

const addTwo = () => {
  if (upgrade1activation === true) {
    wallet += 2
    counter.innerHTML = wallet
  }
}

const addFive = () => {
  if (upgrade2activation === true) {
    wallet += 5
    counter.innerHTML = wallet
  }
}

const activateUpgrade1 = () => {
  if (wallet >= 10) {
    console.log('upgrade1 is linked')
    wallet -= 10
    counter.innerHTML = wallet
    upgrade1HTML.style.background = 'blue'
    upgrade1HTML.innerHTML = 'upgrade one'
    upgrade1activation = true
  } else {
    alert('not enough funds')
  }
}
const activateUpgrade2 = () => {
  console.log('upgrade2 is linked')
  upgrade2HTML.style.background = 'blue'
  upgrade2HTML.innerHTML = 'upgrade two'
}
const activateUpgrade3 = () => {
  console.log('upgrade3 is linked')
  upgrade3HTML.style.background = 'blue'
  upgrade3HTML.innerHTML = 'upgrade three'
}
const activateUpgrade4 = () => {
  console.log('upgrade4 is linked')
  upgrade4HTML.style.background = 'blue'
  upgrade4HTML.innerHTML = 'upgrade four'
}
const activateUpgrade5 = () => {
  console.log('upgrade5 is linked')
  upgrade5HTML.style.background = 'blue'
  upgrade5HTML.innerHTML = 'upgrade five'
}
const activateUpgrade6 = () => {
  console.log('upgrade6 is linked')
  upgrade6HTML.style.background = 'blue'
  upgrade6HTML.innerHTML = 'upgrade six'
}

// When the user clicks anywhere outside of the modal, close it

////////////////////////////////
// Event Listeners Here
cookie.addEventListener('click', addOne)
upgrade1HTML.addEventListener('click', addTwo)
upgrade1.addEventListener('click', activateUpgrade1)
upgrade2HTML.addEventListener('click', addFive)
upgrade2.addEventListener('click', activateUpgrade2)
upgrade3HTML.addEventListener('click', addTen)
upgrade3.addEventListener('click', activateUpgrade3)
upgrade4HTML.addEventListener('click', addFifty)
upgrade4.addEventListener('click', activateUpgrade4)
upgrade5HTML.addEventListener('click', addHundred)
upgrade5.addEventListener('click', activateUpgrade5)
upgrade6HTML.addEventListener('click', autoClicker)
upgrade6.addEventListener('click', activateUpgrade6)

////////////////////////////////

// Modal, code sourced from W3
var modal = document.getElementById('myModal')
var btn = document.getElementById('myBtn')
var span = document.getElementsByClassName('close')[0]
btn.onclick = function () {
  modal.style.display = 'block'
}
span.onclick = function () {
  modal.style.display = 'none'
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
