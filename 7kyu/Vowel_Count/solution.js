// pseudo code
// 1. iterate over the string
// 2. if the current letter is a, e, i, o, u
// 3. increase the vowelsCount


//answer (most clever by someone else) 
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
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

//answer 3
function getCount(str) {
  const vowels = {
    a: true, e: true, i: true, o: true, u: true
  };
  return str.split('').filter((currentLetter) => vowels[currentLetter]).length
}
