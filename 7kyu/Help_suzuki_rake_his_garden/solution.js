// Step 1: ask clarifying questions
// Step 2: Function Signature : takes in a string and returns a string
// Step 3: Sample Data: garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Step 4: pseudo code 

// Best Practice Solution
function rakeGarden(garden) {
  return garden
    .split(' ')
    .map(val => val == 'rock' ? 'rock' : 'gravel')
    .join(' ')
}

// Longest Solution
function rakeGarden(garden) { 

  var tab = garden.split(" ");
  for(var i=0; i<tab.length;i++){
    if(tab[i]!='rock' && tab[i]!='gravel'){
      tab[i] = 'gravel';
    }
  }
  var rakedGarden = tab.join(" ");

  return rakedGarden;
}


