const arr = [2,3,4,5,6]
function isOdd(x){
   return x % 2 == 1;
}
function isEven(y){
    return y % 2 == 0 ;
}
const output = arr.filter(isOdd);
const output1 = arr.filter(isEven);
console.log(output);
console.log(output1);