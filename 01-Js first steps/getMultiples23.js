// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

// Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function getMultiples23() {

	var numbers = [];
	var result = 0;
	for (var i=0; i<=500; i+=23) {
			numbers.push(i);
			result += i;
	}
	console.log("Elements : " + numbers)
	console.log("Sum : " + result)

}

/*
//Calculation
function calculation(){
resultados= 0;
x= 0;
while (x < 500){
	if((x % 23) == 0){
		resultados +=x
		console.log("Multiples de 23: " + x);
	} 
	x++;
}
console.log("Suma total: " + resultados);
	
}
*/
