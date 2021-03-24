// Long answer 

function addLength(str) {
    return str.split(' ').map(elem => `${elem} ${elem.length}`)
  };


// You can also do it via arrow function

const addLength = string => string.split(' ').map(word => `${word} ${word.length}`)

/////// OTHER SOLUTIONS Frm OTHERS

// Instead of tempstring, you can concatenate
function addLength(str){
  return str.split(' ').map(function(elem){return elem+' '+elem.length})
}