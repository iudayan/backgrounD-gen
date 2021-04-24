const input1=document.querySelector('.color1');
const input2=document.querySelector('.color2');
const css=document.querySelector('h3');
const body=document.getElementById('gradient');

let setGradient=()=>{
body.style.background="linear-gradient(to right," + input1.value + " ,"+ input2.value +") ";

css.textContent=body.style.background + ";";
}

input1.addEventListener('input',setGradient);
input2.addEventListener('input',setGradient);









