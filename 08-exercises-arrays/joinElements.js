/*joinElements

Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

function joinElements () {

	var mycolor = ["Red", "Green", "White", "Black"];

	return [mycolor.join (""),mycolor.join ("+")];

}

//formas diferentes de devolver con un return

// No, but you could return an array containing your values:

// var newCodes = function() {
//     var dCodes = fg.codecsCodes.rs;
//     var dCodes2 = fg.codecsCodes2.rs;
//     return [dCodes, dCodes2];
// };
// Then you can access them like so:

// var codes = newCodes();
// var dCodes = codes[0];
// var dCodes2 = codes[1];
// If you want to put "labels" on each of the returned values (easier to maintain), you can return an object:

// var newCodes = function() {
//     var dCodes = fg.codecsCodes.rs;
//     var dCodes2 = fg.codecsCodes2.rs;
//     return {
//         dCodes: dCodes,
//         dCodes2: dCodes2
//     };
// };
// And to access them:

// var codes = newCodes();
// var dCodes = codes.dCodes;
// var dCodes2 = code