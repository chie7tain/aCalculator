//DOM elements 
const add = document.querySelector('[data-add]');
const subtract = document.querySelector('[data-subtract]');
const multiply = document.querySelector('[data-multiply]');
const divide = document.querySelector('[data-divide]');
const equals = document.querySelector('[data-equals]');
const input = document.querySelector('[data-input]');
let showResults = document.querySelector('[data-results]');


//functions for calculating various problems starting with the
//basics
// const functions = ['+','-','/','*'];
// let funcTer = functions.includes('+');
// console.log(funcTer);

add.addEventListener('click',()=>{
  input.value = input.value + '+';
  input.focus();
});
subtract.addEventListener('click',()=>{
  input.value = input.value + '-';
  input.focus();
});
divide.addEventListener('click',()=>{
  input.value = input.value + '/';
  input.focus();
});
multiply.addEventListener('click',()=>{
  input.value = input.value + '*';
  input.focus();
});
equals.addEventListener('click',()=>{
 decider();
});
// this function holds all calculator functions and decides which is suitable depending on the expression 
const decider=()=>{
  let luno = input.value.includes('');
  switch(luno){
    case input.value.includes('+'):
    addValues();
    break;
    case input.value.includes('-'):
    subtracter();
    break;
    case input.value.includes('/'):
    divider();
    break;
    case input.value.includes('*'):
    multiplier();
    break;
    default:
    console.log('unEarthly');
    break;
  }
};
//calculator functions proper
//addition
const addValues =()=>{
   if(input.value.includes('+')){
    let added = input.value.split('+');
    let result = added.reduce((acc,val)=>{
      return parseInt(acc) + parseInt(val);
    });
    showResults.textContent =`Master the result is :${result}`;
    showResults.style.textDecoration = 'underline';
  } 
};
//subtraction
const subtracter=()=>{
  if(input.value.includes('-')){
    let sub = input.value.split('-');
    let result = sub.reduce((acc,val)=>{
      return parseInt(acc) - parseInt(val);
    });
  }
  showResults.textContent =`Master the result is :${result}`;
    showResults.style.textDecoration = 'underline';
};
//division
const divider =()=>{
  if(input.value.includes('/')){
    let divide = input.value.split('/');
    let result = divide.reduce((acc,val)=>{
      return parseInt(acc) / parseInt(val);
    });
   
  }
  showResults.textContent =`Master the result is :${result}`;
    showResults.style.textDecoration = 'underline';
};
//multiplication
const multiplier = ()=>{
  if(input.value.includes('*')){
    let multiplied = input.value.split('*');
    let result = multiplied.reduce((acc,val)=>{
      return parseInt(acc) * parseInt(val);
    });
  }
  showResults.textContent =`Master the result is :${result}`;
    showResults.style.textDecoration = 'underline';
};