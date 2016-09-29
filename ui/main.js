console.log('Loaded!');


var img = document.getElementById('pici');

var marginLeft = 0;

function moveLeft(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    console.log(magrinLeft);
}

img.onclick = function(){
    var interval = setInterval(moveLeft,100);
    console.log('clicked!');
}