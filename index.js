/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const hour = timeString.split(":")[0]
  const hourInt = parseInt(hour)

  if (hourInt < 12) {
    return "Good Morning"
  } else if ((hourInt > 12) && (hourInt < 17)) {
    return "Good Afternoon"
  } else if (hourInt > 17) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(text) {
  const h1 = document.querySelector("#greeting")
  h1.textContent = text
}
