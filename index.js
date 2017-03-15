window.onload=function(){
  function receiveMessage(e){
    var origin = event.origin || event.originalEvent.origin; 
    e.source.postMessage({'origin':origin,'message':e.data},"*");
  }
window.addEventListener('message',receiveMessage);}
