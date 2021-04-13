//step 1: ask clarifying questions
//step 2: function signature -> function(args) => number
//step 3: sample data, 
//step 4: pseudo code (step by step of what you will be doing)
// Solve Problem

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
// => border-radius: 50%;

// JavaScript: 
// Describe 3 new ES2015 (ES6) features, and how they differ from ES5.  
// => 1. Arrow Function (doesn't require the function keyword and automatically BINDS) 2. let & const (new ways to define variables) 3. destructuring and speed operators create faster and more smooth processes. 4. Spread operator makes it easy to merge arrays and objects. 5. Template Literals (temp strings) allows easier string interpolation.

// React: 
// What are React lifecycle events?
// 