var dvd = document.getElementById('dvd');
var mainElement = document.documentElement;
var colorCounter = 2;
var xIncrement = 1;
var yIncrement = 1;
var dvdWidth = 400;
var dvdHeight = 176.77;
function init() {
    dvd.style.position = 'absolute';
    dvd.style.top = '100px';
    dvd.style.left = '50px';
    document.body.style.backgroundColor = '#222';
    document.body.style.overflow = 'hidden';
    setInterval(frame, 5);
}
function updateColor() {
    if (colorCounter > 7)
        colorCounter = 1;
    dvd.src = "./images/dvdlogo-0".concat(colorCounter, ".svg");
    ++colorCounter;
}
function collisionHandler() {
    console.log("DVD Top: ".concat(dvd.offsetTop));
    console.log("DVD Left: ".concat(dvd.offsetLeft));
    console.log("Main Element Height: ".concat(mainElement.clientHeight));
    console.log("Main Element Width: ".concat(mainElement.clientWidth));
    if (dvd.offsetTop <= 0 || dvd.offsetTop + dvdHeight >= mainElement.clientHeight) {
        yIncrement *= -1;
        updateColor();
    }
    if (dvd.offsetLeft <= 0 || dvd.offsetLeft + dvdWidth >= mainElement.clientWidth) {
        xIncrement *= -1;
        updateColor();
    }
}
function frame() {
    collisionHandler();
    dvd.style.top = "".concat(dvd.offsetTop + yIncrement, "px");
    dvd.style.left = "".concat(dvd.offsetLeft + xIncrement, "px");
}
init();
