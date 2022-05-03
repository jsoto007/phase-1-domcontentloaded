// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
    let p = document.getElementById("text");
    p.innerHTML = "This is really cool!"
});













/* 
--- DOMContentLoaded  event is triggered to safely execute our code. 
By creating a event listener, we can keep out code from immediately firing 
when index.js is loaded.
--- Setting up an event listener for DOMContentLoaded
-- As always, addEventListener takes a string with the name of the event and a callback function. 

*/