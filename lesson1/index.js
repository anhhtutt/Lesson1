//BT1

let array = [29, 16, 3, 05, 21, 97, 63, 28, 30, 11];

let max = array[0];
let min = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  } else if (array[i] < min) {
    min = array[i];
  }
}
console.log(max);
console.log(min);

//BT2

let a = 5;
let b = 7;

if ((a * b) % 3 == 0 && (a * b) % 5 == 0) {
  res = true;
} else {
  res = false;
}

console.log(res);
