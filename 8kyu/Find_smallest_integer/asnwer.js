// My Answer 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallestNum = null ;
    for (var i=0;i<args.length;i++){
        if(args[i]<=args[0]){
            args[0] = args[i];   
            // We need line 8 because there still might be a future number that will be looped that will be lower than args[0] but higher than the number you just passed 
            smallestNum = args[i];
        }
      }
    return smallestNum;
  }
}

// Best & Shorter Answer found from others
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}