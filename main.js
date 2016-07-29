window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame   ||
    window.mozRequestAnimationFrame      ||
    window.oRequestAnimationFrame        ||
    window.msRequestAnimationFrame       ||
    function (callback) {
    	window.setTimeout(callback, 1000 / 60);
    };
})();

var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = new Vector2(canvas.width/2.0, canvas.height/2);

function clrScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var update = function() {
    clrScreen();

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);

    requestAnimFrame(update);
}
