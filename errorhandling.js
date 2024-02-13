try {
    console.log("we are in try block");
    console.lag("we are into trouble");
} catch (error) {
    console.log(error) // if error is there in try blcok theni twill get executed 
} finally {
    console.log("we are in finally block"); //in all the cases it will get executed
}
