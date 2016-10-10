/*User "class" w/ prototype method

create a contructor function called User that allow us to create objects with the structure :

{
name: "juanma",
username: "juanmaguitar",
password: "l0p4s4m0sp1p4" // lopasamospipa
}

The final password is encripted using this code:
A -> 4
E -> 3
I -> 1
O -> 0
U -> 8

Every user instance should have available the method decryptPassword that converts the stored password to the decodified version

var user = new User("juanma", "juanmaguitar", "lopasamospipa")
user = {
name: "juanma",
username: "juanmaguitar",
password: "l0p4s4m0sp1p4"
}
user.name // "juanma"
user.username // "juanmaguitar"
user.password // "l0p4s4m0sp1p4"
user.decryptPassword() // "lopasamospipa"
hint : the method decryptPassword should be defined in the prototype of User
function User ( name, username, password) {
// here your logic
}
User.prototype.decryptPassword = function () {
// more magic
}*/


function User ( name, username, password) {
	this.name = name;
	this.username = username;
	this.password = User.encryptPassword(password);
}

User.encryptPassword = function( password ) {
	var myEncryptedPassword = password.toUpperCase().split("");
	return myEncryptedPassword.map( function(elem) {
		if (elem === "A") return "4";
		if (elem === "E") return "3";
		if (elem === "I") return "1";
		if (elem === "O") return "0";
		if (elem === "U") return "8";
		return elem;
	}).join("");
}

User.prototype.decryptPassword = function() { // Lo igualamos pq aparte de ser una funcion tb es un objeto
	var myEncryptedPassword = this.password.split("");
	return myEncryptedPassword.map( function(elem) {
		if (elem === "4") return "A";
		if (elem === "3") return "E";
		if (elem === "1") return "I";
		if (elem === "0") return "O";
		if (elem === "8") return "U";
		return elem;
	}).join("");
	
}

var me = new User("JuanMa", "juanmaguitar", "lopasamosgenial");










