// Q no:01

var password = prompt();

    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }

// Q no:02

var a = 1;
var c = "Max";

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// Qno: 03

var a = 1;
var c = "Max";

if (a === 1 && c === "Max") {
    alert("OK");
}


//Qno :04

var num1 = 5;
var num2 = 5;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("The first variable equals the second variable");
    }
}

// ARRAY

//Q no :01

var myArray = [];


//Q no : 02

var arr = ["Ahmed"]

//Q no : 03

var alphabet = ["a" , "bbc", "c"]
alert(alphabet[1]);


// Q no : 04

var alpha = [1,2,3,4,5]
var total = alpha.length;
console.log(total);

// Q no :05

var mArray = ["firstElement"]; 

mArray = "secondElement"; 

alert(mArray);

//Q no : 06


var a = ["first element"];
a.push = ["second element"]
var result = a;
console.log(result)


//Q no:07

var b= ["cat", "dog","loin","tiger"]
b.pop();
console.log(b);

//Q  no: 08


var d = ["a","b","c"];
d.push(10);
console.log(d)


//Q no :9

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); 

console.log(sizes);


//Q no :10


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(3, 2, 1);

console.log(sizes);


//for loop

//Q1

for (var i = 0; i < 10; i++) {
}

//Q2

for (var i = 0; i <= 12; i++) {
}

//Q3

for (var i = 0; i <= 4; i++){
}

//Q4

for (var count = 0; count < 100; count++) {
    console.log(count)
}

//Q5

var array = [1, 2, 3, 4, 5];
var arrayLength = array.length;
console.log(arrayLength)


//Q6

var flag = true;

//Q7


for (var i = 0; i < pets.length; i++) {
}

//Q8

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}







