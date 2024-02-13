// sort elements of an array using sort methd

let  arr = [50,60,40,70,90,80];

arr = arr.sort(descendingOrder);

console.log(arr);


function ascendingOrder(x,y)
{
    return y-x;
}

function descendingOrder(x,y)
{
    return x-y;
}