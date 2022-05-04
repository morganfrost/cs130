const add_numbers = (ev) => {
    // Your code here...
    console.log('add the numbers...');
    let num1 = document.querySelector('#num1').value;
    console.log(num1);
    let num2 = document.querySelector('#num2').value;
    console.log(num2);
    let result = Number(num1) + Number(num2);
    console.log(result);
    document.querySelector('#answer').innerHTML = result;
}

const subtract_numbers = (ev) => {
    console.log('subtract the numbers...');
}

document.getElementById('add').onclick = add_numbers;
document.getElementById('subtract').onclick = subtract_numbers;