function calculateBMI() {
  // 1) Parse inputs
  const feet   = parseFloat(document.getElementById("feet").value)   || 0;
  const inches = parseFloat(document.getElementById("inches").value) || 0;
  const weight = parseFloat(document.getElementById("weight").value) || 0;

  // 2) Compute height in inches
  const height = feet * 12 + inches;
  if (height <= 0 || weight <= 0) {
    alert("Enter valid height & weight");
    return;
  }

  // 3) Calculate BMI (lbs & inches → BMI formula)
  const bmi = (weight / (height * height)) * 703;

  // 4) Write it back to the output field
  document.getElementById("bmi-output").value = bmi.toFixed(1);
  
  //display text
  const resultArea = document.getElementById("result");
  resultArea.style.display = "block";
  
  var result = '';
  if (bmi < 18.5) result = 'UNDERWEIGHT';
  else if(bmi >= 18.5 && bmi <= 24.9) result = 'NORMAL';
  else if(bmi >= 25 && bmi <= 29.9) result= 'OVERWEIGHT';
  else result = 'OBESE';
  
  resultArea.innerHTML = `You are <span id = "highlight">${result}</span>`;//use backticks not single quotes!!
  
  
}