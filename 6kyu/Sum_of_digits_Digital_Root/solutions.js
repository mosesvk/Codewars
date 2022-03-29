// Quickest Solution

function digital_root(n) {
  return (n - 1) % 9 + 1;
}


// Other SOLUTIONS

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}


function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}
