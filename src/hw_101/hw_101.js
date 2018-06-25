import './hw_101.scss'

let red = document.querySelector('.red');
red.addEventListener('click', redLightOn);

let redLight = false;
function redLightOn() {
    red.classList.toggle('active');

    if (redLight) {
        redLight = false;
    } else {
        redLight = true;
    }

    if (yellowLight) {
        yellow.classList.toggle('active');
        yellowLight = false;
    } else if (greenLight) {
        green.classList.toggle('active');
        greenActive = false;
    }
}

let yellow = document.querySelector('.yellow');
yellow.addEventListener('click', yellowLightOn);
let yellowLight = false;
function yellowLightOn() {
    yellow.classList.toggle('active');
    if (yellowLight) {
        yellowLight = false;
    } else {
        yellowLight = true;
    }
    if (redLight) {
        red.classList.toggle('active');
        redLight = false;
    } else if (greenLight) {
        green.classList.toggle('active');
        greenLight = false;
    }
}

let green = document.querySelector('.green');
green.addEventListener('click', greenLightOn);
let greenLight = false;
function greenLightOn() {
    green.classList.toggle('active');
    if (greenLight) {
        greenLight = false;
    } else {
        greenLight = true;
    }
    if (yellowLight) {
        yellow.classList.toggle('active');
        yellowLight = false;
    } else if (redLight) {
        red.classList.toggle('active');
        redLight = false;
    }
}








