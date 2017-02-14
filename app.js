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
	"Purple"
];

//No parameters
colors.forEach(() => console.log('Color');

//When one parameter
colors.forEach(item => console.log(item));

//One or more parameters
colors.forEach((item, index) => console.log( 'Index ' + index + ' is: ' + colors));


//ES6 Spread

//Calculate Volume
function calcVolume(width, height, depth) {
  return width * height * depth;
}

let values = [10, 20, 30];
console.log(calcVolume(...values));

//Add Numbers
function addNumbers(a, b) {
  return a + b;
}

let addition = [20, 30];
console.log(addNumbers(...addition));

//Multiply Numbers
function multiplyNumbers(c, d) {
  return c * d;
}

multiply = [30, 50];
console.log(multiplyNumbers(...multiply));

//Template literals
let firstName = "Michael";
let lastName = "Smith";

console.log(`My name is ${firstName} and my last name is ${lastName}`);

let concatOne = "Hi I'm a string, and I have a new form of concatenation in ES6!";
let concatTwo ="Oh really...? What's that! Oh wait, I did it.";
console.log(`${concatOne} ${concatTwo}`);

//Object.assign
const objectA = {
	name: "Michael",
	location: "Seattle"
};

const objectB = {
	food: "Apples",
	color: "Red",
	Age: 23
};

console.log(Object.assign({}, objectA, objectB));

/*Output for object.assign

[object Object] {
  Age: 23,
  color: "Red",
  food: "Apples",
  location: "Seattle",
  name: "Michael"
}

*/ 