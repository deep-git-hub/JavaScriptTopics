// we will discuss promises in Javascript

// promises = an object that encapsulate the result of an aysncrhonous operation
//           let asychronous method returns values  like sysnchronous methods
//           "I promise to return something in the future "

// call back , arroaw func , function expression

let promise = new Promise((resolve, reject) => {
  // if asynchronus activity is done then invoke resolve else invoke reject
  let fileuploaded = false;

  if (fileuploaded) {
    resolve("file is uploaded");
  } else {
    reject("file is not loaded");
  }
});


promise.then((value)=>{console.log(value)}).catch(error=>console.log(error));
