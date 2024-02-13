// function with private and preserved data 
//     give you access to outer function's scope from an inner function


// closure ka matlab ho gaya ki bahar wale function kije bhitre wale me use kar rahe 
// and bahar wale se hi sab return kar dete he 


function TestClousre()
{
 let outerValue = 23;
 let ourVariable = "ddepu";
 //innerDispaly();
 function innerDispaly()
 {
    console.log(`hey outer value is ${outerValue} and outer variable is ${ourVariable}`);
    ourVariable = "deepak";

 }

 return innerDispaly;
}

var result = TestClousre();
console.log(result());
console.log(result());

    