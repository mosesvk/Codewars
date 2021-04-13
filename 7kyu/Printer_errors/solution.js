//step 1: ask clarifying questions
//step 2: function signature -> function(args) => number
//step 3: sample data, 
//step 4: pseudo code (step by step of what you will be doing)
// Solve Problem

function printerError(s) {
  // your code
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}


function printerError(s) {
  let split = s.split('')
  let badString = 'nopqrstuvwxyz'
  let badArray = badString.split('')
  let count = 0
  for (let i = 0; i < split.length; i++){
    badArray.forEach(elem => {
      if (elem === split[i]){
        count++
      }
    })
  }
  return `${count}/${split.length}`
}


function printerError(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}
