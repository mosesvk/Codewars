// Step 1: ask clarifying questions
// Step 2: Function Signature? Taking in a string and returning a string
// Step 3: Sample Data? DNAStrand ("ATTGC") // return "TAACG"
// Step 4: Pseudo code
//         use the .replace method. return that new string

//Shortest Solution
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

//Best Practice Solution
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//Longest Solution
function DNAStrand(dna){
  var result= "";
    for(var i =0; i<dna.length; i++) 
    {
      if (dna[i]==="A") 
      {
      result +="T";
      }
      else if (dna[i]==="T") 
      {
      result += "A";
      }
      else if (dna[i]==="C")
      {
      result +="G";
      }
      else if (dna[i]==="G")
      {
      result += "C";
      }
      else {
      result +=dna[i];
      }
    }
    return result;
  }


  const DNAStrand = dna => {
    const keys = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    };
    return dna.split('').map(item => keys[item]).join('');
  };
  

//   HTML/CSS: 

// What is the transform property, and how does it work?
// JavaScript: 

// What does the statement 'use strict' do in JavaScript?
// React: 

// How is React different from Vanilla JS, jQuery, and Angular?