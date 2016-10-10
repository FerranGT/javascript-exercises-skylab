//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function getreverse(text){

	var reverse = "";
 
	for (var i=text.length -1; i>=0; i--){
		reverse += text[i]; // Concatena caracteres en el string

	}
	return reverse;
}

getreverse("jag testar");