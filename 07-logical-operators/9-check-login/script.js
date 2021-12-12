let user = prompt("Identify yourself", "");

if (user === "Admin") {

  let password = prompt("Enter your password", "");

  if (password === "TheMaster") {
    alert( "Welcome here !" );
  } else if (pass === ""|| password === null) {
    alert( "Canceled !" );
  } else {
    alert("Sorry, wrong password !" );
  }

} else if (user === "" || user === null) {
  alert("Canceled !");
} else {
  alert("Sorry, you can't enter here !");
}