function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}

////////////////////////////////////////////////////////

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

////////////////////////////////////////////////////////