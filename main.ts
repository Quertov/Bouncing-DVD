const dvd: HTMLImageElement = document.getElementById('dvd') as HTMLImageElement;
const mainElement = document.documentElement;
let colorCounter: number = 2;
let xIncrement: number = 1;
let yIncrement: number = 1;

const dvdWidth: number = 400;
const dvdHeight: number = 176.77;

function init(): void {
    dvd.style.position = 'absolute';
    dvd.style.top = '100px';
    dvd.style.left = '50px';
    document.body.style.backgroundColor = '#222';
    document.body.style.overflow = 'hidden';

    setInterval(frame, 5);
}

function updateColor(): void {
    if (colorCounter > 7) colorCounter = 1;
    dvd.src = `./images/dvdlogo-0${colorCounter}.svg`;
    ++colorCounter;
}

function collisionHandler(): void {
    console.log(`DVD Top: ${dvd.offsetTop}`);
    console.log(`DVD Left: ${dvd.offsetLeft}`);
    console.log(`Main Element Height: ${mainElement.clientHeight}`);
    console.log(`Main Element Width: ${mainElement.clientWidth}`);

    if (dvd.offsetTop <= 0 || dvd.offsetTop + dvdHeight >= mainElement.clientHeight) {
        yIncrement *= -1;
        updateColor();
    }
    if (dvd.offsetLeft <= 0 || dvd.offsetLeft +dvdWidth >= mainElement.clientWidth) {
        xIncrement *= -1;
        updateColor();
    }
}

function frame(): void {
    collisionHandler();
    dvd.style.top = `${dvd.offsetTop + yIncrement}px`;
    dvd.style.left = `${dvd.offsetLeft + xIncrement}px`;
}

init();