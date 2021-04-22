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


/*
let a = 'test';
const b = true;
let c = 789;
a = 'test2';
console.log(b);

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};


const{eyeColor}=person;
let{firstName,lastName,age}=person;
console.log(eyeColor);
console.log(age);

function message(firstName='',city='gzb'){
    return `hey ${firstName}are you from ${city}`
}*/
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  let newAR=[];
  array.forEach(user => {
      let {username}=user;
    username +='!';
    newAR.push(username);
  });
  
  console.log(newAR);


const mapArray=array.map(user=>{
    let {username}=user;
    return username +'?';
})
console.log('map',mapArray);


const filterAR=array.filter(user=>{
    
    return user.team==='red';
})
console.log(filterAR);







