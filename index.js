/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let splited = time.split(":")
  let clock = splited[0]
  time = parseInt(clock, 10)

  if (time < 12) {
  return "Good Morning";
} else if (time > 12 && time < 17){
  return "Good Afternoon"
} else { 
return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}
