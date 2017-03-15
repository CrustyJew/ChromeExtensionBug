window.onload = function(){
    var frame = document.createElement('iframe');
    frame.src = 'https://crustyjew.github.io/ChromeExtensionBug/';
    document.body.appendChild(frame);

    window.addEventListener('message',function(e){
    console.log("message received: " + JSON.stringify(e.data));
});
    console.log('posting message to iframe');
    
    frame.addEventListener('load',function(){
        frame.contentWindow.postMessage("TestMessage","*");
    });
};
