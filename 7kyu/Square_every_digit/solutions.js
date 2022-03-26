// my Solution

function squareDigits(num){

  let numArray = Array.from(num.toString()).map(Number)

  return Number(numArray.map(item => Math.pow(item,     2)).join(''))
  
}