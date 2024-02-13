// nested functions - outer functions can have the access to inner function but inner won't for ouer
// used this concept in closures

let username = "deepak";

let counter = 0;
login();
function login() {
    
    userNameDispaly();
    userCounterDisplay();
  function userNameDispaly() {
    console.log(`user name is ${username}`);
  }
  function userCounterDisplay() {
    console.log(`and the counter is ${counter}`);
  }
}
