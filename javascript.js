let a = 10
console.log(a)

a = 20
console.log(a)

let b = a * 7

console.log(b)

function add7(num) {
    return num + 7;
}

function multiple(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1)
}

function lastLetter(str) {
    lengthS = str.length;
    return String(str).slice(lengthS - 1)
}

console.log(add7(7));
console.log(multiple(7, 2));
console.log(capitalize("abcd"));
console.log(lastLetter("abcd"));

