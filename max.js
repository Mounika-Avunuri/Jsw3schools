const arr = [2,3,67,78,90]
/*function findMax(){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }

    }
    return max;
}

console.log(findMax(arr));*/
let max = 0;
const output = arr.reduce(function(max,curr){
if(curr > max){
    max = curr;
}
return max;
},0);
console.log(output);