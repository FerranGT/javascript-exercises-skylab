function factorial(n) {

	if (n===1) return 1;
	var factNminus1 = factorial(n-1);
	var tempResult = n*factNminus1;

	console.log("---------------------------")
	console.log("n => " + n)
	console.log("n-1 => " + (n-1) )
	console.log("factorial(" + (n-1) + ") => " + factNminus1)
	console.log("n*factorial(" + (n-1) + ") => " + tempResult)

	return tempResult

}
/*
> factorial(4)
---------------------------
n => 2
n-1 => 1
factorial(1) => 1
n*factorial(1) => 2
---------------------------
n => 3
n-1 => 2
factorial(2) => 2
n*factorial(2) => 6
---------------------------
n => 4
n-1 => 3
factorial(3) => 6
n*factorial(3) => 24

24*/