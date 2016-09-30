//counter
var button =  document.getElementById("counter");
var counter = 0;
var span = document.getElementById("count");
button.onclick = function(){
    
    
    counter = counter +1;
    span.innerHTML= counter.toString();
}