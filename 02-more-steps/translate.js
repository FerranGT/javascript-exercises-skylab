// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate( text ) {

	var currentLetter = "";
	var translatedText = "";

	function isVowel( letter ) {
		return ("aeiou ".indexOf(letter) != -1) // indexof mira si hay alguna letra como la que se le pasa y sino devuelve un -1
	}

	for (var i=0; i<text.length; i++) {

		currentLetter = text[i];
		if ( isVowel(currentLetter) ) {
			translatedText += currentLetter;
		}
		else {
			translatedText += currentLetter + "o" + currentLetter;
		}

	}
	return translatedText;

}

translate("this is fun");