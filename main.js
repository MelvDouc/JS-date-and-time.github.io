let today = new Date();
document.querySelector('#p0-a').innerHTML = today;
document.querySelector('#p0-b').innerHTML = today.toLocaleDateString();

document.querySelector('#p1').innerHTML = today.getFullYear();

document.querySelector('#p2').innerHTML = today.getYear();

document.querySelector('#p3').innerHTML = today.getMonth();

let monthNames = new Array('January', 'February',  'March',  'April',  'May',  'June',  'July',  'August',  'September',  'October',  'November',  'December');
/* e.g. */ let january = monthNames[0];

document.querySelector('#p4').innerHTML = monthNames[today.getMonth()];

//

document.querySelector('#p5').innerHTML = today.getDay();

let dayNames = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
for(let i = 0; i < dayNames.length; i++){
    document.querySelector('#p6').innerHTML += dayNames[i] + ' ';
}

document.querySelector('#p7').innerHTML = today.toLocaleTimeString();

document.querySelector('#p8').innerHTML = today.getTime();

document.querySelector('#span1').innerHTML = today.getHours();
document.querySelector('#span2').innerHTML = today.getMinutes();
document.querySelector('#span3').innerHTML = today.getSeconds();

// Live Clock

let liveClock = document.querySelector('#p12');
/* setInterval() works when stored in a variable. */
let currentTime = setInterval(getCurrentTime, 1000); // Place before defining the function.

function getCurrentTime() { // Not predefined.
    let d = new Date();
    let time = d.toLocaleTimeString(); // Place variables inside the function so they're updated on each call.
    liveClock.innerHTML = time;
}

// Toggle clock button

document.querySelector('#toggle-button').addEventListener('click', function() {
    if(currentTime != false) {
        clearInterval(currentTime);
        currentTime = false;
        this.innerHTML = 'Restart Clock';
    } else if (currentTime == false) {
        currentTime = setInterval(getCurrentTime, 1000);
        this.innerHTML = 'Stop Clock';
    }
})