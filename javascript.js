// let name = "John";
// let surname = "Doe";

// console.log(name);
// console.log(surname);

// let age = 11;
// console.log(age);

// age = 54;

// console.log(age);

// const pi = 3.14;

// console.log(pi);

// console.log(23+97)

// console.log(23+32+32/(2*2))

// let a = 19;

// console.log(a);

// a = 2

// console.log(a);

// let b = 7 * a;

// console.log(b);

// const max = 57;

// const actual = max - 13;

// const percentage = actual / max;

// console.log(percentage);

// alert("Welcome")

/** Tasks */

// let a = 1, b = 1;

// let c = ++a;
// let d = b++;

// console.log(a, b);


// let a1 = prompt("First number?");
// let b2 = prompt("Second number?");

// alert(a1 + b2);

let text = "dfasdfsadfdsfas";
let length = text.length;
let charat2 = text.charAt();
let charat3 = text.charCodeAt(1);
let at1 = text.at(2); /*or*/ let arg = text[2]; 

console.log(length + " " +  charat2 + " " + charat3);
console.log(at1 + " " + arg)

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(-12);
let part1 = text1.slice(-12, -6); /*substring <0 count as 0, substr seconf par is the lenght of extracted part*/ 
let part2 = text1.substr(7, 6);


console.log(part + " / " + part1 + " / " + part2);
