// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

// {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}

// "merry christmas and happy new year" => "god jul och gott nytt år"

function translateToSwedish ( msg ) {

	var dictionary = {
		merry: "god",
		christmas: "jul",
		and: "och",
		happy: "gott",
		new: "nytt",
		year: "år",
	}
	var wordsMsg = msg.split(" "); // string a array
	var currentWord, translatedWord;
	var translatedWords = [];

	for (var i=0; i<wordsMsg.length; i++) {
		currentWord = wordsMsg[i];
		translatedWord = dictionary[currentWord];

		translatedWords.push( translatedWord )// añade elemento al final del string
	}

	return translatedWords.join(" ");// array a string

}

translateToSwedish ("merry christmas and happy new year");
