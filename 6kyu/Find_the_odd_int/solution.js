

/////////////////////////////////////////////

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

/////////////////////////////////////////////

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

/////////////////////////////////////////////

const findOdd = (arr) => {
  let odd = {};

  for (let i = 0; i < arr.length; i++){
    if (odd[arr[i]]){
      odd[arr[i]]++;
    } else {
      odd[arr[i]] = 1;
    }
  }

  for (let j in odd){
    if (odd[j] % 2 !== 0){
      return Number(j)
    }
  }
}