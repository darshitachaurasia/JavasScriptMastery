
/*
CASE1: If password is 'abcd'
*/

const password = 'abcd';

function isValidPassword(password){
	 return password.length >= 8 ?console.log(" true" ):console.log ("false")
}

isValidPassword(password) // Returns false as the length of password is less than 8 characters




  