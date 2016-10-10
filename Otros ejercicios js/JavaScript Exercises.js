//Integer Number Range

var integer=function(x1,x2){
	if (x2 < x1) {
		console.log(-1);
	}else {
		while (x2 > (x1 +1)){
			console.log(x2 - 1);
			x2--;
		} 
	}
}

//Multiplication table

function multiplication (){
	var fila= []; // result= '\n'
	for (var i = 1 ; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			fila[j]=i*j; // result += i*j + '\t', concatenar caracteres
			
		}
		console.log(fila); // return fila;
		//result += '\n';
	}
}

//Multiplication on demand

function multiplication (x){
	var result = [];
	for (var i = 1 ; i <= 10; i++) {
		result[i]= x*i;
	}
	console.log(result); // console.log(result.join(" ") + "\t");
}

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

//Max() function

function max(a,b){
	if(a > b){
		return a;
	}else{
		return b;
	}


//maxOfThree() 

function maxThree(a,b,c){
	if(a > b){
		if(a > c){
			return a;
		}else{
			return c;
		}
	}else {
		if(b > c){
			return b;
		}else{
			return c;
		}
	}
}

//isVowel()

function vowel(x){
	if(x == "a"|| "e" || "i" || "o" ||"u"){
		return true;
	}else{
		return false;
	}
}

//Hexadecimal

function hexadecimal(){
	var
}

// Los mismos ejercicios hechos por el profe y mas

/* Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1 */

function getRange ( x1, x2 ) { //20,3
	var range = [];

	if ( x1 > x2 ) {
		return "x1 should be lower than x2"
	}

	for (var i=x1; i<=x2; i++) {
		range.push(i)
	}
	return range.join(" | ");

}

// Write a function that writes in the console the multiplication table (from 1 to 10)

function multiplicationsTable() {

	result = '\n';
	for (var i=1; i<=10; i++) {
		for (var j=1; j<=10; j++) {
			result += i*j + '\t'
		}
		result += '\n';
	}
	return result;

}

// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function getMultiplicationColumn( num ) {

	for (var i=1; i<=10; i++) {
		console.log( num*i )
	}

}


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

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfTwo(a, b)  {
	return (a>b) ? a : b;
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel( letter ) {
	return ("aeiou".indexOf(letter) != -1)
}


// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

// getRGB ('#00FF00'); // rgb(0,255,0)

function getRGB( hexColor ) {

	var redHex = hexColor[1] + hexColor[2];
	var greenHex = hexColor[3] + hexColor[4];
	var blueHex = hexColor[5] + hexColor[6];

	var red = parseInt(redHex,16);
	var green = parseInt(greenHex,16);
	var blue = parseInt(blueHex,16);

	return "RGB(" + red + "," + green + "," + blue + ")"

}