// array.filter() = creates a new array with all the elements 
//                   that pass the test provided by a fucntion 


const arr = [1,2,3,4,5,5,5,6,7,8,9];

function evenNumber(element)
{
    return element % 2 == 0;
}

const arrEven = arr.filter(evenNumber);

console.log(arrEven);
