// array.map() = executed a provided callback function
//               once for each array element
//               and creates a new array


const arr = [1,2,3,4,5,6,6,7,8];

const arr2 = arr.map(dosomething);

function dosomething(element)
{
   return element * 3 ;
}

console.log(arr2);


const arrFruits = ["apple","mango","grapes"];

function appendLetter(element)
{
   return element +" " +"fresh";
}

const freshFruits = arrFruits.map(appendLetter);

console.log(freshFruits);
