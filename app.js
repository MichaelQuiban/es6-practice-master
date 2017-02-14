/*
	Using 'let' and 'const'
	src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
	src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
*/

/*
	'let' is used to define variables whose value may be reassigned.
	 Variables defined with let have block level scope.
	 Which means their scope can be limited to commands between two {} brackets.
*/

if(true) {
	var a = 'a';
	let b = 'b';
	console.log(b + ' is available');
}

console.log(a); // => with var
console.log(b); // => ReferenceError: b is not defined.

{
	var a = 'a';
	let b = 'b';
	console.log(b + ' is available');
}

console.log(a); // => with var
console.log(b); // => ReferenceError: b is not defined.

// Curly brackets can be used to establish block level scope in es6.


/*
	'const' is used to define variables that cannot be rassigned.
	If you try to reassign a variable defined with const, you'll get an error.
*/

const foo = 'foo';
const bizz = {
	foo: 'bar'
}

foo = 'bar'; // => TypeError: Assignment to constant variable.

const city = "Seattle";

if(city === "Seattle") {
	city = "Compton"; //city is already defined.
};

// This does not mean that 'const' is immutable. if 'const' points to an object, the properties are flexible.

const michael = {
	name: "Michael",
	//location: "Seattle",
	age: 23,
	Favoritecolor: "Charcoal",
}

michael.name = "Tim";
console.log(michael.name);

var songNames = [
	'Chandelier',
	'Twisted Fantasy',
	'Iced Earth',
	'Hold back the night',
	'Gotta be',
];

var abbreviations = songNames.map(
	title => title.toLowerCase().slice(0,3));

var colors = [
	"Red",
	"Blue",
	"Green",
	"Purple",
]