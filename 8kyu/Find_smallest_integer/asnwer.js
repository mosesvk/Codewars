//step 1: ask clarifying questions
//step 2: function signature -> function(args) => number
//step 3: sample data, 
//step 4: pseudo code (step by step of what you will be doing)
// Solve Problem

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallestNum = null ;
    for (var i = 0; i < args.length; i++){
        if(args[i] <= args[0]){
            args[0] = args[i];   
            // We need line 8 because there still might be a future number that will be looped that will be lower than args[0] but higher than the number you just passed 
            smallestNum = args[i];
        }
      }
    return smallestNum;
  }
}

// Best & Shorter Answer 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

/// INTERVIEW QUESTIONS

/// HTML/CSS
//  Describe how you would make a paper card effect in CSS—something like the products found on Jane.com.
//  => 1. Create a container | 2. in that container, create multiple containers that will contain each paper card | 3. In each container, create two <div> elems, one containing the image and one containing the description | 3. Give each image <div> and desc. <div>  the same classes so you can size all of them equally | 4. in the desc <div>, create another two <div>, one for the description and price, and one for the heart icon where clients can click and order. 

/// JAVASCRIPT
//  What is the difference between a for loop, and a for in loop?
//  => for loop is for looping through a SEQUENCE (most likely an array). But it can loop through a string as well 
//  => for in loop is for looping through an OBJECT's properties

/// REACT 
//  What are the differences between a class component, and a functional component?
//  => functional component: more simple function of JS that accepts props as an argument. 
//  => class component: function that needs to extend from React Component and where state can be stored, along with a render function which returns a React element. only class has immediate access to lifecycle methods
