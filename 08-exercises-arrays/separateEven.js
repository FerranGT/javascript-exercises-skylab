/*separateEven

Write a JavaScript program which accept a string as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.*/

function separateEven(number){
	
	listnumber=number.split("");

	for (var i=0; i<listnumber.length; i++){

		if(listnumber[i] + 2 == listnumber[i]+1);
			listnumber[i+1]='-';
	}

}
//separateEven('025468');