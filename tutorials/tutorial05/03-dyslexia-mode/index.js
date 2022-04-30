/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const themeDyslexiaMode = () => {
  console.log('Switch to Dyslexia Mode');
  document.querySelector("body").className = "dyslexia-mode";
}

const themeOriginalMode = () => {
  console.log('Switch back to Original Mode');
  document.querySelector("body").className = "default";
}

document.querySelector("#dyslexia-toggle").addEventListener('click', themeDyslexiaMode);
document.querySelector("#original-toggle").addEventListener('click', themeOriginalMode);