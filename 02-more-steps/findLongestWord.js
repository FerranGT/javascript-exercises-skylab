//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(text){

	var words = text.split(" "); // string a array
	var longest = "";
	
	for(var i=0; i<words.length; i++){
		if(words[i].length>longest.length){
			longest=words[i]
		}
	}
	return longest;
}

findLongestWord("Hola pepe y juana");