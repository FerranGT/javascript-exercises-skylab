//sumandmult([1,2,3,4]) asi ejecuto la funcion en console.log


function getSum( numbers ){
	var sum=0;
	for (var i=0; i<numbers.length; i++){
		sum+=numbers[i];

	}
	return sum;
}


function getMultiplication( numbers ){
	var mult=1;
	for (var i=0; i<numbers.length; i++){

		mult*=numbers[i];

	}
	return mult;
}

function sumandmult (numbers){
	var resultSum = getSum(numbers);
	var resultMult = getMultiplication(numbers);

	console.log (resultSum)
	console.log (resultMult)
}

sumandmult([1,2,3,4])