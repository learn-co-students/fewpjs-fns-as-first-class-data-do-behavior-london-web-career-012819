/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time) {
  let timeArray = time.split(":")
  if (parseInt(timeArray[0]) < 12) {
    return "Good Morning"
  } else if (parseInt(timeArray[0]) < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let content = document.getElementById("greeting").textContent =  message;
}
