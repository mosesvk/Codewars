
function bubblesortOnce(arr) {
  let a = arr.slice()
  for (let i = 0; i < a.length; i++){
    if (a[i] > a[i+1]){
      [a[i], a[i+1]] = [a[i+1], a[i]]
    }
  }
  return a
}

function bubblesortOnce(arr) {
  let a = [...arr]
  let b 
  a.forEach((item, i) => {
    if(item > a[i+1]){
      b = a.splice(i, 1)[0]
      a.splice(i+1, 0, b)
    }  
  })
  return a
}

function bubblesortOnce(a) {
  return [...a]
    .map((e, i, arr) => e > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = e, arr[i]) : e)
}
