// array.reduce()  - reduces an array to a single value 

const arr = [1,2,3,4,5];

const arrReduce = arr.reduce(reduceMethod);

function reduceMethod(total,element)
{
 return total + element;
}

console.log(arrReduce);


