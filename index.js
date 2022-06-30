document.getElementById("min").innerText="test";


// setInterval(function () {
//     var t=2;
    
//     document.getElementById("min").innerText=t-1;}, 60000);

// var t=60;
// while(t>0){
//         t--;

// setInterval(function () {
    
//     document.getElementById("min").innerText=t;}, 1000);
// }

var x = 60;
var intervalID = setInterval(function () {

    document.getElementById("min").innerText=x;
   if (--x === -1) {
       window.clearInterval(intervalID);
   }
}, 1000);