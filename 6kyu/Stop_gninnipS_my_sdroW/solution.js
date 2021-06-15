function spinWords(string){
  //TODO Have fun :)
  let arr = string.split(' ')
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > 4){
      let newNum = arr[i].split('');
      arr[i] = newNum.reverse().join('')
    }
  }
  return arr.join(' ')
}

///////////////////////////////////////////////////

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

///////////////////////////////////////////////////



///////////////////////////////////////////////////