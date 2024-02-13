// we will discuss callbacks in javascript

// callback is a function passed as an argument to a function // most important aspect here in 

// or we can once one thing is completed , other will start , kind of dependency 


// lets try by your own 

let result = sum(2,4,mul); // this approach in writing code is also fine . How , we need to understand 
// we are going to use in the function call and later we can see 

function sum(a,b,callback)
{
 let sumres = a+b;
 
  return mul(sumres);
 
}

function mul(input)
{
   //let val =  input * 4;
   //console.log("this is the value ",val);
   return input * 6;
}


console.log(`here is the final outfult ${result}`);


/// Call backs ensure that a function is not going 
// to get call untill the first task is completed 
// when function has to wait for another function

