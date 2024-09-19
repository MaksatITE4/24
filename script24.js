/*
// task 1
for(let i = 2; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

// task 2
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// task 3
let number = 5
let fact = 1;

for (let i = 1; i <= number; i++ ) {
    fact *= i
}
console.log(fact)

// task 4 
let str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}
// task 5
let massiv = [1, 2, 3, 4, 5]
let con = []
for (let i = 0; i < massiv.length; i++) {
    con.push(massiv[i])
}
console.log(con)

// task 6
let array = [1, 2, 3, 4, 5];
let array2 = 0
for (let i = 0; i < array.length; i++) {
    array2 += array[i]
}
console.log(array2)

// task 7
let array = [1, 2, 3, 4, 5];
let max =  array[0]
for (let i = 1; i < array.length; i++ ) {
    if(array[i] > max) {
        max = array[i];
    }
}
console.log(max)

// task 8
let array = [1, 2, 3, 1, 2, 1];
let quantity = 0
for (let i = 0; i < array.length; i++) {
    if(array[i] === 1) {
        quantity++;
    }
}
console.log(quantity)

// task 9 
let squares = []
for (let i = 1; i <= 10; i++){
    squares.push(i * i);
}
console.log(squares);

// task 10
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// task 11 
let array = [];
let value = 1; 
for (let i = 0; i < 10; i++) {
    array.push(value);
    value *= 2; 
}
console.log(array);

// task 12
let array = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let min = array[0]
for (let i = 0; i < array.length; i++) {
    if(array[i] < min) {
        min = array[i]
    }
}
console.log(min)

// task 13
let str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);

// task 14
let array = [10, 12, 31, 40, 15];
let target = 31; 
let index = array.indexOf(target); 
console.log(index);

// task 15
let array = [1, 1, 1, 1, 1];
let array2 = true
for (let i = 0; i < array.length; i++){
    if(array[i] !== 1) {
        array2 = false;
        break;
    }
}
console.log(array2)

// Medium Tasks
// task 1
let array = "radar"
let palindrom = true
for (let i = 0; i < array.length / 2; i++) {
    if(array[i] !== array[array.length - 1 - i]) {
        palindrom = false;
        break;
    }
}
console.log(palindrom)

// task 2
let array = [1, 2, 3, 4, 3, 2, 1];
let value = 3
for (let i = 0; i < array.length; i++) {
    if(array[i] === value) {
        array.splice(i, 1);
        i--
    }
    
}
console.log(array)

// task 3
let a = 3;
let b = 5;
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % a === 0 || i % b === 0) {
        console.log(i); 
        sum += i; 
    }
}

console.log( "общий число" ,sum);

// task 4
let array = [5, 9, 3, 7, 2, 8, 1, 6, 4]
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i]
}
let sredny = sum / array.length;
console.log(sredny)
*/
// task 5
let number = 1234;
let num = number.toString().length;
console.log(num);




