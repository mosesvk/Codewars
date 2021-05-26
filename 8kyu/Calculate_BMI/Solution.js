function bmi(weight, height) {
  const result = weight/Math.pow(height, 2)
  
  if (result > 30) return 'Obese'
  if (result <= 30) return 'Overweight';
  if (result <= 25) return 'Normal';
  if (result <= 18.5) return 'Underweight';
  
  return result
}

//////////////////////////////////////////////////////]

const bmi = (w, h, bmi = w/h/h) =>  
  bmi <= 18.5 ? "Underweight" :
  bmi <= 25 ? "Normal" :
  bmi <= 30 ? "Overweight" : "Obese";