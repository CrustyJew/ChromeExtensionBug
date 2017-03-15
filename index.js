window.onload=function(){
  function receiveMessage(e){
    console.log('received message from source: ' + e.source);
    var origin = event.origin || event.originalEvent.origin; 
    e.source.postMessage({'origin':origin,'message':e.data},"*");
  }
window.addEventListener('message',receiveMessage);}
