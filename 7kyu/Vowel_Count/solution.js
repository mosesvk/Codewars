
//answer (most clever by someone else) 
function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
  // It actually works without the || [] but we might need that in the future
}

// answer 2
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j = 0; j < vowels.length; j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

// Another way I figured 
function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  var split = str.split('')
  for (let i = 0; i < split.length; i++){
    if (split[i] === 'a' || 
        split[i] === 'e' || 
        split[i] === 'i' ||
        split[i] === 'o' || 
        split[i] === 'u'){
      vowelsCount++
    }
  }
  
  return vowelsCount;
}
