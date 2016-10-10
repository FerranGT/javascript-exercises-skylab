/*last

Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]*/

function first (aList, n){

	var reverselist = [];
	if(n==undefined) {return aList[0]}
	function isFirst (elem, index){ // Solo devuelve lo que cumple la condicion
		return index  < n;
	}

	reverselist= aList.filter(isFirst);

	return reverselist.reverse();
}

 //llamar en consala a la funcion tal que asi first([7, 9, 0, -2],2)