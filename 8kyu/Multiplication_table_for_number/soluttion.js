function multiTable(number) {
  // good luck
  let table = ''
  for (let i = 1; i < 11; i++){
    let math = i * number;
    if (i !== 10){
      table += `${i} * ${number} = ${math}\n`
    } else {
      table += `${i} * ${number} = ${math}`
    }
  }
  return table;
}

///////////////////////////////////////////////////

const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}