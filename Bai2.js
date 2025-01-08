var massMark=78
var heightMark=1.69
var massJohn=95
var heightJohn=1.88
var BMIMark=massMark/(heightMark*heightMark)

var BMIJohn=massJohn/(heightJohn*heightJohn)
var markHigher=BMIMark>BMIJohn

if(BMIMark>BMIJohn) console.log("BMI của Mark" +"("+BMIMark+")" +"cao hơn của John"+"("+BMIJohn+")");
else  console.log("BMI của Johm" +"("+BMIJohn+")" +"cao hơn của Mark"+"("+BMIMark+")");
;