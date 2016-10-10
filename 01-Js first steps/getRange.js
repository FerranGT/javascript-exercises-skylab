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

/*

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

*/