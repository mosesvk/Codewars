const highAndLow = numbers => {
  let arr = numbers.split(' ')
  let highest = Math.max(...arr)
  let lowest = Math.min(...arr)
  return `${highest} ${lowest}`
}

////////////////////////////////////////////////

const highAndLow = numbers => {
  let arr = numbers.split(' ')
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}

////////////////////////////////////////////////

const highAndLow = numbers => {
  let arr = numbers.split(' ')
  return Math.max.apply(0, arr) + ' ' + Math.min.apply(0, arr)
}


////////////////////////////////////////////////