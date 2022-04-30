/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const themeDefault = () => {
   console.log('Switch to Default theme');
   document.querySelector("body").className = "default";
}

const themeOcean = () => {
   console.log('Switch to Ocean theme');
   document.querySelector("body").className = "ocean";
}

const themeDesert = () => {
   console.log('Switch to Ocean theme');
   document.querySelector("body").className = "desert";
}

const themeHighContrast = () => {
   console.log('Switch to Ocean theme');
   document.querySelector("body").className = "high-contrast";
}



document.querySelector("#default").addEventListener('click', themeDefault);
document.querySelector("#ocean").addEventListener('click', themeOcean);
document.querySelector("#desert").addEventListener('click', themeDesert);
document.querySelector("#high-contrast").addEventListener('click', themeHighContrast);


