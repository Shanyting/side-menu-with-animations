$(document).ready(function() {
  let btn = document.getElementById('dropbtn');
  let content = document.getElementById('myDropdown');
  let drop = document.getElementById('dropdown');

  btn.addEventListener("click", function() {
    content.classList.toggle("show");
  })
})

function hourglass() {
  let hourglass = document.getElementById("hourglass");
  hourglass.innerHTML = "&#xf251;";
  setTimeout(function() {
    hourglass.innerHTML = "&#xf252;";
  },1000);

  setTimeout(function() {
    hourglass.innerHTML = "&#xf253;";
  },2000);
}

hourglass();
setInterval(hourglass, 3000);

function batteryCharging() {
  let batteryCharging = document.getElementById("battery-charging");
  batteryCharging.innerHTML = "&#xf244;";
  setTimeout(function() {
    batteryCharging.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function() {
    batteryCharging.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function() {
    batteryCharging.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function() {
    batteryCharging.innerHTML = "&#xf240;";
  }, 4000);
}

batteryCharging();
setInterval(batteryCharging, 5000);