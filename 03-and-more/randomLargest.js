//randomLargest()

//Randomizes three numbers in range (0.. 100) and prints the largest one.

function randomLargest(){

	function randomize() {
		 return Math.floor(Math.random()*100)+1;
	}

	var randomValues = [0,0,0].map( function(){//No es la solucion mas adecuada pero si para practicar map
		return randomize();
	})

	console.log (randomValues)

}