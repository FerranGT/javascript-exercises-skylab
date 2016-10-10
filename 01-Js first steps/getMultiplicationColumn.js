// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function getMultiplicationColumn( num ) {

	for (var i=1; i<=10; i++) {
		console.log( num*i )
	}

}

/*
//Multiplication on demand

function multiplication (x){
	var result = [];
	for (var i = 1 ; i <= 10; i++) {
		result[i]= x*i;
	}
	console.log(result); // console.log(result.join(" ") + "\t");
}
*/