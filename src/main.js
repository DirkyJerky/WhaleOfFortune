import './style.css'

export function setupCounter(element, displayElement) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    displayElement.innerHTML = counter
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

document.addEventListener('DOMContentLoaded', () => {
  setupCounter(document.querySelector('#counter-button'), document.querySelector('#counter-value'))
})
