let arr = [1,3,4,6,9,8];
let arr1 = [99,88,77,66];

let arr2 = [...arr,...arr1];// merging two arrays using spread operataor 

console.log(arr2);
console.log(arr);
console.log(...arr); /// spread operator 

let maxval = Math.max(1,4,7,8);
 console.log(maxval);

let maxvalfromArray1 = Math.max(arr); // NAN 
let maxvalfromArray = Math.max(...arr); // gives the value 

console.log(maxvalfromArray1);

console.log(maxvalfromArray);