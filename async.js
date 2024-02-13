// async = makes a function return a promise

async function display() {
  let fileupload = false;
  if (fileupload) {
    return "file is uploaded";
  } else {
    throw "file is not uploaded";
  }
}


display().then((value)=> console.log(value)).catch((error)=>console.log(error));
