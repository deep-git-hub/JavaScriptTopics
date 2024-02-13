// these are the call backs which are being applied over array 
// if you see call backs , they are something which accepts functions as a parameter

let arr = [1,2,3,4,5,6,7];

arr.forEach(dosomething);

function dosomething(element)
{
    console.log(element * 4);
    console.log(".............");
    console.log(element);
    
}

