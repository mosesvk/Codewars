function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;



///
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}


///
function fizzbuzz(n) {
  var fizzified = [];
  for (var i = 1; i <= n; i++) {
    var val = '';
    if (i % 3 == 0) val += 'Fizz';
    if (i % 5 == 0) val += 'Buzz';
    fizzified.push(val || i);
  }
  return fizzified;
}

function fizzify(n) {
  return fizzbuzz(n);
}


///
function fizzify(i) {
  if (i % 15 == 0)
  return 'FizzBuzz';
else if (i % 5 == 0)
  return 'Buzz';
else if (i % 3 == 0)
  return 'Fizz';
else
  return i;
}

// Return an array
function fizzbuzz(n) {
var res = [];
for (var i = 1; i <= n; ++i) res.push(fizzify(i));
return res;
}