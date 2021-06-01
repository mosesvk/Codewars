function spEng(sentence){
  //write your code here
    return sentence.toLowerCase().includes('english') ? true : false
  }

//////////////////////////////////////////////////////////////////

function spEng(s){
  return /english/i.test(s)
}

//////////////////////

var spEng = (sentence) => sentence.toLowerCase().includes('english');
