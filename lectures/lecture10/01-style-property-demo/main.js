//this is one option:

const resetButtonBackgrounds = () => {
    document.querySelector("#btn1").style.backgroundColor = 'rgb(133, 133, 133)'
    document.querySelector("#btn2").style.backgroundColor = 'rgb(133, 133, 133)'
    document.querySelector("#btn3").style.backgroundColor = 'rgb(133, 133, 133)'
    document.querySelector("#btn4").style.backgroundColor = 'rgb(133, 133, 133)'
}

const makeRed = () => {
    console.log('Change background to red');
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = 'red'
    document.querySelector("#btn1").style.backgroundColor = 'tomato'

};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = 'blue'
    document.querySelector("#btn2").style.backgroundColor = 'lightblue'

};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = 'pink'
    document.querySelector("#btn3").style.backgroundColor = 'hotpink'
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = 'orange'
    document.querySelector("#btn4").style.backgroundColor = 'yellow'
};

