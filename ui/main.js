console.log('Loaded!');
var img = document.getElementById('pici');
var marginLeft = 0;
function moveLeft(){
    magrinLeft = marginLeft +50;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveLeft,50);
}