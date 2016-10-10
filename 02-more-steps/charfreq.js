//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (text) { 
    var currentChar; 
    var freq = {};
    for(var i = 0; i < text.length; i++){ 
        currentChar = text[i];
        if ( freq[currentChar] == undefined ) {
            freq[currentChar] = 1;
        }
        else {
            freq[currentChar]++
        }
    }

    return freq;   
}

charFreq("abbabcbdbabdbdbabababcbcbab");