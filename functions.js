function Test() // defining the function
{
 console.log("Hi we are in function");
}

Test(); // calling the function

let TestValue = function(){ // anonymous function
    console.log("we are assing this to variable");
}

TestValue(); // function expression 

console.log(TestValue);

// 

let result = ()=>{
    console.log("this is lamda expression");
}

result();

console.log(result);


// retrun statement in a function 

function getArea(length,breadth)
{
    let area = length * breadth;
    return area;
}

let areaofRectangle  = getArea(2,4);

//console.log("area is the area",areaofRectangle);
console.log(`area is the area - ${areaofRectangle}`); // template literal


// let is block scope {}
// var function scope  fn(){}






