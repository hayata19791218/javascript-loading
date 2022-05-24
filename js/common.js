'use strict'

const loader = document.getElementById('js-loader');

window.addEventListener('load', () => {

  const loaderOpacity = function(){
    loader.classList.add('opacity');
  }

  setTimeout(loaderOpacity, 3000);
});




let counter = 0
const timerId = setInterval(function(){
  value.innerHTML = `${counter}%`;
  counter ++;
  if(counter > 100){ 
    clearInterval(timerId)
  }
}, 30)