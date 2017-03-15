
window.setTimeout(function(){
    var ifrmSec = document.createElement("iframe");
    ifrmSec.src = "https://github.com/";
    document.body.appendChild(ifrmSec);
},1000)

window.setTimeout(function(){
    var ifrmNonSec = document.createElement("iframe");
    ifrmNonSec.src = "http://www.json.org/";
    document.body.appendChild(ifrmNonSec);
},5000)

window.setTimeout(function(){
    var ifrmSecNoSrc = document.createElement("iframe");
    document.body.appendChild(ifrmSecNoSrc);
    ifrmSecNoSrc.src = "https://www.w3schools.com";
},10000)