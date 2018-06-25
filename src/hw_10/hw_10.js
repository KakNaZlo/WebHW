import './hw_10.scss'


const colorLightGreen = document.querySelector('.green');
const colorLightRed = document.querySelector('.red');
const colorLightYellow = document.querySelector('.yellow');
 

function clickHandlerGreen(){
colorLightGreen.classList.add('active-green');
}

function clickHandlerRed(){
colorLightRed.classList.add('active-red');
}

function clickHandlerYellow(){
colorLightYellow.classList.add('active-yellow');
}

 

colorLightGreen.addEventListener('click', clickHandlerGreen);
colorLightRed.addEventListener('click', clickHandlerRed);
colorLightYellow.addEventListener('click', clickHandlerYellow);
 



