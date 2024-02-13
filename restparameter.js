// rest parameters

function TestAPI(...args) {
  // n unmber of paramters we can passs // binds the elements in an array
  console.log(args);
}

TestAPI(1, 2, 3, 5, 6);

let aa = sum(2,3,4,5);// function call here 

function sum(...numbers) {
  var total = 0;
  for (let number of numbers) {
    total = total + number;

  }
 // console.log(total);
  return total;
  
  
}

console.log(aa);



//console.log(` total count = ${a}`);
