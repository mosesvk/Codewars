//step 1: ask clarifying questions
//step 2: function signature -> function(args) => number
//step 3: sample data, 
//step 4: pseudo code (step by step of what you will be doing)
// Solve Problem

function superSize(num){
  return Number(num.toString().split('').sort((a, b) => b - a).join(''));
}

const superSize = num => +(num+'').split('').sort((a,b)=>b-a).join('')


