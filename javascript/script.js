//variables
let num1 = 4;
let num2 = 2;
const num3 = 4.5;
const num4 = -4.5;
const myVar = 'A string';
const myVar2 = 'Another string';


//Basic math
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

//floating point innacuracy
console.log(0.1 + 0.2);
console.log(0.2 + 0.4);

//other operations
console.log(13 % 5);
console.log(4 % 2);
console.log(2 ** 3);
// ** means raise to the power of 2


//increament and decrement
// num1 = num1 + 1;
// an alternative way of writing the above is
// num1++;
// console.log(num1);
// // num2 = num2 - 1;
// // alternative way to write this is
// num2--;
// console.log(num2);
// // num1 = num1 + 2;
// //alternative
// num1 += 2;
// console.log(num2);


//comparison
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

//nan
console.log(num1 * 'A string');

//infinity
console.log(9_000_000 ** 9_000_000);
console.log(Number.NEGATIVE_INFINITY);


//math object
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.round(6.6));
console.log(Math.round(6.3));
console.log(Math.ceil(6.3));
console.log(Math.floor(6.3));


//converting
console.log(myVar + myVar2);
console.log(myVar + num1);

//string to number
console.log(parseInt('2') + 2);
//it changes the '2' which was a string to number


//number to string
console.log(2 + '');
//here it came out as a number cos of the '' added to it
console.log(`${2}`);
//here is another way to change number to string using ` and the $ sign



//BigInt
let maxInt = BigInt(Number.MAX_SAFE_INTEGER)
console.log(maxInt);
maxInt++;
console.log(maxInt);
maxInt++;
console.log(maxInt);

let bigNumber = 9007199254740993n;
bigNumber = bigNumber * 4n;
console.log(bigNumber);