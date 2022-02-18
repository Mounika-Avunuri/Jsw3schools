const arr=[1,2,3,4,5];
function double(x){
  return x * 2;
}
function triple(y){
  return y * 3;
}
function multiply(z){
  return z * 3;
}

const output = arr.map(double);
const output1 = arr.map(triple);
const output2 = arr.map(multiply);

console.log(output);
console.log(output1);
console.log(output2);