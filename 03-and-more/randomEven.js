/*randomEven()

Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.*/

function randomEven(){
	var array=[];
	var rand=Math.floor(Math.random()*100)+1;
	array.length=rand;
	array.fill(0);
	var a=0;
	array.forEach(function(){
		console.log(a++);	
	});
	
}