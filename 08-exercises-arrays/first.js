 /*first

Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] ;
[7, 9, 0] 
[7, 9, 0, -2] 
[] */



function first(array,n){

	var result = [];
	var j=0;

	if (typeof n == 'undefined'){

		n=1;
	}

	for (var i=0; i<n; i++){
		result[j]=array[i];
		j++;

	}
	return result;
}

 //llamar en consala a la funcion tal que asi first([7, 9, 0, -2],2)


/* Con filter*/

function first (aList, n){
	if(n==undefined) {return aList[0]}
	function isFirst (elem, index){ // Solo devuelve lo que cumple la condicion
		return index  < n;
	}

	return aList.filter(isFirst);
}








