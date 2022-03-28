// my Solution

function squareDigits(num) {
  let numArray = Array.from(num.toString()).map(Number);

  return Number(numArray.map((item) => Math.pow(item, 2)).join(''));
}

// the quickest solutions

function squareDigits(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val;
      })
      .join('')
  );
}

function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((i) => i * i)
    .join('');
}
