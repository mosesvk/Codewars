

function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

function countDevelopers(list) {
  return list
    .filter(dev => dev.language === "JavaScript")
    .filter(dev => dev.continent === "Europe")
    .length
}


// HTML/CSS: 
// How would you make a circle in CSS?

// JavaScript: 
// Describe 3 new ES2015 (ES6) features, and how they differ from ES5.  

// React: 
// What are React lifecycle events?