// let x = 5;
// var y = 10;
// console.log(x + y);

// let input = prompt("enter your name :");
// let output = alert(`your name : ${input}`);
// console.log(input);
// let output1=window.alert(`you enterd : ${input}`);

let t = prompt("t :");

function sum(a, b) {
  return a + b;
}

while (t-- > 0) {
  let a = prompt("a :");
  let b = prompt("b :");
  alert(sum(a, b));
}
