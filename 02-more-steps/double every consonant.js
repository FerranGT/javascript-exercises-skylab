//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate( text ) {

	var currentLetter = "";
	var translatedText = "";

	function isVowel( letter ) {
		return ("aeiou ".indexOf(letter) != -1)//Devuelve la posicion de la letra encontrada si no encuentra devuelve -1
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

translate("this is fun")