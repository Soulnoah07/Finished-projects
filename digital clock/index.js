
var cHours = document.getElementById('hours');
const cMinutes =document.getElementById('minutes');
const cSeconds =document.getElementById('seconds');
const csession = document.getElementById('session');


function lop(){
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ss = "AM"


if (h > 12){
    h = h - 12
    ss = "PM";
}

h = h < 10 ? "0"+h : h;
m = m < 10 ? "0"+m : m;
s = s < 10 ? "0"+s : s;

cHours.innerText = h;
cMinutes.innerText = m;
cSeconds.innerText = s;
csession,(innerText) = ss;

setTimeout(() => {
    lop()
}, 1000)
}
lop()





