let x = 30;

const makeBigger = () => {
   console.log('make bigger!');
   var computedFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
   console.log(computedFontSize);
   x += 5;
   document.querySelector(".content").style.fontSize = x+'px';
   ;
};

const makeSmaller = () => {
   console.log('make smaller!');
   var computedFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
   console.log(computedFontSize);
   x= (x>10) ? x-5 : 10;
   document.querySelector(".content").style.fontSize = `${x}px`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
