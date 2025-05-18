function calculateBMI(){
	let heightCm   = parseFloat(document.getElementById("cm").value)   || 0;
	const weight   = parseFloat(document.getElementById("weight").value)   || 0;
	
	
	//convert height to meters
	let height = heightCm / 100;
	
	
	if (height <= 0 || weight <= 0) {
    alert("Enter valid height & weight");
    return;
  }
  
  	const bmi = weight / (height * height);
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