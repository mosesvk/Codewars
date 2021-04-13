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

