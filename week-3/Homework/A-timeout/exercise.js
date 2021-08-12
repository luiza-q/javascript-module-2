/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

//setTimeout(function(){ document.body.style.backgroundColor = 'pink' }, 5000);

setInterval(changeBackgroundColor, 5000);

let backgroundColorOptions = ['pink', 'blue', 'grey', 'yellow', 'orange', 'red'];
let index = 0;

function changeBackgroundColor (){
    if (index > backgroundColorOptions.length - 1) {
        index = 0;
    }
    document.body.style.backgroundColor = backgroundColorOptions[index];
    index++;
}